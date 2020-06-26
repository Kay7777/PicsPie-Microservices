import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireLogin, validateRequest } from "@picspie/common";
import { Comment } from "../models/comment";

const router = express.Router();

router.post(
  "/api/comments/:id",
  requireLogin,
  [body("content").not().isEmpty().withMessage("Content cannot be empty")],
  validateRequest,
  async (req: Request, res: Response) => {
    const { content } = req.body;
    const postId = req.params.id;
    const userId = req.user!.id;
    const comment = Comment.build({
      userId,
      postId,
      content,
      createAt: new Date(),
    });
    await comment.save();
    res.status(201).send(comment);
  }
);

export { router as createCommentRouter };
