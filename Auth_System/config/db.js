import mysql from "mysql2/promise.js";

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});



export default pool;