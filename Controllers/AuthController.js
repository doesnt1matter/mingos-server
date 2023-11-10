const UserService = require("../Services/UserService.js");
const ErrorService = require("../Services/ErrorService.js");
const PasswordService = require("../Services/PasswordService.js");

//CLASS OF CONTROLLER
//В контроллерах пользуются сервисами(бизнес-логикой) и пишут всякие проверки
class AuthController {
    async Registation(req, res, next) {
        try {
            const { name, surname, patronymic, telephone, email, password } = req.body;
            const data = { name, surname, patronymic, telephone, email };

            const guest = await UserService.GetOne(telephone);
            if (guest) ErrorService.ThrowBadRequest("Пользователь уже существует")

            const user = await UserService.Create(data);
            const pass = await PasswordService.Create(user.id, password);

            res.json({ user, pass, message: "Пользователь создан" });
        }
        catch (error) {
            next(error)
        }
    }

    async Login(req, res, next) {
        try {
            const { login, password } = req.body;

            const user = await UserService.GetOne(login);
            if (!user) ErrorService.ThrowBadRequest("Пользователь не существует")

            const isPasswordValid = await PasswordService.Compare(user.id, password)

            res.json({isValid: isPasswordValid})
        }
        catch (error) {
            next(error)
        }
    }

    async Logout(req, res, next) {
        try {

        }
        catch (error) {
            next(error)
        }
    }
}

//EXPORT
module.exports = new AuthController();