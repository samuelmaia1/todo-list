import {db} from './database_config.js'

async function create_table(){
    await db.query('CREATE TABLE usuarios (id TEXT PRIMARY KEY,nome TEXT NOT NULL,email TEXT NOT NULL,login TEXT NOT NULL,senha TEXT NOT NULL,ddd INTEGER NOT NULL,telefone INTEGER NOT NULL);')

    await db.query('CREATE TABLE tarefas (id TEXT PRIMARY KEY,titulo TEXT NOT NULL,email TEXT NOT NULL,login TEXT NOT NULL,senha TEXT NOT NULL,ddd INTEGER NOT NULL,telefone INTEGER NOT NULL);')
}

create_table()