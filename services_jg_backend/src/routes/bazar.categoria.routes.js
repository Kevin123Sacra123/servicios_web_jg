import { Router } from "express";
import { getCategorias, getCategoriaID, createCategoria, deleteCategoria, updateCategoria } from "../controller/bazar.categoria.controllers.js";

const router = Router();

router.get('/bazar/categorias', getCategorias);

router.get('/bazar/categorias/:id', getCategoriaID);

router.post('/bazar/categorias/crear', createCategoria);

router.delete('/bazar/categorias/:id', deleteCategoria);

router.put('/bazar/categorias/:id', updateCategoria);

export default router;