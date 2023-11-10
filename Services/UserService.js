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
        const result = await query("select * from users where id=? or telephone=? or email=?", [identificator, identificator, identificator]);
        return result[0];
    }

    async Create(data) {
        await query(`insert into users 
        (id, name, surname, patronymic, telephone, email) 
        values (?,?,?,?,?,?)`,
            [
                IDService.GenerateID(),
                data.name,
                data.surname,
                data.patronymic,
                data.telephone,
                data.email
            ]
        );

        const user = await this.GetOne(data.telephone);
        return user;
    }

    async Update(id, data) {
        await query(`update users
        set 
        name=?,
        surname=?,
        patronymic=?,
        telephone=?,
        email=?
        where id='${id}'`, 
        [
            data.name,
            data.surname,
            data.patronymic,
            data.telephone,
            data.email
        ]);

        const result = await this.GetOne(id);

        return result;
    }

    async Delete(id) {
        await query(`delete from users where id=?`, [id]);
    }
}

//EXPORT
module.exports = new UserService();