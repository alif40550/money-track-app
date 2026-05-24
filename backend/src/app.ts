import app from "./lib/express.js";
import authRouter from "./routes/auth.routes.js";
import expenseRouter from "./routes/expense.routes.js";
import incomeRouter from "./routes/income.routes.js";
import type { Request, Response, NextFunction } from "express";

app.use(incomeRouter);
app.use(expenseRouter);
app.use(authRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK"
  });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

export default app;
