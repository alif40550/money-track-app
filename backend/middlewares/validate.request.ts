import type { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";

export const validate = (schema: z.ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const validData = schema.parse(req.body);
      req.body = validData;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          'status': "Validation Failed",
          'error': error,
        })
        return;
      }
      next(error);
    }
  };
};
