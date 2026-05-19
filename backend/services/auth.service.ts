import { getTicket } from "../lib/googleClient.js";
import type { user } from "../models/user.model.js";
import { upsertUser } from "../repositories/auth.repositories.js";
import jwt from "jsonwebtoken";

export const getPayload = async (tokenId: string) => {
  const ticket = await getTicket(tokenId);
  return ticket.getPayload();
}

export const makeUser = async (payload: user) => {
  return await upsertUser(payload);
}

export const createAccessToken = (user: user & { id: string }) => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT secret not configured yet in env");
  }

  return jwt.sign({
    userId: user.id,
    email: user.email
  },
    jwtSecret,
    {
      expiresIn: "7d",
    });
}
