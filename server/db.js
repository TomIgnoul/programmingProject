import mysql from "mysql";

export const db = mysql.createConnection({
    // nog aan te passen eens we de sql-db hebben ingesteld
    host: "localhost",
    user: "root",
    password: "password",
    database: "naam-database"
});