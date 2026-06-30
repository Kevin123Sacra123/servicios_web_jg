import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM public.usuarios");
    res.json(rows);
};

export const getUserID = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM public.usuarios WHERE id_usuarios = $1", [id]);
    if (rows.length === 0 ){
        return res.status(404).json({mesage: "Usuario no encontrado"});
    }
    res.json(rows);
}

export const getUserLogin = async (req, res) => {
    try{
        const { correo, password } = req.body;
        if (!correo || !password){
            return res.status(400).json({
                exito: false,
                mensaje: "los campos son obligatorios",
            });
        }
        const consulta = `SELECT id_usuarios, rol FROM public.usuarios WHERE correo = $1 and password = $2 `;
        const valores = [correo, password];
        const result = await pool.query(consulta, valores);
        res.status(201).json({
            exito: true,
            mensaje: "login",
            error: result.rows[0]
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            exito: false,
            mensaje: "error al ingresar",
            error: error.message
        })
    }
}

export const createUser = async (req, res) => {
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
            mensaje: "error en el Usero",
            error: error.message
        })
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params
    const result = await pool.query('DELETE FROM public.inventario WHERE id_User = $1', [id]);
    if (result.length === 0){
        return res.status(404).json({
            mesage: "usuario no encontrado"
        });
    }
    res.send("eliminando Useros")
};

export const updateUser = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const consulta = `UPDATE public.users SET name = $1, email = $2 WHERE id = $3 RETURNING *`;
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
