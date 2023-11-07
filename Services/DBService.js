//MODULES
const mysql = require("mysql2");
const ErrorService = require("../Services/ErrorService.js");

//CREATE SERVICE
//В сервисах пишут бизнес логику, которую используют контроллеры
class DBService {
    connection = null;

    //Configure MySQL connection
    configure(config) {
        this.connection = mysql.createConnection(
            {
                host: config.host ?? "localhost",
                user: config.user ?? "root",
                port: config.port ?? 3306,
                database: config.database,
                password: config.password
            }
        );
    }

    //Connect to MySQL server
    connect() {
        if (!this.connection) ErrorService.ThrowServerError("MySQL not configure");

        this.connection.connect(
            (error) => {
                if (error) ErrorService.ThrowServerError(error.message);
                else console.log("Successfully MySQL connect");
            }
        )
    }

    //Close MySQL connection
    close() {
        if (!this.connection) ErrorService.ThrowServerError("MySQL not configure");

        this.connection.close(
            (error) => {
                if (error) ErrorService.ThrowServerError(error.message);
                else console.log("Successfully close MySQL connection");
            }
        )

        this.connection = null;
    }
}

module.exports = new DBService();