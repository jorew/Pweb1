# Pweb1


## Dias de Anotações:

### 25/08/2026:

##### Vocabulário (new content)
- Roteamento básico: como a aplicação responde o cliente
- Req -> Require
- Res -> Response
- Aplicação: conjunto de rotas
- next() -> próxima middleware
- Use -> método coringa (sempre vai rodar e sempre será chamado -> não precisa de rota)
- Embedded



##### Postman:
- método all: app.all (não é arquivo)

##### Middleware: Funções que possui acesso a req e a res
- Modificação de req e res
- Execução de código
- Finalização do ciclo da pilha
- Chamam a próxima middleware


###### Tipos:
- NV Aplicação
> use() e method()>

- NV Roteador
> funcionamento da aplicação >

###### NV Embedded:
- express static



##### Exemplos:
- app.use(myLogger) -> myLogger (variável) > Use >
- app.get('/', (req, res) => {}) > Rotas >
- router.use() > NV roteador >




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





app.listen(port, () =>
{

console.log(`Example app listening on port ${port}`)
})















