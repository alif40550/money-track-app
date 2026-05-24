import type { user } from "../models/user.model.js";
import { prisma } from "../lib/prisma.js";

export const upsertUser = async (user: user) => {
  return await prisma.user.upsert({
    where: { email: user.email },
    update: {},
    create: {
      email: user.email,
      name: user.name,
      photo: user.photo
    }
  });

}
