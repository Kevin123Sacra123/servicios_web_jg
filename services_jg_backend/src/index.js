import express from 'express';
import cors from 'cors';
import {port} from './config.js';
import InventarioRoutes from './routes/bazar.inventario.routes.js'; 
import CategoriasRoutes from './routes/bazar.categoria.routes.js'; 
import morgan from 'morgan';

const app = express();
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(InventarioRoutes);
app.use(CategoriasRoutes);
app.listen(port);
console.log("Server en", port);