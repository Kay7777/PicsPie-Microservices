import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, RouteNotFoundError, currentUser } from "@picspie/common";

import { deletePostRouter } from "./routes/delete";
import { indexAllPostRouter } from "./routes/index-all";
import { indexUserPostRouter } from "./routes/index-user";
import { indexOnePostRouter } from "./routes/index-one";
import { imageUploadRouter } from "./routes/image-upload";
import { createPostRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUser);

app.use(deletePostRouter);
app.use(imageUploadRouter);
app.use(indexAllPostRouter);
app.use(indexUserPostRouter);
app.use(indexOnePostRouter);
app.use(createPostRouter);

app.all("*", async (req, res) => {
  throw new RouteNotFoundError();
});

app.use(errorHandler);

export { app };
