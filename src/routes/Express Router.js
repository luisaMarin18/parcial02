//* Importa express y crea el router
import express from 'express';
const router = express.Router();

//* Llama al controlador con los métodos para las operaciones CRUD
import { getCustomers, getCustomersById, createNewCustomer, updateCustomer, deleteOneCustomer, deleteAllCustomers } from '../controllers/customerController'

//* Define las rutas y los métodos asociados
router.get('/', getCustomers); // Ruta para obtener todos los clientes
router.get('/id/:id', getCustomersById); // Ruta para obtener un cliente por ID
router.post('/add', createNewCustomer); // Ruta para agregar un nuevo cliente
router.put('/edit/:id', updateCustomer); // Ruta para actualizar un cliente por ID
router.delete('/delete/:id', deleteOneCustomer); // Ruta para eliminar un cliente por ID
router.delete('/deleteCustomers', deleteAllCustomers); // Ruta para eliminar todos los clientes

export default router;
