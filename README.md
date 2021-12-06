# Errors

### Error: Cannot find module '../db'

The path for the module was wrong, './db' is the right path.

### Error: Cannot find module 'mongoose'

The package name `mongose` was wrong, I uninstalled it abd downloaded the right one `mongoose`.

### Error: Cannot find module './../../db/models/todos'

The path for the model was wrong, './../../db/models/todo' is the right path.

### Error: Cannot find module 'mongose'

The name of the model was wrong, `mongoose` is the right name.

### TypeError: mongoose.module is not a function

The name of the function `module` was wrong, `model` is the right name.

### Error: Route.get() requires a callback function but got a [object Undefined]

1- The name of the function `module.export` was wrong, `module.exports` is the right name.
2- `updateTodo` controller was missing, I added the controller to the exports object.

### ReferenceError: morgan is not defined

The package `morgan` was not defined, I added `const morgan = require("morgan");` to index.js to define it.

### Error: listen EACCES: permission denied 4000;

The port number was wrong `PORT=4000;` because there is a semicolon after the port number, I removed the semicolon and it worked.

### TypeError: Cannot read property 'todo' of undefined / createTodo route

1- The cors package was not invoked `app.use(cors);`, I fixed it by invoking the package `app.use(cors());`.
2- The todoRouter was Iinitiated before middlewares, I fixed it by Iinitiating the router after the middlewares.
3- The name of the field was wrong `todo` because there is no field  with the name `todo`, I fixed it by writing `task: todo`.
4- The field `task` was type was `Boolean`, I fixed it by making it to `String`.
5- In the db file for the database dotenv was not defined, I defined it and started the configuration.
6- In the db file for the database url name from the dotenv was wrong `process.env.DB_URI`, I fixed it by writing the right name `process.env.DB_URL`.

### completeTodo route

Changed the filter from `id`to `_id: id`.

### updateTodo route

Changed the route by adding the params to the endpoint.
