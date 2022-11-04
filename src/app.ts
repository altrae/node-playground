// @ts-ignore - needed due to requirement that imports reference js, not ts, files
import { ts } from "./ts-module.ts";
import fs from "node:fs/promises";
// @ts-ignore - needed due to requirement that imports reference js, not ts, files
import { Emitter } from "./emitter.ts";

const readme = await fs.readFile("./readme.md", "utf-8");

const emitter = new Emitter();

const event1 = (event) => {
  console.log("event listener 1 fired", event);
};

const event2 = (event) => {
  console.log("event listener 2 fired", event);
};

emitter.addEventListener("event", event1);

emitter.addEventListener("event", event2);

emitter.emit("event");

emitter.removeEventListener("event", event1);

emitter.removeEventListener("event", event2);

emitter.emit("event");

console.log({ emitter, ts, readme });
