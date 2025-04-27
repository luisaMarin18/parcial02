import dbConnection from '../database/dbConnection';

// Obtener todos los clientes
export const getCustomers = (req, res) => {
    const sqlQuery = 'SELECT * FROM customers';

    dbConnection.query(sqlQuery, (error, results) => {
        if (error) {
            console.error('Error al obtener los clientes:', error);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
        res.status(200).json(results);
    });
};

// Obtener cliente por ID
export const getCustomersById = (req, res) => {
    const id = parseInt(req.params.id);

    // Validación de ID
    if (isNaN(id)) {
        return res.status(400).json({ error: 'El ID debe ser un número válido' });
    }

    const sqlQuery = `SELECT * FROM customers WHERE id = ${id}`;

    dbConnection.query(sqlQuery, (error, result) => {
        if (error) {
            console.error('Error al obtener el cliente:', error);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.status(200).json(result[0]);
    });
};

// Crear un nuevo cliente
export const createNewCustomer = (req, res) => {
    const { first_name, last_name, email, age } = req.body;

    // Validación de campos vacíos
    if (!first_name || !last_name || !email || !age) {
        return res.status(400).json({
            error: 'Todos los campos son obligatorios (first_name, last_name, email, age)',
        });
    }

    const customerObj = [first_name, last_name, email, age];
    const sqlQuery = 'INSERT INTO customers (first_name, last_name, email, age) VALUES (?, ?, ?, ?)';

    dbConnection.query(sqlQuery, customerObj, (err, result) => {
        if (err) {
            console.error('Error al crear cliente:', err);
            return res.status(500).json({ error: 'Error al crear el cliente' });
        }
        res.status(201).json({ message: `Cliente creado con ID: ${result.insertId}` });
    });
};

// Actualizar cliente
export const updateCustomer = (req, res) => {
    const id = parseInt(req.params.id);
    const { first_name, last_name, email, age } = req.body;

    // Validación de ID
    if (isNaN(id)) {
        return res.status(400).json({ error: 'El ID debe ser un número válido' });
    }

    // Validación de campos vacíos
    if (!first_name || !last_name || !email || !age) {
        return res.status(400).json({
            error: 'Todos los campos son obligatorios (first_name, last_name, email, age)',
        });
    }

    const customerObj = [first_name, last_name, email, age];
    const sqlQuery = `UPDATE customers SET first_name = ?, last_name = ?, email = ?, age = ? WHERE id = ${id}`;

    dbConnection.query(sqlQuery, customerObj, (error, result) => {
        if (error) {
            console.error('Error al actualizar el cliente:', error);
            return res.status(500).json({ error: 'Error al actualizar el cliente' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.status(200).json({ message: `Cliente con ID ${id} actualizado exitosamente` });
    });
};

// Eliminar un cliente por ID
export const deleteOneCustomer = (req, res) => {
    const id = parseInt(req.params.id);

    // Validación de ID
    if (isNaN(id)) {
        return res.status(400).json({ error: 'El ID debe ser un número válido' });
    }

    const sqlQuery = `DELETE FROM customers WHERE id = ${id}`;

    dbConnection.query(sqlQuery, (error) => {
        if (error) {
            console.error('Error al eliminar el cliente:', error);
            return res.status(500).json({ error: 'Error al eliminar el cliente' });
        }
        res.status(200).json({ message: `Cliente con ID ${id} eliminado exitosamente` });
    });
};

// Eliminar todos los clientes
export const deleteAllCustomers = (req, res) => {
    const sqlQuery = 'TRUNCATE TABLE customers';

    dbConnection.query(sqlQuery, (error) => {
        if (error) {
            console.error('Error al eliminar todos los clientes:', error);
            return res.status(500).json({ error: 'Error al eliminar los clientes' });
        }
        res.status(200).json({ message: 'Todos los registros de clientes han sido eliminados' });
    });
};
