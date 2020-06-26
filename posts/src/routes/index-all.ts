import express, { Request, Response } from "express";
import { Post } from "../models/post";

const router = express.Router();

router.get("/api/posts/all", async (req: Request, res: Response) => {
  const posts = await Post.find();
  res.status(200).send(posts);
});

export { router as indexAllPostRouter };
