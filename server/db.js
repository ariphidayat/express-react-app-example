const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "rahasia",
    host: "127.0.0.1",
    port: 5432,
    database: "pern_todo_application"
});

module.exports = pool;