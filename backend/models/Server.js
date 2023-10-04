import express from "express";
import deporteRoutes from "../routes/routes.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../swagger/version.json' assert {type: "json"}
import cors from "cors";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT163;
        this.middlewares();

        this.routes();
    }

    listener(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on port ${this.port}`);
        })
    }   

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument));
    }

    routes(){
        this.app.use("/api",deporteRoutes);
    }
}


export default Server;