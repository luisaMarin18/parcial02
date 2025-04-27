//* Importa los módulos necesarios
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './router';
import cors from 'cors';

//* Inicializa la aplicación Express
const app = express();
dotenv.config();

//* Configura el puerto del servidor
const port = process.env.NODE_PORT;

//* Middleware para registro de solicitudes HTTP
app.use(morgan('dev'));

//* Habilita CORS para todas las solicitudes
app.use(cors());

//* Middleware para parsear los datos JSON y de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Asocia las rutas definidas en el archivo router.js
router(app);

//* Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
