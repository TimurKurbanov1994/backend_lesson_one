import express, { Request, Response } from "express";
import router from "./router/router";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";

const app: express.Application = express();
const port: number = 5000;

createConnection()
  .then(async () => {
    app.use(bodyParser.json());
    app.use(express.json());
    app.use("/api", router);
    app.get("/", (req: Request, res: Response) => {
      res.send("[TEST]");
      console.log(req.body);
    });
    app.listen(port, () => console.log(`Server http://localhost:${port}`));
  })
  .catch((err) => console.log(err));
