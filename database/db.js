const { Pool } = require('pg');

// Создание пула подключений к базе данных
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vacation_list',
  password: '123',
  port: 5432, // порт по умолчанию для PostgreSQL
});

module.exports = pool
 
