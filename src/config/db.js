import pg from "pg";
import 'dotenv/config'
const { Pool } = pg;

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

const config = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  allowExitOnIdle: true,
};

const pool = new Pool(config);

/* const getDate = async () => {
  const {rows} = await pool.query("select now()");
  console.log(rows[0].now);
};

getDate();
 */

export default pool