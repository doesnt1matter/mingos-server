//MODULES
require("dotenv").config();
const express = require("express");
const CORS = require("cors");
const server = express();

//DATABASE
const DBService = require("./Services/DBService.js");

//SYSTEM FIELDS
const _clientUrl = process.env.CLIENT_URL;
const _port = process.env.PORT | 5000;

//MIDDLEWARES
server.use(express.json());
server.use(CORS({origin: _clientUrl}));
server.use("/vacancy", require("./Routers/VacancyRouter"));
server.use(require("./Middlewares/ErrorMiddleware.js"));

//START SERVER FUNCTION
function Start()
{
    try
    {
        server.listen(5000, () => {console.log(`Server start on port: ${_port}`)});
        
        //database connect
        DBService.configure({database: "mingos", password: "Sobaka3g4?"});
        DBService.connect();
    }
    catch (error)
    {
        console.log(error.message);
        process.exit(1);
    }
}
Start();