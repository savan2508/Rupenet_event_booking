import mongoose from "mongoose";
import { app } from "./app";
import fs from "fs";
import https from "https";

const options = {
  key: fs.readFileSync("/app/certs/ticketing.dev-key.pem"),
  cert: fs.readFileSync("/app/certs/ticketing.dev.pem"),
};

const start = async () => {
  // eslint-disable-next-line no-undef
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }

  https.createServer(options, app).listen(3000, () => {
    console.log("HTTPS server listening on port 3000");
  });
};

start();
