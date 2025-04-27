// Importar el módulo 'mysql' para trabajar con la base de datos MySQL
import mysql from 'mysql';

// Importar el módulo 'dotenv' para manejar variables de entorno
import dotenv from 'dotenv';

// Cargar las variables de entorno desde un archivo .env
dotenv.config();

// Crear una conexión a la base de datos usando las variables de entorno
const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST, // Dirección del host de la base de datos (definido en el archivo .env)
    user: process.env.DB_USER, // Usuario para la conexión (definido en el archivo .env)
    password: process.env.DB_PASSWORD, // Contraseña para la conexión (definido en el archivo .env)
    database: process.env.DB_NAME, // Nombre de la base de datos (definido en el archivo .env)
    port: process.env.DB_PORT, // Puerto de la base de datos (definido en el archivo .env)
});

// Establecer la conexión con la base de datos
dbConnection.connect((error) => {
    if (error) {
        // Si hay un error al conectar, se muestra el mensaje de error
        console.error('Error en la conexión con la base de datos:', error);
        return; // Termina la ejecución si hay error
    }
    // Si la conexión es exitosa, se muestra un mensaje en la consola
    console.log('Conexión a la base de datos exitosa');
});

// Exportar la conexión para usarla en otros archivos
export default dbConnection;
