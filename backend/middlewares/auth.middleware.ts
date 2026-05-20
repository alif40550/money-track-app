import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { JWTPayload } from "../models/user.model.js";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];
  const jwtSecret = process.env.JWT_SECRET;

  if (!token) {
    res.status(404).json({
      "error": "token not found"
    });
    return;
  }

  try {
    if (!jwtSecret) {
      throw new Error("JWT secret not configured");
    }
    const decoded = jwt.verify(token, jwtSecret) as JWTPayload;
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(403).json({
      error
    });
    return;
  }
}
