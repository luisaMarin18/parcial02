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

/* 
* Esta consulta verifica si existe un esquema llamado test_db, y lo crea si no existe
*/
CREATE SCHEMA IF NOT EXISTS test_db;

/*
* Esta consulta verifica si existe una tabla llamada 'customers', y si existe, la elimina
*/
DROP TABLE IF EXISTS customers;

/*
* Si la tabla no existe, esta consulta la crea con los campos que especificamos
*/
CREATE TABLE IF NOT EXISTS customers (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,  -- ID del cliente, clave primaria y autoincremental
    first_name VARCHAR(50) NOT NULL,             -- Nombre del cliente
    last_name VARCHAR(50) NOT NULL,              -- Apellido del cliente
    email VARCHAR(100) UNIQUE NOT NULL,          -- Email del cliente, debe ser único
    age INT DEFAULT 0                            -- Edad del cliente, por defecto es 0
);

