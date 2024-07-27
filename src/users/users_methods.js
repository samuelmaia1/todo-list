import {db} from '../database/database_config.js'

export class UsersDB{
    async list(login){
        if (login){
            try {
                const selectCommand = `SELECT * FROM usuarios WHERE login = '${login}'`;
                const response = await db.query(selectCommand);
                return response.rows;
            } catch (error) {
                console.log(error)
            }
            
        } else {
            const selectCommand = `SELECT * FROM usuarios`;
            const response = await db.query(selectCommand);
            return response.rows;
        }
    }

    async 
}