import { pool } from "../db.js";

export const getCitas = async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM public.citas");
    res.json(rows);
};

export const getCitasType = async (req, res) => {
    const { tipo } = req.params;
    const { rows } = await pool.query("SELECT * FROM public.citas WHERE tipo = $1", [tipo]);
    res.json(rows);
};


export const getCitaID = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM public.citas WHERE id_citas = $1", [id]);
    res.json(rows);
}

export const createCita = async (req, res) => {
    //INSERT INTO public.citas(	id_citas, tipo, fecha, hora, estado, personal, comentario)	VALUES (?, ?, ?, ?, ?, ?, ?);
    try{
        const { tipo, fecha, hora, estado, personal, id_paciente } = req.body;
        if (!tipo || !fecha || !hora || !estado || !personal || !id_paciente ){
            return res.status(400).json({
                exito: false,
                mensaje: "los campos son obligatorios",
            });
        }
        const consulta = `INSERT INTO public.citas (tipo, fecha, hora, estado, personal, id_paciente) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const valores = [tipo, fecha, hora, estado, personal, id_paciente];
        const result = await pool.query(consulta, valores);
        res.status(201).json({
            exito: true,
            mensaje: "cita creada",
            error: result.rows[0]
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            exito: false,
            mensaje: "error en la cita",
            error: error.message
        })
    }
};

export const deleteCita = async (req, res) => {
    const { id } = req.params
    const result = await pool.query('DELETE FROM public.citas WHERE id_citas = $1', [id]);
    if (result.length === 0){
        return res.status(404).json({
            mesage: "usuario no encontrado"
        });
    }
    res.send("eliminando cita")
};

export const updateCita = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const consulta = `UPDATE public.citas SET name = $1, email = $2 WHERE id = $3 RETURNING *`;
        const valores = [name, email, id];
        const result = await pool.query(consulta, valores);
        if(result.rows.length === 0){
            return res.status(404).json({
                exito: false,
                mensaje: "no hay XD",
                error: result.rows
            });
        }
        res.status(201).json({
            exito: true,
            mensaje: "actualizado",
            error: result.rows[0]
        });
        
    }catch(error){
        console.log(error);
        res.status(500).json({
            exito: false,
            mensaje: "error al crear usuario",
            error: error.message
        })
    }
};
