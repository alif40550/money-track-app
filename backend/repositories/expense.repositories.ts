import { prisma } from "../lib/prisma.js"
import type { flow } from "../models/flow.models.js"

export const getAllExpense = async () => {
  return prisma.expense.findMany();
}

export const getExpense = async (id: number) => {
  return await prisma.expense.findUnique({
    where: {
      id: id
    }
  });
}

export const createExpense = async (expenseData: flow, userId: string) => {
  const { name, amount } = expenseData;

  return await prisma.expense.create({
    data: {
      name: name,
      amount: amount,
      user: {
        connect: {
          id: userId,
        }
      }
    }
  });
}

