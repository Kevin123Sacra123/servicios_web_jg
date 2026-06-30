import { Router } from "express";
import { getCitas, getCitasType, getCitaID, createCita, deleteCita, updateCita } from "../controller/citas.controllers.js";

const router = Router();

router.get('/citas', getCitas);

router.get('/citas/:tipo', getCitasType);

router.get('/cita/:id', getCitaID);

router.post('/cita/crear_cita', createCita);

router.delete("/cita/eliminar", deleteCita);

router.put("/cita/edit/:id", updateCita);

export default router;