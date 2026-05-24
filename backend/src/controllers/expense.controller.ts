import type { Request, Response } from "express";
import { asyncHandler } from "../middlewares/async.handlers.js";
import { getAllExpenses, getExpense, createExpense } from "../services/expense.service.js";

export const getAll = asyncHandler(async (req: Request, res: Response) => {
  const data = await getAllExpenses();
  res.status(200).json({
    'expense': data,
  });
  return;
});

export const get = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await getExpense(id);

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
  const newData = await createExpense(req.body, req.userId);

  res.status(200).json({
    'status': 'OK',
    'data': newData,
  });
});
