import { Router } from "express";
import { getUsers, getUserID,  getUserLogin, createUser, deleteUser, updateUser } from "../controller/user.controllers.js";

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUserID);

router.post('/login', getUserLogin);

router.post('/users/crear', createUser);

router.delete('/users/:id', deleteUser);

router.put('/users/:id', updateUser);

export default router;