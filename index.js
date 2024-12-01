const express = require("express");
const PersonService = require("./services/person-service");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.set("view engine", "pug");

app.get("/", (req, res) => {
  // res.send('Hello ')
  // res.sendFile(__dirname + "/index.html");
  res.render("index");
});

app.get("/person/all", async (req, res) => {
  const people = await PersonService.findAll();
  res.render("person", { people: people });
});

app.get("/person/:id", async (req, res) => {
  const id = req.params.id;
  const person = await PersonService.find(id);
  res.send(person);
});

app.post("/person", async (req, res) => {
  const person = await PersonService.add(req.body);
  res.send(person);
});

app.delete("/person/:id", async (req, res) => {
  const id = req.params.id;
  await PersonService.del(id);
  res.send('ok');
});

app.listen(3000, () => {
  console.log("Server listening");
});
