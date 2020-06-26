import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/auth/signout", (req: Request, res: Response) => {
  req.session = null;
  res.status(200).redirect("/");
});

export { router as signoutRouter };
