import { readFileSync } from "node:fs";

// To generate and use your own certificates, reference the readme.md.
const credentials = {
  cert: readFileSync("./src/certs/snakeoil.pem"),
  key: readFileSync("./src/certs/snakeoil.key"),
};

export { credentials };
