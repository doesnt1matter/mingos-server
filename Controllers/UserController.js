const UserService = require("../Services/UserService.js");
const ErrorService = require("../Services/ErrorService.js");
const PasswordService = require("../Services/PasswordService.js");

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
            const {id, fields} = req.body;

            const user = await UserService.GetOne(id);
            if(!user) ErrorService.ThrowBadRequest("Пользователь удален или не существует")

            const data = {
                name: fields.name ?? user.name,
                surname: fields.surname ?? user.surname,
                patronymic: fields.patronymic ?? user.patronymic,
                telephone: fields.telephone ?? user.telephone,
                email: fields.email ?? user.email
            }

            const candidateByTelephone = await UserService.GetOne(fields.telephone);
            const candidateByEmail = await UserService.GetOne(fields.email);
            if(candidateByEmail || candidateByTelephone) ErrorService.ThrowBadRequest("Пользователь с такими данными уже зарегистрирован")

            const updatedUser = await UserService.Update(id, data);

            res.json({user: updatedUser, message: "Пользователь обновлен"});
        }
        catch (error)
        {
            next(error)
        }
    }

    async UpdatePassword(req, res, next)
    {
        try 
        {
            const {id, password, newPassword} = req.body;

            const user = await UserService.GetOne(id);
            if(!user) ErrorService.ThrowBadRequest("Пользователь удален или не существует")

            const isPasswordValid = await PasswordService.Compare(user.id, password)
            if(!isPasswordValid) ErrorService.ThrowBadRequest("Неправильный пароль")

            const passwordDTO = await PasswordService.Update(user.id, newPassword);

            res.json({password: passwordDTO, message: "Пароль обновлен"});
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
            const {id, password} = req.body;

            const user = await UserService.GetOne(id);
            if(!user) ErrorService.ThrowBadRequest("Пользователь удален или не существует")

            const isPasswordValid = await PasswordService.Compare(user.id, password)
            if(!isPasswordValid) ErrorService.ThrowBadRequest("Неправильный пароль")

            await PasswordService.Delete(id);
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