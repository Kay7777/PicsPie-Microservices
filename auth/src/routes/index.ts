import express, { Request, Response } from "express";
import { User } from "../models/user";

const router = express.Router();

router.get("/api/auth/:id", async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

export { router as indexUserRouter };
