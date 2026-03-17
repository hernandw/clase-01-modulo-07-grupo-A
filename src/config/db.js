import pg from 'pg'

const { Pool } = pg

const {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME} = process.env




const config = {
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
    allowExitOnIdle: true
}

