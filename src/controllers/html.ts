import bodyParser from "body-parser";

const app = (app) => {
  const urlEncodedParser = bodyParser.urlencoded({ extended: false });
  const jsonParser = bodyParser.json();

  app.get("/", (request, response) => {
    response.render("index");
  });

  app.get("/person/:id", (request, response) => {
    response.render("person", {
      ID: request.params.id,
      query: request.query.query,
    });
  });

  app.post("/person", urlEncodedParser, (request, response) => {
    response.send(
      `Thank you, ${request.body.firstname} ${request.body.lastname}!`
    );
    console.log(request.body.firstname);
    console.log(request.body.lastname);
  });

  app.post("/person/json", jsonParser, (request, response) => {
    response.send({
      thanks: `Thank you, ${request.body.firstname} ${request.body.lastname}!`,
    });
    console.log(request.body.firstname);
    console.log(request.body.lastname);
  });

  app.get("/api", (request, response) => {
    response.send({
      "first-name": "A-a-ron",
      "last-name": "Dewwwwwberrry",
    });
  });
};

export default app;
