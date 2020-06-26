import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireLogin, validateRequest } from "@picspie/common";
import { Post } from "../models/post";

const router = express.Router();

router.delete(
  "/api/posts/:id",
  requireLogin,
  async (req: Request, res: Response) => {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (post!.userId === req.user!.id) {
      await Post.findByIdAndDelete(postId);
      res.status(204).send(post);
    } else {
      res.status(400).send([{ message: "not a valid user." }]);
    }
  }
);

export { router as deletePostRouter };
