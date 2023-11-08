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
            const data = req.body;

            const guest = await UserService.GetOne(data.telephone);
            if(guest) ErrorService.ThrowBadRequest("Пользователь уже существует")

            const user = await UserService.Create(data);

            res.json({user, message: "Пользователь создан"});
        }
        catch (error)
        {
            next(error)
        }
    }

    async Login(req, res, next)
    {
        try 
        {
            
        }
        catch (error)
        {
            next(error)
        }
    }

    async Logout(req, res, next)
    {
        try 
        {

        }
        catch (error)
        {
            next(error)
        }
    }
}

//EXPORT
module.exports = new AuthController();