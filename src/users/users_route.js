import express from 'express'
import {db} from '../database/database_config.js'
import { UsersDB } from './users_methods.js'
import { TodoDB } from '../todo/todo_methods.js'

const todosDB = new TodoDB()
const usersDB = new UsersDB()

const router = express.Router()

router.get('/:login', async (req, res) => {
    const {login} = req.params
    try {
        const users = await usersDB.list(login)
        if (users.length === 0){
            return res.status(404).end('Erro: usuario nao encontrado')
        }
        return res.status(200).json(users)
    } catch (error) {
        console.log(error.message)
        return res.send(error.message)
    }
})

router.get('/:login/todos', async (req, res) => {
    const {login} = req.params
    try {
        const user = await usersDB.list(login)

        if (user.length === 0){
            return res.status(404).end('Erro: usuario nao encontrado')
        }
        
        const response = await todosDB.listUserTodos(user.id)
        console.log(response)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
        return res.send(error.message)
    }
})

router.get('/', async (req, res) => {
    try {
        const users = await usersDB.list()
        return res.json(users)
    } catch (error) {
        console.log(error)
    }
})

router.post('/:login/todos', async (req, res) => {
    const {login} = req.params

    const {titulo, descricao, urgencia, status} = req.body

    const todo = {
        titulo,
        descricao,
        urgencia,
        status
    }

    try {
        const user = await usersDB.list(login)
        console.log(user)

        if (user.length === 0){
            return res.status(404).end('Erro: usuario nao encontrado')
        }
        
        const response = await todosDB.create(user[0], todo)
        if (response.rowCount === 1){
            return res.status(200).json({msg: 'Adicionado com sucesso.'})
        } else {
            throw new Error('Erro ao criar nova tarefa.')
        }
    } catch (error) {
        return res.send(error.message)
    }
})

router.post('/register', async (req, res) => {
    const {nome, email, senha, ddd, telefone, login} = req.body;

    const user = {
        nome,
        email,
        senha,
        ddd,
        telefone,
        login
    };

    try {
        const response = await usersDB.create(user)
        if (response.rowCount === 1){
            return res.status(201).json({msg: 'Adicionado com sucesso.'})
        }
    } catch (error) {
        console.error(error)
    }
})

export default router