### BFF Clean Architecture API - 🚀 🔄 🌐

#### Descrição
Codificação de aplicação é uma API RESTful com a estrutura pronta para BFF que foi desenvolvida com a arquitetura limpa (Clean Architecture), utilizando Express e TypeScript. O banco de dados utilizado é o PostgreSQL, gerenciado pelo Prisma como ORM. A aplicação inclui autenticação segura de usuários, com armazenamento de senhas criptografadas usando bcrypt. O objetivo deste projeto é demonstrar a aplicação de princípios de arquitetura limpa, separando as responsabilidades em camadas distintas e mantendo a escalabilidade e manutenibilidade do código.


#### Tecnologias Utilizadas 🛠
- Node.js: Ambiente de execução JavaScript.
- Express: Framework web para Node.js.
- TypeScript: Superconjunto de JavaScript que adiciona tipagem estática.
- Prisma: ORM (Object-Relational Mapper) para gerenciar o banco de dados PostgreSQL.
- PostgreSQL: Sistema de gerenciamento de banco de dados relacional.
- bcrypt: Biblioteca para hash de senhas.
- Clean Architecture: Princípios de arquitetura limpa, que visam separar a lógica de negócios das dependências de implementação.
  

#### Passos para Instalação
Clone o repositório:

```
git clone https://github.com/seu-usuario/bff-clean-arch.git
```

```
cd bff-clean-arch
```

#### Instale as dependências

```
npm install
```

```
npm install express
```

```
npm install typescript --save-dev
```

```
npm install @types/bcrypt@^5.0.2 @types/express@^4.17.21 @types/jsonwebtoken@^9.0.6 @types/node@^22.5.1 prisma@^5.19.0 ts-node@^10.9.2 typescript@^5.5.4 --save-dev
```




Configure o banco de dados: Crie um banco de dados PostgreSQL e configure a variável de ambiente DATABASE_URL no arquivo .env:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome-do-banco?schema=public"
```

#### Executar as migrações do banco de dados:

```
npx prisma migrate dev
```


#### Configuração
Arquivo .env
O arquivo .env deve conter as seguintes variáveis de ambiente

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome-do-banco?schema=public"
```

#### Execução
Para iniciar o servidor em ambiente de desenvolvimento, execute:

```
node index.js
```


#### Descrição das Pastas

- Application: Contém os controladores responsáveis por lidar com as requisições HTTP e coordenar as operações entre os casos de uso e os repositórios.
- Domain: Contém a lógica de negócio, incluindo entidades, interfaces e casos de uso.
- Infrastructure: Contém implementações específicas de infraestrutura, como o repositório de dados.
- prisma: Contém a configuração e as migrações do Prisma ORM.
- index.ts: Ponto de entrada principal da aplicação.
- server.ts: Configuração do servidor Express.


#### Endpoints da API
- Registro de Usuário
Endpoint: /register
Método: POST
Descrição: Registra um novo usuário na aplicação.
Exemplo de Requisição

```
{
  "name": "Emerson Amorim",
  "email": "emerson_tecno@hotmail.com",
  "password": "123456"
}

```

Exemplo de Resposta
```
{
  "id": "uuid",
  "name": "Emerson Amorim",
  "email": "emerson_tecno@hotmail.com"
}
```

#### Autenticação de Usuário
Endpoint: /authenticate
Método: POST
Descrição: Autentica um usuário e retorna um token JWT.
Exemplo de Requisição
```
{
  "email": "emerson_tecno@hotmail.com",
  "password": "123456"
}
```

Exemplo de Resposta
```
{
  "token": "jwt_token",
  "user": {
    "id": "uuid",
    "email": "emerson_tecno@hotmail.com"
  }
}
```

#### Obter Perfil do Usuário
Endpoint: /user/:id
Método: GET
Descrição: Retorna o perfil de um usuário autenticado.
Exemplo de Resposta

```
{
  "id": "uuid",
  "name": "Emerson Amorim",
  "email": "emerson_tecno@hotmail.com"
}
```



### Conclusão

Em resumo, a aplicação é um exemplo de API Rest com NodeJS e Postgres que mostra como estruturar e documentar uma API RESTful com Clean Architecture, Prisma, PostgreSQL e outras tecnologias. Sinta-se à vontade para modificar e adaptar conforme necessário para o seu projeto.

### Desenvolvido por:
Emerson Amorim [@emerson-amorim-dev](https://www.linkedin.com/in/emerson-amorim-dev/)
