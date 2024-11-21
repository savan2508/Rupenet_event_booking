import fs from "fs";
import https from "https";
import next from "next";

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

const options = {
  key: fs.readFileSync("/app/certs/ticketing.dev-key.pem"),
  cert: fs.readFileSync("/app/certs/ticketing.dev.pem"),
};

app.prepare().then(() => {
  https
    .createServer(options, (req, res) => {
      handle(req, res);
    })
    .listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on https://ticketing.dev");
    });
});
