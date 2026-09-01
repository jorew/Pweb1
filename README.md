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



## 27/08/2026:


### B+A = BA
- npm init -y = package.json;
- npm install express express-generator --view=ejs . = package.lockjson e nodemodules;
- npx express-generator --view=ejs . = estrutura principal (de fato);
- ^C = parar.



### Rotas: 
- Quanto mais rotas = maior arquivo JS;
- Router = função do express “express.router()” instanciamento de um router;
- Use: chama quem é executado e o local da execução;
- Module.exports: fazer com que o Router seja visível ao JS;
- res.render(‘’,{}): Renderizar um Template (modelo Index) -> Index está dentro de views e também é no formato JS; 
- O diretório Views guarda os templates (telas?)
- .get(): criador de rotas (recuperar dados de um servidor);
- .post(): criador de rotas que recebe solicitações http do tipo POST (envio de dados para criar novos ou modificar recursos);

### /Views:
- EJS: semelhança de sintaxe do HTML;
- path.join(_dirname, ‘’) = aponta para um diretório;
- <% %> = tag de JS.

### /Public: 
- Tudo que eu quero que o usuário veja.



### Stackblitz: 
- Auxiliador de estrutura. 

---



## 01/09/2026

### Template Engine:
> Estrutura que adiciona HTML automaticamente de maneira que o html se adapta ao programa (requerimentos) isso que explica o "dinamicamente". >

- Os templates estão sempre localizados em /views (diretório);
- ejs, pug, handle...;
- Rota e template são pares entre eles;

### partials:
> Aquilo que se repete nas páginas. >
- Footer (rodapé), Header (cabeçalho) e Sidebar (barra lateral);
- Tudo que se repete e/ou é reutilizável;

- <%- include('{local-apontado}') %> = usar pedaços (header, footer e sidebar) e inserir no index.ejs;
- Em caso de modificação do código, é necessário reiniciar o server (localhost) e  atualizar a página;
- magic.ejs (template) quando criado também deve ser criado magic.js em routes, esse é apenas um exemplo de como funciona os pares;
- module.exports = app; (no final do app.js);

- Também é necessário alterar o app.js usando o Use, criando uma nova variável referente a rota+template e app.route;
- mudar um arquivo isso se refere a todos os outros arquivos.








