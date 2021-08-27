import express, { Request, Response } from 'express';
import router from './router/router';
import bodyParser from 'body-parser';

const app: express.Application = express();
const port: number = 5000;

app.use('/tasks', router);
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('[TEST]');
  console.log(req.body);
});

async function startApp() {
  try {
    // Подключение к БД
    app.listen(port, () => console.log(`Server http://localhost:${port}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
