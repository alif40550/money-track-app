import { findMany, findById, insert } from "../repositories/income.repositories.js";
import type { flow } from "../models/flow.models.js";

export const getAllIncomes = async () => {
  return await findMany();
};

export const getIncome = async (id: string) => {
  const numericId = parseInt(id);
  return await findById(numericId);
};

export const createIncome = async (incomeData: flow, userId: string) => {
  return await insert(incomeData, userId);
}

