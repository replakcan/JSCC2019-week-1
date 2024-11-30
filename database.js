const fs = require("fs");

const save = (filename, data) => {
  fs.writeFileSync(filename, JSON.stringify(data));
};

const load = (filename) => {
  return JSON.parse(fs.readFileSync(filename, "utf-8"));
};

module.exports = { save, load };
