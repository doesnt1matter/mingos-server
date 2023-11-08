const query = require("./DBService.js").Query

const IDService = require("./IDService.js");

//CREATE SERVICE
//В сервисах пишут бизнес логику, которую используют контроллеры
class UserService {
    async GetAll() {
        const result = await query("select * from users");
        return result;
    }

    async GetOne(identificator) {
        const result = await query("select * from users where id=? or telephone=?", [identificator, identificator]);
        return result;
    }

    async Create(data) {
        const user = await query(`insert into users (id, name, surname, patronymic, telephone, email) 
        values (?,?,?,?,?,?)`,
            [IDService.GenerateID(), ...data]
        );

        return user;
    }

    async Update(id, data) {
        const result = await query(`update users
        set 
        name=?
        surname=?
        patronymic=?
        telephone=?
        email=?
        where id=${id}`, [...data]);

        return result;
    }

    async Delete(id) {
        await query(`delete from users where id=?`, [id]);
    }
}

//EXPORT
module.exports = new UserService();