import express, { Request, Response } from "express";
import { requireLogin } from "@picspie/common";
import { Comment } from "../models/comment";

const router = express.Router();

router.delete(
  "/api/comments/:id",
  requireLogin,
  async (req: Request, res: Response) => {
    const commentId = req.params.id;
    const comment = await Comment.findById(commentId);
    if (comment!.userId === req.user!.id) {
      await Comment.findByIdAndDelete(commentId);
      res.status(204).send(comment);
    } else {
      res.status(400).send([{ message: "not current user" }]);
    }
  }
);

export { router as deleteCommentRouter };
