const mysql = require("mysql2");

const tryConnect = () => {
    const pool = mysql.createPool({
        connectionLimit: 5,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_SCHEMA,
        password: process.env.DB_PASSWORD
    });

    pool.getConnection((error) => 
    {
        if(error) {
            console.error(error.message);
            process.exit(1);
        }
        else console.log("Success MySQL connect");
    })

    return pool;
}

module.exports = tryConnect();