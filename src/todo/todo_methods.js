import {db} from '../database/database_config.js';
import {randomUUID} from 'node:crypto';

export class TodoDB{
    async listAll(){
        try {
            const response = await db.query(`SELECT * FROM tarefas`);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async listUserTodos(userID){
        try {
            const selectCommand = `SELECT * FROM usuarios_tarefas WHERE id_usuario = '${userID}'`;
            const response = await db.query(selectCommand);
            return response;
        } catch (error) {
            console.error(error)
        }
    }
}