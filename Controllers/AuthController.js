const UserService = require("../Services/UserService.js");
const ErrorService = require("../Services/ErrorService.js");

//CLASS OF CONTROLLER
//В контроллерах пользуются сервисами(бизнес-логикой) и пишут всякие проверки
class AuthController
{
    async Registation(req, res, next)
    {
        try 
        {
            const guest = UserService.GetAll();
            res.json(guest);
        }
        catch (error)
        {
            next(error)
        }
    }
}

//EXPORT
module.exports = new AuthController();