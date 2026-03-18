import express from 'express'
import { agregarViaje, mostrarViajes, mostrarFecha } from '../queries.js'

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Página Principal')
})

router.get('/about', (req, res)=>{
    res.send('Página de About')
})

router.get('/viajes', async (req, res)=>{
    const viajes = await mostrarViajes()
    res.json(viajes)
})

router.post('/add-viaje', async(req, res)=>{
    const { destino, presupuesto}  = req.body
    await agregarViaje(destino, presupuesto)
    res.send('Viaje agregado con éxito')
})

router.get('/fecha', async (req, res)=>{
    const fecha = mostrarFecha()
    res.json(fecha)
})



export default router