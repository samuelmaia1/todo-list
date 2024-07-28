import {db} from '../database/database_config.js';
import {randomUUID} from 'node:crypto';

export class TodoDB{
    async listAll(){
        try {
            const response = await db.query(`SELECT * FROM tarefas`);
            return response.rows;
        } catch (error) {
            console.error(error);
        }
    }

    async listUserTodos(userID){
        try {
            const selectCommand = `SELECT * FROM tarefas WHERE id_usuario = '${userID}'`;
            const response = await db.query(selectCommand);
            return response.rows;
        } catch (error) {
            console.error(error)
        }
    }

    async listEspecificTodo(id){
        try {
            const selectCommand = `SELECT * FROM tarefas WHERE id = '${id}'`
            const response = await db.query(selectCommand)
            return response.rows;
        } catch (error) {
            
        }
    }

    async create(user, todo){
        try {
            const todoID = randomUUID()

            const insertCommand = `INSERT INTO tarefas (id, titulo, id_usuario, descricao, urgencia, status) VALUES ('${todoID}','${todo.titulo}','${user.id}','${todo.descricao}',${todo.urgencia},'${todo.status}') `

            const insertCommandSecondTable = `INSERT INTO usuarios_tarefas (id_usuario, id_tarefa) VALUES ('${user.id}', '${todoID}')`

            const response = await db.query(insertCommand) && await db.query(insertCommandSecondTable)

            return response
        } catch (error) {
            console.error(error)
        }
    }
}