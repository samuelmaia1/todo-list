import express from 'express'
import {db} from '../database/database_config.js'
import { UsersDB } from '../users/users_methods.js'
import { TodoDB } from './todo_methods.js'

const usersDB = new UsersDB()
const todosDB = new TodoDB()

const router = express.Router()

router.post('/', (req, res) => {
    
})

export default router