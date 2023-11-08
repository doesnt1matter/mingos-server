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
server.use("/auth", require("./Routers/AuthRouter.js"));
server.use("/user", require("./Routers/UserRouter.js"));
server.use("/vacancy", require("./Routers/VacancyRouter.js"));
server.use(require("./Middlewares/ErrorMiddleware.js"));

//START SERVER FUNCTION
function Start()
{
    try
    {
        server.listen(5000, () => {console.log(`Server start on port: ${_port}`)});
        DBService.Connect();
    }
    catch (error)
    {
        console.log(error.message);
        process.exit(1);
    }
}
Start();