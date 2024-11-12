import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { currentUserRouter } from "./routs/current-user";
import { signinRouter } from "./routs/signin";
import { signoutRouter } from "./routs/signout";
import { signupRouter } from "./routs/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!");
});
