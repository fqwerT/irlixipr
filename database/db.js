const { Pool } = require('pg');

// Создание пула подключений к базе данных
const pg = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vacations_list',
  password: '123',
  port: 5432, // порт по умолчанию для PostgreSQL
});

module.exports = pg
 
