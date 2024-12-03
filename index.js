const express = require("express");

const personRouter = require("./routes/person");
const petRouter = require("./routes/pet");
const animalShelterRouter = require("./routes/animalShelter");

require("./mongo-connection");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.use("/person", personRouter);
app.use("/pet", petRouter);
app.use("/shelter", animalShelterRouter);

app.get("/", (req, res) => {
  // res.send('Hello ')
  // res.sendFile(__dirname + "/index.html");
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server listening");
});
