import express from 'express';
import { getCustomers, getCustomersById, createNewCustomer, updateCustomer, deleteOneCustomer, deleteAllCustomers } from '../controllers/customerController';

const router = express.Router();

router.get('/', getCustomers);
router.get('/id/:id', getCustomersById);
router.post('/add', createNewCustomer);
router.put('/edit/:id', updateCustomer);
router.delete('/delete/:id', deleteOneCustomer);
router.delete('/deleteCustomers', deleteAllCustomers);

export default router;
