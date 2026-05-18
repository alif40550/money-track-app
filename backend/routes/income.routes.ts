import { Router } from "express";
import { validate } from "../middlewares/validate.request.js";
import { CreateFlowSchema } from "../validators/flow.validator.js";
import { get, getAll, create } from "../controllers/income.controller.js";

const incomeRouter = Router();

incomeRouter.get('/incomes', getAll);
incomeRouter.get('/incomes/:id', get);
incomeRouter.post('/incomes', validate(CreateFlowSchema), create);

export default incomeRouter;
