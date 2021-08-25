import express from "express";
import router from "./router";
import bodyParser from "body-parser";


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use('/tasks', router)


app.get('/', (req, res)=> {

  res.send('[TEST]')
  console.log(req.body);
})



async function startApp() {
  try {
    // Подключение к БД
    app.listen(port, () => console.log(`Running on port ${port}`));
  } catch (e){
    console.log(e)
  }
}

startApp()