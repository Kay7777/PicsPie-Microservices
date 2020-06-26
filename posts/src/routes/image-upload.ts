import uuid from "uuid/v1";
import AWS from "aws-sdk";
import express, { Request, Response } from "express";
import { requireLogin } from "@picspie/common";
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const router = express.Router();

router.get(
  "/api/posts/image",
  requireLogin,
  async (req: Request, res: Response) => {
    const key = `${req.user!.id}/${uuid()}.jpeg`;
    s3.getSignedUrl(
      "putObject",
      {
        Bucket: process.env.AWS_BUCKET,
        ContentType: "image/*",
        Key: key,
      },
      (err: Error, url: String) => {
        res.send({ key, url });
      }
    );
  }
);

export { router as imageUploadRouter };
