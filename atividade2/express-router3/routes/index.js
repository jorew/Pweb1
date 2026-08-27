const express = require('express')
const app = express()
const port = 3000

// Importa as rotas criadas
const routes = require('./routes')

// 2. Middleware de Aplicação (registra acesso a qualquer página)
const registro = function (req, res, next) {
    console.log(`[LOG] Acesso à rota: ${req.url}`)
    next()
}
app.use(registro)

// Conecta o Router à aplicação
app.use('/', routes)

// Middleware para tratamento de rotas não encontradas (404)
app.use((req, res) => {
    res.status(404).send('<h1>Página não encontrada (404)</h1><a href="/">Voltar para o início</a>')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})