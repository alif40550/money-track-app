import express from "express";
import incomeRouter from './routes/income.routes.js';
import type { Request, Response } from "express";
import 'dotenv/config';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK"
  });
});

app.use(incomeRouter);

app.listen(process.env.PORT, () => {
  console.log('Server runs at port', process.env.PORT);
});
