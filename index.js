const express = require("express");
const bodyParser = require("body-parser");

const personRouter = require("./routes/person");
const petRouter = require("./routes/pet");
const animalShelterRouter = require("./routes/animalShelter");

require("./mongo-connection");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.use(bodyParser.json());

app.use("/person", personRouter);
app.use("/pet", petRouter);
app.use("/animalShelter", animalShelterRouter);

app.get("/", (req, res) => {
  // res.send('Hello ')
  // res.sendFile(__dirname + "/index.html");
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server listening");
});
