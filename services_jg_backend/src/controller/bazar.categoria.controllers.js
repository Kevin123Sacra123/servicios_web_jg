import { pool } from "../db.js";

export const getCategorias = async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM public.categoria");
    res.json(rows);
};

export const getCategoriaID = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM public.categoria WHERE id_categoria = $1", [id]);
    if (rows.length === 0 ){
        return res.status(404).json({mesage: "categoria no encontrado"});
    }
    res.json(rows);
}

export const createCategoria = async (req, res) => {
    try{
        const { nombre, descripcion} = req.body;
        if (!nombre || !descripcion ){
            return res.status(400).json({
                exito: false,
                mensaje: "los campos son obligatorios",
            });
        }
        const consulta = `INSERT INTO public.categoria (nombre, descripcion) VALUES ($1, $2) RETURNING *`;
        const valores = [nombre, descripcion];
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
            mensaje: "error en el producto",
            error: error.message
        })
    }
};

export const deleteCategoria = async (req, res) => {
    const { id } = req.params
    const result = await pool.query('DELETE FROM public.categoria WHERE id_categoria = $1', [id]);
    if (result.length === 0){
        return res.status(404).json({
            mesage: "usuario no encontrado"
        });
    }
    res.send("eliminando categoria")
};

export const updateCategoria = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const { nombre, descripcion } = req.body;
        const consulta = `UPDATE public.categoria SET nombre = $1, descripcion = $2 WHERE id_categoria = $3 RETURNING`;
        const valores = [nombre, descripcion, id];
        const result = await pool.query(consulta, valores);
        if(result.rows.length === 0){
            return res.status(404).json({
                exito: false,
                mensaje: "no hay categoria",
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
            mensaje: "error al actualizar",
            error: error.message
        })
    }
};
