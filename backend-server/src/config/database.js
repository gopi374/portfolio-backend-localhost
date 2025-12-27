const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.getConnection()
    .then(() => console.log('Connected to MySQL'))
    .catch(err => console.error('Database connection failed:', err));

module.exports = db;


// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// db.connect((err) => {
//   if (err) {
//     console.error("DB connection failed:", err);
//   } else {
//     console.log("Database connected");
//   }
// });

module.exports = db;