import express from "express";
import { readFileSync } from "node:fs";
import https from "node:https";
import { credentials } from "./credentials.js";
import { __dirname, __filename } from "./utils.js";

const app = express();

app.use("/assets", express.static(`${__dirname}/assets`));

// Creating and using your own middleware example:
app.use("/", (request, response, next) => {
  console.log(`Request URL: ${request.url}`);
  next();
});

app.get("/", (request, response) => {
  const index = readFileSync(`${__dirname}/views/index.htm`).toString();

  response.send(index);
});

app.get("/person/:id", (request, response) => {
  const index = readFileSync(`${__dirname}/views/index.htm`)
    .toString()
    .replaceAll("{person}", request.params.id);

  response.send(index);
});

app.get("/api", (request, response) => {
  response.send({
    "first-name": "A-a-ron",
    "last-name": "Dewwwwwberrry",
  });
});

const httpsServer = https.createServer(credentials, app);
const port = process.env.PORT || 3000;

httpsServer.listen(port);
