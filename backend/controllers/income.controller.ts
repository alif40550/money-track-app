import type { Request, Response } from "express";
import { asyncHandler } from "../middlewares/async.handlers.js";
import { getAllIncomes, getIncome, createIncome } from "../repositories/income.repositories.js";

// dummy userId before auth feature
import 'dotenv/config';
const userId = process.env.DUMMY_USER_ID;

export const getAll = asyncHandler(async (req: Request, res: Response) => {
  const data = await getAllIncomes();
  res.status(200).json({
    'incomes': data,
  });
  return;
});

export const get = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const numericId = parseInt(id);
  const data = await getIncome(numericId);

  if (!data) {
    res.status(404).json({
      'status': 'not found',
    });
    return;
  };

  res.status(200).json({
    'income': data,
  });
  return;
});

export const create = asyncHandler(async (req: Request, res: Response) => {
  const newData = await createIncome(req.body, userId);

  res.status(200).json({
    'status': 'OK',
    'data': newData,
  });
});
