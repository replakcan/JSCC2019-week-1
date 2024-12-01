const Person = require('./person');
/* const Pet = require('./pet');
const AnimalShelter = require('./animalShelter'); */
const Database = require("./database");

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

const cbFunc = (err, file) => {
  if (err) {
    console.log("errorumsumide: ", err);
    return;
  } else {
    console.log("FILE: ", file);

    const alper = Person.create(file[0]);
    console.log('alper: ', (alper.pets[1]));

  }
};
Database.load("person.json", cbFunc);

