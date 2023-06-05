# Kenzie Contacts API Documentation

Uma solução para os seus contatos.

## Rodar aplicação

### Backend

```shell
cd backend
yarn
yarn dev

```

#### Via Docker

```shell
cd backend
docker-compose up

```

### Frontend

```shell
cd frontend
yarn
yarn dev

```

## Authentication

A autenticação nas rotas da API é feita utilizando o token de autenticação do tipo Bearer. O token deve ser enviado no cabeçalho da requisição.

### Exemplo de cabeçalho de autenticação
```makefile
Authorization: Bearer <token>
```

## Endpoints

### Login

Realiza o login do usuário.

Método: POST

URL: /api/login

Corpo da requisição:

```json
{
  "email": "fulano@example.com",
  "password": "123456"
}
```

Retorno esperado

**STATUS 200 Ok**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjg1NDk5MTgzLCJleHAiOjE2ODU1ODU1ODMsInN1YiI6IjEifQ.xwtYVqWFoEYnOPQOwdJz3f5Z4L8ry-LUXpMQwv6FYfw"
}
```

#### Registro de Usuário

Registra um novo usuário.

Método: POST

URL: /api/users/

Corpo da requisição:
```json
{
  "name": "Fulano de Tal",
  "email": "fulano@example.com",
  "phone": "1234567890",
  "admin": true,
  "createdAt": "2023-06-05"
}
```

Retorno esperado

**STATUS 201 Created**
```json
{
  "id": 1,
  "name": "Fulano de Tal",
  "email": "fulano@example.com",
  "phone": "1234567890",
  "admin": true,
  "createdAt": "2023-06-05"
}
```

### Listar Usuários

Retorna a lista de usuários cadastrados.

Método: GET
URL: /api/users

Autenticação necessária

Retorno esperado

**STATUS 200 Ok**
```json
[
  {
    "id": 1,
    "name": "Fulano de Tal",
    "email": "fulano@example.com",
    "phone": "1234567890",
    "admin": true,
    "createdAt": "2023-06-05"
  }
]
```

#### Atualizar Usuário

Atualiza as informações de um usuário existente.

Método: PATCH

URL: /api/users/{id}

Autenticação necessária

Corpo da requisição:
```json
{
  "name": "fulano@example.com"
}
```
Retorno esperado

**STATUS 200 Ok**

```json
{
  "id": 1,
  "name": "Fulano de Tal",
  "email": "fulano@example.com",
  "phone": "1234567890",
  "admin": true,
  "createdAt": "2023-06-05"
}
```

#### Excluir Usuário

Exclui um usuário existente.

Método: DELETE

URL: /api/users/{id}

Autenticação necessária

Nenhum retorno esperado

**STATUS 204 No Content**

#### Criar Contato

Descrição: Cria um novo contato

Método: POST

URL: /api/contacts

Autenticação necessária

Corpo da requisição:
```json
{
  "name": "Beltrano da Silva",
  "email": "beltrano@example.com",
  "phone": "0987654321"
}
```

Resposta Esperada:

** STATUS 201 Created**

Corpo da requisição:
```json
{
  "id": 1,
  "name": "Beltrano da Silva",
  "email": "beltrano@example.com",
  "phone": "0987654321",
  "createdAt": "2023-06-04"
}
```

#### Listar Contatos

Retorna a lista de contatos cadastrados pelo usuario logado.

Método: GET

URL: /api/contacts

Autenticação necessária

Retorno esperado

**STATUS 200 Ok**
```json
[
  {
    "id": 1,
    "name": "Beltrano da Silva",
    "email": "beltrano@example.com",
    "phone": "0987654321",
    "createdAt": "2023-06-04"
  }
]
```

####  Atualizar Contato
Descrição: Atualiza as informações de um contato

Método: PATCH

URL: /api/contacts/{id}

Corpo da requisição:
```json
{
  "nome": "Beltrano da Silva Jr"
}
```

Retorno esperado

**STATUS 200 Ok**
```json
{
  "id": 1,
  "name": "Beltrano da Silva Jr",
  "email": "beltrano@example.com",
  "phone": "0987654321",
  "createdAt": "2023-06-04"
}
```

### Excluir Contato

Exclui um contato

Método: DELETE

URL: /api/users/{id}

Autenticação necessária

Nenhum retorno esperado

**STATUS 204 No Content**


