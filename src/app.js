const fs = require("fs");

const read = (error, data) => {
  if (error) throw error;

  console.log({ data }, data.length);
};

const readme = fs.readFile("./readme.md", "utf-8", read);

exports = "a";
module.exports = "b";

console.log({
  exports,
  module: { ...module.exports },
  equal: exports === module.exports,
  readme,
});
