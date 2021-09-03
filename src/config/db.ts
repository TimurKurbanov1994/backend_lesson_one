import {

  createConnection,

} from "typeorm";


export const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "node_postgres",
  password: "8912650",
  database: "node_postgre",
})

