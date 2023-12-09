import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

// parsers
app.use(express());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const number = 23;
  console.log(number);
  res.send('Hello World!');
});

export default app;
