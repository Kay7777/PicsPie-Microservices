import express, { Request, Response } from "express";
import { requireLogin } from "@picspie/common";
import { Post } from "../models/post";

const router = express.Router();

router.get(
  "/api/posts/user",
  requireLogin,
  async (req: Request, res: Response) => {
    const userId = req.user!.id;
    console.log(Post.find.prototype);
    const posts = await Post.find({ userId });

    res.status(200).send(posts);
  }
);

export { router as indexUserPostRouter };
