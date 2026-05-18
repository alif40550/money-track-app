import express from "express";
import incomeRouter from './routes/income.routes.js';
import expenseRouter from './routes/expense.routes.js';
import type { Request, Response, NextFunction } from "express";
import 'dotenv/config';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK"
  });
});

app.use(incomeRouter);
app.use(expenseRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

app.listen(process.env.PORT, () => {
  console.log('Server runs at port', process.env.PORT);
});
