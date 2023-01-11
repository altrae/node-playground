import https from "node:https";
import fs from "node:fs";

console.log("server running");

https
  .createServer(
    {
      cert: fs.readFileSync("./src/snakeoil.pem"),
      key: fs.readFileSync("./src/snakeoil.key"),
    },
    (request, response) => {
      if (request.url === "/") {
        // response.writeHead(200, { "Content-Type": "text/html" });
        // const message = "Hello world!!!";
        // const html = fs
        //   .readFileSync("./src/index.htm", "utf-8")
        //   .replaceAll("{message}", message);
        fs.createReadStream("./src/index.htm").pipe(response);
        // response.end(html);
      } else if (request.url === "/api") {
        response.writeHead(200, { "Content-Type": "application/json" });
        const api = {
          "first-name": "A-a-ron",
          "last-name": "Dewwwwwberrry",
        };

        response.end(JSON.stringify(api));
      } else {
        response.writeHead(404);
        response.end();
      }
    }
  )
  .listen(1337, "127.0.0.1");
