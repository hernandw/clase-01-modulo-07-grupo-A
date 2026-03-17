import express from 'express'

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Página Principal')
})

router.get('/about', (req, res)=>{
    res.send('Página de About')
})



export default router