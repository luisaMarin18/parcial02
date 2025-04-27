require('dotenv').config();
import mysql from 'mysql';

// Configuración de la conexión a la base de datos
const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST, // El host de la base de datos
    user: process.env.DB_USER, // El usuario de la base de datos
    password: process.env.DB_PASSWORD, // La contraseña del usuario
    database: process.env.DB_NAME, // El nombre de la base de datos
    port: process.env.DB_PORT, // El puerto de la base de datos
});

// Conexión a la base de datos
dbConnection.connect((error) => {
    if (error) {
        // Maneja los errores de conexión
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Conexión a la base de datos cerrada.');
        }
        if (error.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene demasiadas conexiones.');
        }
        if (error.code === 'ECONNREFUSED') {
            console.error('La conexión a la base de datos fue rechazada.');
        }
    } else {
        console.log('Conexión a la base de datos exitosa');
    }
});

export default dbConnection;
