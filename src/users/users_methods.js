import {db} from '../database/database_config.js'
import {randomUUID} from 'node:crypto'

export class UsersDB{
    async list(login){
        if (login){
            try {
                const selectCommand = `SELECT * FROM usuarios WHERE login = '${login}'`;
                const response = await db.query(selectCommand);
                return response.rows;
            } catch (error) {
                console.log(error);
            }
            
        } else {
            const selectCommand = `SELECT * FROM usuarios`;
            const response = await db.query(selectCommand);
            return response.rows;
        }
    }

    async create(user){
        try {
            const insertCommand = `INSERT INTO usuarios (id, nome, email, senha, ddd, telefone, login) VALUES ('${randomUUID()}', '${user.nome}', '${user.email}', '${user.senha}', ${user.ddd}, ${user.telefone}, '${user.login}')`;

            const response = await db.query(insertCommand);

            return response;
        } catch (error) {
            console.error(error);
        }
    }

}