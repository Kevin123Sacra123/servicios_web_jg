import { Router } from "express";
import { getEventos, getEventoID, createEvento, deleteEvento, updateEvento } from "../controller/evento.controllers.js";

const router = Router();

router.get('/eventos', getEventos);

router.get('/evento/:id', getEventoID);

router.post('/evento/crear', createEvento);

router.delete("/evento/:id", deleteEvento);

router.put("/evento/edit/:id", updateEvento);

export default router;