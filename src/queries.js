import pool from "./config/db.js";

const agregarViaje = async (destino, presupuesto) => {
  const consulta = "INSERT INTO viajes values(DEFAULT, $1, $2) returning";
  const values = [destino, presupuesto];
  const result = await pool.query(consulta, values);
  console.log("Viaje agregado");
};

const mostrarViajes = async () => {
  const { rows } = await pool.query("Select * from viajes");
  console.log(rows)
  return rows;
};

const mostrarFecha = async()=>{
    const result = await pool.query("Select NOW()")
    return result.rows
}

export { agregarViaje, mostrarViajes, mostrarFecha };
