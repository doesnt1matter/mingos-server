const mysql = require("mysql2");

//POOL
let POOL = null;

//CREATE SERVICE
//В сервисах пишут бизнес логику, которую используют контроллеры
class DBService 
{
    CreatePool()
    {
        POOL = mysql.createPool({
            connectionLimit: 5,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_SCHEMA,
            password: process.env.DB_PASSWORD
        }).promise();
    }

    async CheckConnect()
    {
        await POOL.getConnection()
            .then(() => console.log("Successfully connected to MySQL"))
            .catch((error) => {
                console.log(error.message)
                process.exit(1)
            })
    }

    async Connect()
    {
        this.CreatePool();
        await this.CheckConnect();
    }

    async Query(sql, fields)
    {
        let result = await POOL.query(sql, fields)
            .catch((error) => {
                console.log(error.message);
                return null;
            });

        if(!result)return result;
        else return result[0];
    }
}

//EXPORT
module.exports = new DBService();