import { Router } from "express";
import { getProducts, getProductID, createProduct, deleteProduct, updateProduct } from "../controller/bazar.inventario.controllers.js";

const router = Router();

router.get('/bazar/inventario', getProducts);

router.get('/bazar/inventario/edit/:id', getProductID);

router.post('/bazar/inventario/crear_producto', createProduct);

router.delete("/bazar/inventario/:id", deleteProduct);

router.put("/bazar/inventario/edit/:id", updateProduct);

export default router;