# Protocolo dos Endpoints da API

## Este documento apresenta a descrição da API em markdown.

- ### API desenvolvida em Node.Js

#
Dependências utilizadas no projeto:
- express
- cors
- mongoose
- uuid
- md5
# 
Para **executar** a API é necessário utilizar o comando:
``` 
npm run dev 
```

Aplicação será executada na porta declarada em seu arquivo .env.
# 
## Protocolo dos Endpoints da API 

| Endpoint | Método | Ação |
| ------ |:-------:| :-----|
| **/users**      | POST | Registra novo usuário | 
| **/users**      | GET  | Retorna a lista de usuários |
| **/deleteUsers**| POST | Remove o usuário selecionado |
| **/users**      | PATCH| Edita o usuário selecionado |

## Users collection [/users]

### Listar todos usuários [GET]

- Response 

        [
            {
                "_id": "string",
                "name": "string",
                "birthday": "string",
                "password": "string",
                "email": "string"
            }
        ]

### Criar novo usuário [POST]

  - Body

        {
            "name": "string",
            "birthday": "string",
            "password": "string",
            "email": "string"
        }

### Editar usuário [PATCH]

  - Body

        {
            "_id": "string",
            "name": "string",
            "birthday": "string",
            "password": "string",
            "email": "string"
        }

### Deletar usuário [POST] [/deleteUsers]

  - Body

        {
            "_id": "string"
        }


#### Links úteis:
[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[Download Node.js ](https://nodejs.org/en/download/)