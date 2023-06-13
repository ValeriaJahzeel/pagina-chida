import express from 'express';
import cursosRoutes from './routes/cursos.routes.js';
import usercoursesRoutes from './routes/usercourses.routes.js';

import cors from "cors";

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(cors());

app.use('/api/', cursosRoutes);
app.use('/api/', usercoursesRoutes);

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
});

app.listen(3000);
console.log("Servidor escuchando en el puerto 3000");