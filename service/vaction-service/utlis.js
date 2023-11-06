const insertQuery = `
  INSERT INTO your_table_name (type, status, start_date, end_date, count_days, number_request)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
`;

module.exports = insertQuery