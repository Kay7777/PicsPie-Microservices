import express, { Request, Response } from "express";
import { Comment } from "../models/comment";

const router = express.Router();

router.get("/api/comments/:id", async (req: Request, res: Response) => {
  const postId = req.params.id;
  const comments = await Comment.find({ postId });
  res.status(200).send(comments);
});

export { router as indexCommentRouter };
