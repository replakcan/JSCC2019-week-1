/*
    There should be a person who can go and adopt a pet from a shelter,
    person can have multiple pets and person can name their pets,
    pets should have breed and age for default,
    shelter should have a name and a petCount and a list of pets,
*/

const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.pets = [];
  }

  adoptPet(shelter) {
    if (shelter.animalCount === 0) {
      console.log("sahiplenecek heyvan kalmadi");
      return;
    }

    const adoptedPet = shelter.animalList[0];
    this.pets.push(adoptedPet);
    console.log(`${this.name} bir tane ${adoptedPet.breed} sahiplendi!`);

    shelter.animalList.splice(0, 1);
    shelter.animalCount -= 1;
    console.log("shelter'daki hayvanlar: ", shelter.animalList);
    console.log("shelter'daki heyvan sayisi: ", shelter.animalCount);
  }

  // pets should have a name which means they have an owner that truly cares for them
  namePet(pet, name) {
    pet.name = name;
    pet.hasOwner = true;
  }

  playWithPet(pet) {
    pet.mood = 'happy';
  }
};

const Pet = class {
  hasOwner = false;

  constructor(breed, age) {
    this.breed = breed;
    this.age = age;
  }
};

const AnimalShelter = class {
  constructor(location, animalList) {
    this.location = location;
    this.animalList = animalList;
    this.animalCount = animalList.length;
  }
};

const alper = new Person("Alper", 28);
const mutlu = new Person('Mutlu', 21);

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
console.log(alper.pets);