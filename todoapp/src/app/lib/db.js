import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "127.0.0.1",   // NOT localhost
  user: "root",
  password: "",
  database: "todo_app",
  port: 3307,          // YOUR XAMPP PORT
});
