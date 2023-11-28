import express from "express";
import cors from "cors";
import conection from "../db/conection.js";

import { PORT } from "../../config.js";
import { swaggerDocs } from "../swagger/swagger.js";
import RoutesUsers  from "../routes/users.js";
import RoutesLogin  from "../routes/login.js";
import RoutesCarts  from "../routes/carts.js";

class Server {
  constructor() {
    this.apiPaths = {
        user: '/api/users',
        login: '/api/login',
        carts: '/api/carts',
    };

    this.app = express();
    this.port = PORT

    // Métodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }
  async dbConnection() {
    try {
      await conection.authenticate();
      console.log("Database online");
    } catch (error) {
      console.log(error);
    }
  }
  middlewares() {
    // CORS
    this.app.use(cors());
    // Lectura del body 
    this.app.use(express.json());
  }
  routes() {
    this.app.use(this.apiPaths.user, RoutesUsers);
    this.app.use(this.apiPaths.login, RoutesLogin);
    this.app.use(this.apiPaths.carts, RoutesCarts);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
      swaggerDocs(this.app, this.port);
    });
  }
}

export default Server;
