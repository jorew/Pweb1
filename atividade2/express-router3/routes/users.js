const express = require('express')
const router = express.Router()

// Rota Principal
router.get('/', (req, res) => {
    res.send('Hello World! (Rota Principal)')
})

router.get('/about', (req, res) => {
    res.send('Esta é a rota /about')
})

router.post('/data', (req, res) => {
    res.send('Esta é a rota /data')
})

// Rotas de Usuário agrupadas no Router
router.get('/users/signin', (req, res) => {
    res.redirect('/users/signup')
})

router.get('/users/signup', (req, res) => {
    res.send('Crie sua conta')
})

router.get('/users/:userid', (req, res) => {
    res.send(`Boas-vindas, usuário ${req.params.userid}!`)
})

module.exports = router