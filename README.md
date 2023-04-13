# Teste Desenvolvedor Back end

## Recursos utilizados no desenvolvimento:

- Node.Js;
- Express.Js;
- Conceito RestFul;
- MongoDb;
- Mongoose;
- JSON data (para retornar os dados);
- PostMan (testar a API criada);

## Testando a Aplicação no Postman:
Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman] (https://www.postman.com/downloads/)

Depois de realizar o download do Postman, basta agora realizar os passos abaiaxo para 
poder testar cada API criada!

  ROTA                             |     HTTP(Verbo)   |      Descrição           | 
---------------------------------- | ----------------- | ---------------------    | 
http://localhost:8080/users        |        POST       |     Criar Cliente        |
http://localhost:8080/users/:id    |       PATCH       | Atualizar Cliente por id | 
http://localhost:8080/users/:id    |        GET        |  Buscar Cliente por id   |
http://localhost:8080/users        |        GET        | Buscar todos os Clientes |
http://localhost:8080/users/:id    |       DELETE      |  Deletar Cliente por id  |


### Pre-Requisitos

▸ Node.js: https://nodejs.org/en/download/

▸ MongoDB Atlas: https://www.mongodb.com/atlas/database

▸ Mongoose: https://www.npmjs.com/package/mongoose

▸ dotenv: https://www.npmjs.com/package/dotenv

▸ Postman: https://www.postman.com/downloads/

```
npm install express nodemon mongoose dotenv
```

## Executar Localmente
Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução:

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
node index.js
```




