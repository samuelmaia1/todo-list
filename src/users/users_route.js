import express from 'express'
import {db} from '../database/database_config.js'
import { UsersDB } from './users_methods.js'

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

router.get('/', async (req, res) => {
    try {
        const users = await usersDB.list()
        return res.json(users)
    } catch (error) {
        console.log(error)
    }
})

router.post('/new', async (req, res) => {
    
})

export default router