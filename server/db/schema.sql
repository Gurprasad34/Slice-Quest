-- Drop the database if it exists and create a new one
DROP DATABASE IF EXISTS pizza_db;
CREATE DATABASE pizza_db;

-- -- Switch to the new database
-- \c pizza_db;

-- Create pizza type table
-- CREATE TABLE pizza_types (
--   pizza_type_id SERIAL PRIMARY KEY,
--   pizza_name VARCHAR(50) NOT NULL UNIQUE
-- );

-- -- Create pizza shop table
-- CREATE TABLE pizza_shops (
--   shop_id SERIAL PRIMARY KEY,
--   shop_name VARCHAR(100) NOT NULL UNIQUE,
--   pizza_type_id INTEGER NOT NULL,
--   FOREIGN KEY (pizza_type_id) 
--     REFERENCES pizza_types (pizza_type_id) 
--     ON DELETE CASCADE
-- );
