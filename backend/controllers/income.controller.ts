import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

// dummy userId before auth feature
import 'dotenv/config';
const userId = process.env.DUMMY_USER_ID;

export const getAll = async (req: Request, res: Response) => {
  try {
    const data = await prisma.income.findMany();
    res.status(200).json({
      'data': { data },
    });
  } catch (error) {
    console.error("IncomeContoller.getALl error: ", error);
    res.status(500).json({
      'error': error
    });
  }
  return;
}

export const get = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const numericId = parseInt(id as string, 10);
    const data = await prisma.income.findUnique({
      where: {
        id: numericId
      }
    });

    res.status(200).json({
      'data': { data },
    });
  } catch (error) {
    console.error('IncomeController.get error: ', error);
    res.status(500).json({
      'error': error
    });
  }
  return;
}

export const create = async (req: Request, res: Response) => {
  try {
    const { name, amount } = req.body;

    await prisma.income.create({
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
    res.status(200).json({
      'status': 'OK',
    });
  } catch (error) {
    console.error('IncomeController.create error: ', error);
    res.status(500).json({
      'error': error
    });
  }
}
