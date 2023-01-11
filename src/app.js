const fs = require("fs");
const zlib = require("zlib");

const read = (error, data) => {
  if (error) throw error;

  console.log({ data }, data.length);
};

const readme = fs.readFile("./readme.md", "utf-8", read);

const readable = fs.createReadStream(`${__dirname}/assets/lorem-ipsum.txt`, {
  encoding: "utf-8",
  highWaterMark: 16 * 1024,
});

const writable = fs.createWriteStream(
  `${__dirname}/assets/lorem-ipsum_copy.txt`
);

// readable.on("data", (chunk) => {
//   console.log({ chunk });
//   writable.write(chunk);
// });

// pipe does the same thing as listening for the data event and writing the chunks
readable.pipe(writable);

const compressed = fs.createWriteStream(
  `${__dirname}/assets/lorem-ipsum-copy.txt.gz`
);
const gzip = zlib.createGzip();

readable.pipe(gzip).pipe(compressed);

exports = "a";
module.exports = "b";

console.log({
  exports,
  module: { exports: { ...module.exports } },
  equal: exports === module.exports,
  readme,
});
