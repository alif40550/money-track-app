import { findMany, findById, insert } from "../repositories/expense.repositories.js";
import type { flow } from "../models/flow.models.js";

export const getAllExpenses = async () => {
  return await findMany();
};

export const getExpense = async (id: string) => {
  const numericId = parseInt(id);
  return await findById(numericId);
};

export const createExpense = async (expenseData: flow, userId: string) => {
  return await insert(expenseData, userId);
}

