import { Router } from "express";
import { validate } from "../middlewares/validate.request.js";
import { CreateFlowSchema } from "../validators/flow.validator.js";
import { get, getAll, create } from "../controllers/expense.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const expenseRouter = Router();

expenseRouter.get('/expenses', authenticateToken, getAll);
expenseRouter.get('/expenses/:id', authenticateToken, get);
expenseRouter.post('/expenses', authenticateToken, validate(CreateFlowSchema), create);

export default expenseRouter;
