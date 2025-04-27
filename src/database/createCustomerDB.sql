-- Crear el esquema 'test_db' si no existe
CREATE SCHEMA IF NOT EXISTS test_db;

-- Eliminar la tabla 'customers' si existe
DROP TABLE IF EXISTS customers;

-- Crear la tabla 'customers' si no existe
CREATE TABLE IF NOT EXISTS customers (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- Definir la columna 'id' como clave primaria y autoincrementable
    first_name VARCHAR(50) NOT NULL, -- Definir la columna 'first_name' para almacenar el primer nombre, no puede ser nula
    last_name VARCHAR(50) NOT NULL, -- Definir la columna 'last_name' para almacenar el apellido, no puede ser nula
    email VARCHAR(100) UNIQUE NOT NULL, -- Definir la columna 'email' para almacenar el correo electrónico, debe ser único y no nula
    age INT DEFAULT 0 -- Definir la columna 'age' para almacenar la edad, con un valor predeterminado de 0
);
