import { Router } from "express";
import { validate } from "../middlewares/validate.request.js";
import { CreateFlowSchema } from "../validators/flow.validator.js";
import { get, getAll, create } from "../controllers/expense.controller.js";

const expenseRouter = Router();

expenseRouter.get('/expenses', getAll);
expenseRouter.get('/expenses/:id', get);
expenseRouter.post('/expenses', validate(CreateFlowSchema), create);

export default expenseRouter;
