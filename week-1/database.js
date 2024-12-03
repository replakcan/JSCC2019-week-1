const fs = require("fs");

const save = (filename, data) => {
  fs.writeFileSync(filename, JSON.stringify(data));
};

const load = (filename, cb) => {
  fs.readFile(filename, "utf-8", (err, file) => {
    if (err) {
      console.log("an err occured: ", err);
      return;
    }

    cb(null, JSON.parse(file));
  });
};

module.exports = { save, load };
