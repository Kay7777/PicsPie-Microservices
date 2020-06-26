import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireLogin, validateRequest } from "@picspie/common";
import { Post } from "../models/post";
const router = express.Router();

router.post(
  "/api/posts",
  requireLogin,
  [
    body("title").not().isEmpty().withMessage("Title cannot be empty"),
    body("content").not().isEmpty().withMessage("Content cannot be empty"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, content, images, videos } = req.body;
    const userId = req.user!.id;
    const post = Post.build({
      userId,
      title,
      content,
      images,
      videos,
      createAt: new Date(),
    });
    await post.save();
    res.status(201).send(post);
  }
);

export { router as createPostRouter };
