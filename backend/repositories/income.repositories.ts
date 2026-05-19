import { prisma } from "../lib/prisma.js";
import type { flow } from "../models/flow.models.js";

export const findMany = async () => {
  return prisma.income.findMany();
}

export const findById = async (id: number) => {
  return await prisma.income.findUnique({
    where: {
      id: id
    }
  });
}

export const insert = async (incomeData: flow, userId: string) => {
  const { name, amount } = incomeData;

  return await prisma.income.create({
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

