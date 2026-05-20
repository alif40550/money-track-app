import { Router } from "express";
import { validate } from "../middlewares/validate.request.js";
import { CreateFlowSchema } from "../validators/flow.validator.js";
import { get, getAll, create } from "../controllers/income.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const incomeRouter = Router();

incomeRouter.get('/incomes', authenticateToken, getAll);
incomeRouter.get('/incomes/:id', authenticateToken, get);
incomeRouter.post('/incomes', authenticateToken, validate(CreateFlowSchema), create);

export default incomeRouter;
