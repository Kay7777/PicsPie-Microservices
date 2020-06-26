import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, RouteNotFoundError, currentUser } from "@picspie/common";

import { deleteCommentRouter } from "./routes/delete";
import { indexCommentRouter } from "./routes/index";
import { createCommentRouter } from "./routes/new";

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

app.use(deleteCommentRouter);
app.use(indexCommentRouter);
app.use(createCommentRouter);

app.all("*", async (req, res) => {
  throw new RouteNotFoundError();
});

app.use(errorHandler);

export { app };
