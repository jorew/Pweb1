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




















