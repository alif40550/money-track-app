import type { Request, Response } from "express";
import { asyncHandler } from "../middlewares/async.handlers.js";
import { createAccessToken, getPayload, makeUser } from "../services/auth.service.js";

export const googleLogin = asyncHandler(async (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) {
    res.status(404).json({
      "status": "token not found"
    });
    return;
  }

  const payload = await getPayload(token);

  if (!payload || !payload.email) {
    res.status(401).json({
      "error": "Google token not valid",
    });
    return;
  }

  const user = await makeUser({ name: payload.name, email: payload.email, photo: payload.picture || null });

  const accessToken = createAccessToken({
    id: user.id,
    email: user.email,
    photo: user.photo || null
  });

  res.status(200).json({
    "status": "OK",
    "accessToken": accessToken,
    "user": user,
  });
})
