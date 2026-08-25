const express = require('express')
const app = express()
const port = 3000

// 2. Middleware de Aplicação (registra acesso a qualquer página)
// Declarado apenas UMA VEZ no topo
const registro = function (req, res, next) {
    console.log(`[LOG] Acesso à rota: ${req.url}`)
    next()
}
app.use(registro)

// ------------------------------ Rotas ------------------------------------

// Rota Principal
app.get('/', (req, res) => {
    res.send('Hello World! (Rota Principal)')
})

app.get('/about', (req, res) => {
    res.send('Esta é a rota /about')
})

app.post('/data', (req, res) => {
    res.send('Esta é a rota /data')
})


app.get('/users/signin', (req, res) => {
    res.redirect('/users/signup')
})

app.get('/users/signup', (req, res) => {
    res.send('Crie sua conta')
})


app.get('/users/:userid', (req, res) => {
    res.send(`Boas-vindas, usuário ${req.params.userid}!`)
})


app.use((req, res) => {
    res.status(404).send('<h1>Página não encontrada (404)</h1><a href="/">Voltar para o início</a>')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
