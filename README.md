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

  ROTA                             |        HTTP       |      Descrição           | 
---------------------------------- | ----------------- | ------------------------ | 
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
Após executar o comando irá aparecer a mensagem no terminal:

Rodando com Express na porta 8080!
Erro ao se conectar MongoServerError: bad auth : Authentication failed.

Para facilitar o uso dessa projeto irei disponibilizar o arquivo * `.env` no email juntamente do link deste repositório basta copiar e colar o arquivo * `.env` na pasta raiz do projeto.

## Utilizando o POSTMAN (Exemplos)

![cadastrando cliente](https://user-images.githubusercontent.com/96061515/231640314-1fbe6e9a-b040-47c9-b0ef-1a15406f3077.JPG)


após criar o primeiro Client crie as variávei global conforme a imagem abaixo:
![variáveis global - Postman](https://user-images.githubusercontent.com/96061515/231641462-cf125a46-e6e4-4761-8696-a77a0320e42e.JPG)

Exemplo para buscar todos os clientes cadastrados:
![image](https://user-images.githubusercontent.com/96061515/231641966-2b33d9f6-7bbd-44d6-a2cc-5104c21de764.png)

Exemplo para fazer importação de clientes em massa pelo POSTMAN:
![image](https://user-images.githubusercontent.com/96061515/231642641-9791d203-cecf-4508-8f03-8d4cb0506dd5.png)

Clique nos "..." na frente da sua collection do POSTMAN, em seguida clique em "Run collection"
![image](https://user-images.githubusercontent.com/96061515/231642844-664a73cb-166b-47be-b461-459a473cc11d.png)

Selecione o arquivo "Grupo Skill win.csv" na pasta upload do projeto clonado para importação utilizando POSTMAN no Windows caso contrário utilize o "Grupo Skill.csv"
![image](https://user-images.githubusercontent.com/96061515/231642955-aefbfa19-0e33-4c90-ae1f-7afc5d9de68b.png)

Verifique o arquivo a ser importado e o "Data File Type" para "text/csv"
![image](https://user-images.githubusercontent.com/96061515/231643218-2e0fd8a6-efae-45d5-907f-f2e3b634cf99.png)

Clique em "Preview" para verificar a formatação do arquivo .csv na pasta uploads (formatação para Windows é diferente) certifique de alterar o "RUN ORDER" para selecionar somente o método "POST - Importação de arquivo csv"
![image](https://user-images.githubusercontent.com/96061515/231643346-d453228c-7422-404a-acba-790fcee34013.png)

Clientes criados:
![image](https://user-images.githubusercontent.com/96061515/231643486-aa934240-c13a-44bc-a624-59edcc6a309c.png)
