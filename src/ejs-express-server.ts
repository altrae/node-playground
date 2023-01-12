import express from "express";
import https from "node:https";
import { credentials } from "./credentials.js";
import { __dirname, __filename } from "./utils.js";

import apiController from "./controllers/api.js";
import htmlController from "./controllers/html.js";

const app = express();

app.use("/assets", express.static(`${__dirname}/assets`));

app.set("views", "./src/views");
app.set("view engine", "ejs");

// Creating and using your own middleware example:
app.use("/", (request, response, next) => {
  console.log(`Request URL: ${request.url}`);
  next();
});

htmlController(app);

apiController(app);

const httpsServer = https.createServer(credentials, app);
const port = process.env.PORT || 3000;

httpsServer.listen(port);
