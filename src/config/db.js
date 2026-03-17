import pg from 'pg'

const { Pool } = pg


const config = {
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432,
    allowExitOnIdle: true
}