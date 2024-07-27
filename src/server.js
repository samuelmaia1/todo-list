// Importações de módulos externos
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import usersRoute from './users/users_route.js'

// Importanto algumas variáveis de ambiente do .env
dotenv.config()
const port = process.env.SERVER_PORT

const server = express()

// Middleware para aceitar objetos no formato JSON no body da requisição
server.use(express.json())

// Middleware para aceitar requisições de aplicações externas
server.use(cors())

// Módulo de rotas - usuários
server.use('/users', usersRoute)

server.get('/', (req, res) => {
    res
    .setHeader('Content-type', 'application/json')
    .send(JSON.stringify({
        users: '/users',
        user_url: '/users/{login}',
        new_users: '/users/new',
        users_todos: '/users/{login}/todos',
        todo: '/users/{login}/todos/{id}',
        todo_examples: '/todos'
    }, null, 3))
})

server.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})