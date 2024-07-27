import pg from 'pg'

import dotenv from 'dotenv'

dotenv.config()

const host = process.env.DB_HOST;
const password = process.env.DB_PASS;
const user = process.env.DB_USER;
const database = process.env.DB_NAME;
const port = process.env.DB_PORT

const {Pool} = pg

export const db = new Pool({
    host: host,
    password: password,
    user: user,
    database: database,
    port: port
})
