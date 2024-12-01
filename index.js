const Person = require("./person");
const Pet = require("./pet");
const AnimalShelter = require("./animalShelter");
const Database = require("./database");
const PersonService = require("./services/person-service");
const ShelterService = require("./services/shelter-service");
const personService = require("./services/person-service");

/*
    There should be a person who can go and adopt a pet from a shelter,
    person can have multiple pets and person can name their pets,
    pets should have breed and age for default,
    shelter should have a name and a petCount and a list of pets,
*/

/* const alper = new Person("Alper", 28);
const mutlu = new Person('Mutlu', 29);

const people = [];
people.push(alper);
people.push(mutlu);

const dog = new Pet("dog", 3);
const cat = new Pet("cat", 5);
const dog1 = new Pet("doge", 9);

const shelterIstanbul = new AnimalShelter("Istanbul", [dog, cat, dog1]);

alper.adoptPet(shelterIstanbul);
alper.adoptPet(shelterIstanbul);
alper.adoptPet(shelterIstanbul);
alper.adoptPet(shelterIstanbul);

alper.namePet(alper.pets[1], "Susa");

alper.playWithPet(alper.pets[1]);
console.log(alper.pets); */

/* Database.save('person.json', people);
Database.save('shelter.json', shelterIstanbul); */

/* const cbFunc = (err, file) => {
  if (err) {
    console.log("errorumsumide: ", err);
    return;
  } else {
    console.log("FILE: ", file);

    const alper = Person.create(file[0]);
    console.log("alper: ", alper.pets[1]);
    alper.playWithPet(alper.pets[0]);
    console.log(alper.pets[0]);
    alper.pets[1].talk();
  }
};
Database.load("person.json", cbFunc);

const alfonzo = new Person("alfonso", 23, [], 1);
console.log("alfonso: ", alfonzo); */

async function main() {
  const susa = new Pet("cat", 5, 1);
  const zorro = new Pet("dog", 12, 2);

  const shelterIst = new AnimalShelter("Istanbul", [susa, zorro], 1);

  const alper = new Person("Alper", 28, [], 1);
  const mutlu = new Person("Mutlu", 20, [], 2);

  alper.adoptPet(shelterIst);
  alper.adoptPet(shelterIst);

  alper.namePet(susa, "susa");
  alper.namePet(zorro, "zorro");

  alper.playWithPet(susa);
  alper.playWithPet(zorro);

  const people = await PersonService.findAll()

  await PersonService.del(9)
}

main()