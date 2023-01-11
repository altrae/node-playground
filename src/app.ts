import { ts } from "./ts-module.js";
import fs from "node:fs/promises";
import { Zlib } from "node:zlib";
import { EventEmitter } from "node:events";
// import { EventEmitter } from "./event-emitter.js";
import { __dirname, __filename } from "./utils.js";

console.log({ __dirname, __filename });

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

const buffer = Buffer.from("Hello");

const loremIpsum = fs.readFile(`${__dirname}/assets/lorem-ipsum.txt`, {
  encoding: "utf-8",
});

loremIpsum.then((buffer) => {
  // console.log(buffer.toString());
  console.log({ loremIpsumBuffer: buffer.toString().length });
});

console.log({
  __dirname,
  buffer,
  bufferJSON: buffer.toJSON(),
  bufferString: buffer.toString(),
  emitter,
  readme,
  ts,
});
