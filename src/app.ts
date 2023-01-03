// @ts-ignore - needed due to requirement that imports reference js, not ts, files
import { ts } from "./ts-module.ts";
import fs from "node:fs/promises";
// @ts-ignore - needed due to requirement that imports reference js, not ts, files
import { EventEmitter } from "./event-emitter.ts";
// import { EventEmitter } from "node:events";

const readme = await fs.readFile("./readme.md", "utf-8");

const emitter = new EventEmitter();

const event1 = (event) => {
  console.log("event listener 1 fired", event);
};

const event2 = (event) => {
  console.log("event listener 2 fired", event);
};

emitter.addListener("event", event1);

emitter.addListener("event", event2);

emitter.emit("event", { some: "event data" });

emitter.removeListener("event", event1);

emitter.removeListener("event", event2);

emitter.emit("event", { some: "event data" });

console.log({ emitter, readme, ts });
