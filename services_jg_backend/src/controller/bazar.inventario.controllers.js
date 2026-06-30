import { pool } from "../db.js";

export const getProducts = async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM public.inventario");
    res.json(rows);
};

export const getProductID = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM public.inventario WHERE id_product = $1", [id]);
    if (rows.length === 0 ){
        return res.status(404).json({mesage: "producto no encontrado"});
    }
    res.json(rows);
}

export const createProduct = async (req, res) => {
    try{
        const { nombre, descripcion, categoria, stock, precio, estado } = req.body;
        if (!nombre || !descripcion || !categoria || !stock || !precio || !estado ){
            return res.status(400).json({
                exito: false,
                mensaje: "los campos son obligatorios",
            });
        }
        const consulta = `INSERT INTO public.inventario (nombre, descripcion, categoria, stock, precio, estado) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const valores = [nombre, descripcion, categoria, stock, precio, estado];
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

export const deleteProduct = async (req, res) => {
    const { id } = req.params
    const result = await pool.query('DELETE FROM public.inventario WHERE id_product = $1', [id]);
    if (result.length === 0){
        return res.status(404).json({
            mesage: "usuario no encontrado"
        });
    }
    res.send("eliminando productos")
};

export const updateProduct = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const { nombre, descripcion, categoria, stock, precio, estado } = req.body;
        const consulta = `UPDATE public.inventario SET nombre = $1, descripcion = $2, categoria = $3, stock = $4, precio = $5, estado = $6 WHERE id_product = $7 RETURNING *`;
        const valores = [nombre, descripcion, categoria, stock, precio, estado, id];
        const result = await pool.query(consulta, valores);
        if(result.rows.length === 0){
            return res.status(404).json({
                exito: false,
                mensaje: "no hay objeto",
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
