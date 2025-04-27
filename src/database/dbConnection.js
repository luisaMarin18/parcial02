import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

dbConnection.connect((error) => {
    if (error) {
        console.error('Error en la conexión con la base de datos:', error);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

export default dbConnection;
