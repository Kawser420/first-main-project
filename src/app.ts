/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
/* eslint-disable no-unused-vars */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRouter } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', test);

//global Error Handler
app.use(globalErrorHandler);

// not Found
app.use(notFound);

export default app;
