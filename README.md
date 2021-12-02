# Chamberbank!

## Solução Utilizada

<p>A ideia foi criar um banco que, como open-banking, pode se ter acesso as transações do usuário sem necessariamente estar autenticado como o mesmo, como é possível utilizando a rota <span style="background:#222">/transaction</span>, enviando o id do usuário que se deseja obter acesso ao histórico de transações.</p>

## Pacotes Adicionais Utilizados

### Nestjs
- Framework para criação de back-end
- Criação de rotas, controllers, services e arquitetura

#### Prisma
- Criação de migrations
- Conexão e queries no banco de dados

#### Passport
- Autenticação de usuários
- Verificação de token em rotas privadas

#### JWT
- Criação de tokens
- Autenticação e verificação de dados do usuário

#### Bcrypt
- Criptografia de senhas de usuário
- Descpritografia de senha para autenticação

#### UUID
- Geração de id para usuários e transações

## Getting Started

### Pré-requisitos

para rodar o projeto em modo de desenvolvimento, você vai precisar do mínimo para rodar uma aplicação em Nodejs, quer pode ser achado [aqui](https://nodejs.dev/learn/introduction-to-nodejs), e do postgre database, que pode ser achado [aqui](https://www.postgresqltutorial.com/postgresql-getting-started/)

Você também poderá utilizar também um front-end rodando na sua máquina, que pode ser encontrado [aqui](https://github.com/akaluisinho/chamberbank-frontend).

### Instalação

**Clonando Repositório**

```
$ git clone https://github.com/akaLuisinho/chamberbank-backend

$ cd chamberbank-backend
```

**Instalando Dependências**

```
$ yarn
```

_ou_

```
$ npm install
```

**Variáveis Ambiente**

```
DATABASE_URL="<url do banco de dados postgre>"
JWT_SECRET="<jwt secret>"
```

# User

## End-point: Create User
### Method: POST
>```
>chamberbank-backend.herokuapp.com/user/create
>```

Receive user data from body and returns user with auto-generated account code and id

### Body (**raw**)

```json
{
    "name": "Carlos Nogueira Filho",
    "password": "12345678",
    "cpf":"23857205483",
    "email":"test@test.com",
    "phone":"(61) 99999-9999"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ - - - - - - - - - - - - -

## End-point: Login User
### Method: POST
>```
>chamberbank-backend.herokuapp.com/user/login
>```

Receive user accountCode and password and authenticates, returning a JWT token

### Body (**raw**)

```json
{
    "accountCode": "570374",
    "password": "12345678"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ - - - - - - - - - - - - -

## End-point: List Users
### Method: GET
>```
>chamberbank-backend.herokuapp.com/user
>```

List all users

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|JWT TOKEN|string|

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ - - - - - - - - - - - - -

## End-point: Find User By Id
### Method: GET
>```
>chamberbank-backend.herokuapp.com/user/id/{id}
>```

Receives an user id in the Params and returns all user data

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|JWT TOKEN|string|

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ - - - - - - - - - - - - -

## End-point: Find User By Accountcode
### Method: GET
>```
>chamberbank-backend.herokuapp.com/user/accountCode/{accountCode}
>```

Receives an user account code in the Params and returns all user data

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|JWT TOKEN|string|

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ - - - - - - - - - - - - -

## End-point: Find User By CPF
### Method: GET
>```
>chamberbank-backend.herokuapp.com/user/cpf/{cpf}
>```

Receives an user account code in the Params and returns all user data

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|JWT TOKEN|string|

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ - - - - - - - - - - - - -

## End-point: Deposit Money
### Method: PATCH
>```
>chamberbank-backend.herokuapp.com/user/deposit
>```

Receives a value in the body and inserts money into authenticated user balance

### Body (**raw**)

```json
{
    "moneyQuantity": 0
}
```

### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|JWT TOKEN|string|

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ - - - - - - - - - - - - -

# Transaction 

## End-point: Create Transaction
### Method: POST
>```
>chamberbank-backend.herokuapp.com/transaction
>```

Receives an id and value to make a transaction between the authenticated user and the "toId"

### Body (**raw**)

```json
{
    "toId": "<id from user that will receive the money>",
    "moneyQuantity": 0
}
```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|JWT TOKEN|string|

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ - - - - - - - - - - - - -

## End-point: Get Transaction From One User
### Method: GET
>```
>chamberbank-backend.herokuapp.com/transaction/{userId}
>```

Get all transactions from the user sent in the body

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ - - - - - - - - - - - - -
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
