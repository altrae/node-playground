import bodyParser from "body-parser";

const app = (app) => {
  const jsonParser = bodyParser.json();

  app.get("/api/person/:id", (request, response) => {
    // get data from db
    response.json({ firstname: "Jack", lastname: "Sparrow" });
  });

  app.post("/api/person", jsonParser, (request, response) => {
    // save to db
  });

  app.delete("/api/person/:id", (request, response) => {
    // delete from db
  });
};

export default app;
