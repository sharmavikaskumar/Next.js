import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "todo_app",
  port: 3307,
});

export default db;
