const express = require('express')
const app = express()
const port = 3000
const registro = function (req, res, next) {
     console.log('registro')
     next()
}

// ------------------------------Rotas------------------------------------

app.use(registro)
app.get('/', (req, res) =>
{
res.send('Hello World! (Rota Principal)')
})



app.use(registro)
app.get('/about', (req, res)=> {
    res.send('Esta é a rota de alcunha /about')
}) //about



app.use(registro)
app.post('/data', (req, res)=> {
    res.send('Esta é a rota de alcunha /data')
}) //data



app.use(registro)
app.get('/users/signin', (req, res)=> {
    res.send('Entrar na conta')
    app.get('/users/:userid',(req, res)=> {
    res.send('boas vindas ${req.params.userid}')
    })


    app.get('/users/signin', (req, res)=> {
        res.redirect('/users/signup')

    })
}) //users, dentro desta rota existe mais 2 rotas (folhas da árvore)








app.use(registro)
app.get('/users/signup', (req, res)=> {
    res.send('Crie sua conta')
}) //users, dentro desta rota existe mais 1 rotas (folhas da árvore)



app.use(registro)
app.get('/users/:userid', (req, res)=> {
    res.send('user ${req.params.userid}')
}) //users, dentro desta rota existe mais 0 rotas (folhas da árvore)


app.get('/users', (req, res) => {
    res.status(404).json('Página não encontrada');
  });


app.listen(port, () =>
{

console.log(`Example app listening on port ${port}`)
})
