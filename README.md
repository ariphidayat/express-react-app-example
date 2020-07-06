
# Todo Application using Express and React

## Prerequisite
* Installed [Node.js 12](https://nodejs.org/en/download/)
* Installed [PostgreSQL 12](https://www.postgresql.org/download/) Server 
  and execute [database.sql](/server/database.sql) file

## Run Server Application
Type and execute the following command on your terminal

```bash
$ cd server
$ npm install
$ node index.js
```
P.S.: Highly recommended to use [nodemon](https://www.npmjs.com/package/nodemon) to automatically reload the application when file changes are detected. 

## Run Client Application
Type and execute the following command on your terminal

```bash
$ cd client
$ npm install
$ npm start
```
Since the client application generated using [Create React App](https://github.com/facebook/create-react-app), please visit the documentation for rest of available command.

## APIs
The following is Available APIs produced by server application:

Create Todo
```bash
$ curl -X  POST 'localhost:5000/api/v1/todos' \
-H 'Content-Type: application/json' \
-d '{"description":"Lean Express"}'
```

Get All Todos
```bash
$ curl -X GET 'localhost:5000/api/v1/todos'
```

Get Todo By Id
```bash
$ curl -X GET 'localhost:5000/api/v1/todos/[todo id here]'
```

Update Todo By Id
```bash
$ curl -X PUT 'localhost:5000/api/v1/todos/[todo id here]' \
-H 'Content-Type: application/json' \
-d '{"description":"Learn React"}'
```

Delete Todo By Id
```bash
$ curl -X DELETE 'localhost:5000/api/v1/todo/[todo id here]'
```