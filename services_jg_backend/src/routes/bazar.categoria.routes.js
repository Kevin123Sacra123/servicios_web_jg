import { Router } from "express";
import { getCategorias, getCategoriaID, createCategoria, deleteCategoria, updateCategoria } from "../controller/bazar.categoria.controllers.js";

const router = Router();

router.get('/bazar/categorias', getCategorias);

router.get('/bazar/categoria/:id', getCategoriaID);

router.post('/bazar/categoria/crear', createCategoria);

router.delete('/bazar/categoria/:id', deleteCategoria);

router.put('/bazar/categoria/:id', updateCategoria);

export default router;