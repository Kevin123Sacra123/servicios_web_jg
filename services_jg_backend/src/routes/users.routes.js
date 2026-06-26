import { Router } from "express";
import { getUsers, getUserID, getUserLoginID, createUser, deleteUser, updateUser } from "../controller/user.controllers.js";

const router = Router();

router.get('/users', getUsers);

router.get('/login/:id', getUserID);

router.get('/users/:id', getUserLoginID);

router.post('/users/crear', createUser);

router.delete('/users/:id', deleteUser);

router.put('/users/:id', updateUser);

export default router;