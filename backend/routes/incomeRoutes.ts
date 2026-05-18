import { Router } from "express";
import { validate } from "../middlewares/validateRequest.js";
import { CreateIncomeSchema } from "../Validators/flowValidator.js";
import { prisma } from "../lib/prisma.js";
import IncomeController from "../controllers/IncomeController.js";


const incomeRouter = Router();
const controller = new IncomeController(prisma);

incomeRouter.get('/incomes', (req, res) => controller.getAll(req, res));
incomeRouter.get('/income/:id', (req, res) => controller.get(req, res));
incomeRouter.post('/incomes/create', validate(CreateIncomeSchema), (req, res) => controller.create(req, res));

export default incomeRouter;
