import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import cors from "cors";

import { currentUserRouter } from "./routs/current-user";
import { signinRouter } from "./routs/signin";
import { signoutRouter } from "./routs/signout";
import { signupRouter } from "./routs/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // eslint-disable-next-line no-undef
    secure: process.env.NODE_ENV !== "test",
  }),
);

app.use(cors(corsOptions));
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
