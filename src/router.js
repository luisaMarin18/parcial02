//* Importa las rutas de los clientes
import customerRoutes from './routes/customers.routes';

//* Aquí definimos el primer endpoint
const router = (app) => {
    app.use('/customers', customerRoutes); // Ruta para las operaciones CRUD de los clientes
};

export default router;
