import express from "express";
import "dotenv/config.js"
import "./config/database.js" //el orden de las importaciones importa
import cors from "cors"
import morgan from "morgan"
import indexRouter from "./router/index.js"
import not_found_handler from "./middlewares/not_found_handler.js";
import error_handler from "./middlewares/error_handler.js";

const server = express();
const PORT = process.env.PORT || 8080
const ready = ()=> console.log("server ready in port : " + PORT);


server.use(express.json()); //nos devuelve la informacion en json en entrada y salida
server.use(express.urlencoded({ extended: true })); //nos permite recibir peticiones complejas
server.use(cors()) // se encarga de la seguridad
server.use(morgan("dev")) // se encarga de llevar el control de peticiones en el servidor

//router
server.use("/api", indexRouter);
server.use(not_found_handler);
server.use(error_handler);

server.listen(PORT,ready)



