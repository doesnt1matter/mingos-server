const UserService = require("../Services/UserService.js");
const ErrorService = require("../Services/ErrorService.js");

//CLASS OF CONTROLLER
//В контроллерах пользуются сервисами(бизнес-логикой) и пишут всякие проверки
class UserController
{
    async GetAll(req, res, next)
    {
        try 
        {
            const users = await UserService.GetAll();
            res.json({users: users});
        }
        catch (error)
        {
            next(error)
        }
    }

    async UpdateAccount(req, res, next)
    {
        try 
        {
            const {id, data} = req.body;

            const user = await UserService.GetOne(id);
            if(!user | !user.length) ErrorService.ThrowBadRequest("Пользователь удален или не существует")

            const updatedUser = await UserService.Update(id, data);

            res.json({user: updatedUser, message: "Пользователь обновлен"});
        }
        catch (error)
        {
            next(error)
        }
    }

    async DeleteAccount(req, res, next)
    {
        try 
        {
            const {id} = req.body;

            const user = await UserService.GetOne(id);
            if(!user | !user.length) ErrorService.ThrowBadRequest("Пользователь удален или не существует")

            await UserService.Delete(id);

            res.json({user, message: "Пользователь удален"});
        }
        catch (error)
        {
            next(error)
        }
    }
}

//EXPORT
module.exports = new UserController();