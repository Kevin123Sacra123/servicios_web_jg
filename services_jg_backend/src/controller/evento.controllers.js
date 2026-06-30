import { pool } from "../db.js";

export const getEventos = async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM public.eventos");
    res.json(rows);
};

export const getEventoID = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM public.eventos WHERE id_eventos = $1", [id]);
    if (rows.length === 0 ){
        return res.status(404).json({mesage: "evento no encontrado"});
    }
    res.json(rows);
}

export const createEvento = async (req, res) => {
    try{
        const {nombre, descripcion, fecha, hora_inicio, hora_fin, lugar, capacidad } = req.body;
        if (!nombre || !descripcion || !fecha || !hora_inicio || !hora_fin || !lugar || !capacidad ){
            return res.status(400).json({
                exito: false,
                mensaje: "los campos son obligatorios",
            });
        }
        const consulta = `INSERT INTO public.eventos (nombre, descripcion, fecha, hora_inicio, hora_fin, lugar, capacidad) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
        const valores = [nombre, descripcion, fecha, hora_inicio, hora_fin, lugar, capacidad];
        const result = await pool.query(consulta, valores);
        res.status(201).json({
            exito: true,
            mensaje: "creado",
            error: result.rows[0]
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            exito: false,
            mensaje: "error en la creacion",
            error: error.message
        })
    }
};

export const deleteEvento = async (req, res) => {
    const { id } = req.params
    const result = await pool.query('DELETE FROM public.eventos WHERE id_evento = $1', [id]);
    if (result.length === 0){
        return res.status(404).json({
            mesage: "evento no encontrado"
        });
    }
    res.send("eliminando Evento")
};

export const updateEvento = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const {nombre, descripcion, fecha, hora_inicio, hora_fin, lugar, capacidad } = req.body;
        const consulta = `UPDATE public.eventos SET nombre = $1, descripcion = $2, fecha = $3, hora_inicio = $4, hora_fin = $5, lugar = $6, capacidad = $7 WHERE id_evento = $8 RETURNING *`;
        const valores = [nombre, descripcion, fecha, hora_inicio, hora_fin, lugar, capacidad, id];
        const result = await pool.query(consulta, valores);
        if(result.rows.length === 0){
            return res.status(404).json({
                exito: false,
                mensaje: "no hay XD",
                data: result.rows
            });
        }
        res.status(200).json({
            exito: true,
            mensaje: "actualizado",
            data: result.rows[0]
        });
        
    }catch(error){
        console.log(error);
        res.status(500).json({
            exito: false,
            mensaje: "error al actualizar",
            error: error.message
        })
    }
};
