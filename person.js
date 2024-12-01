const Pet = require('./pet');

const Person = class {
  constructor(name, age, pets) {
    this.name = name;
    this.age = age;
    this.pets = pets;
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
    pet.mood = "happy";
  }

  static create(file) {

    this.pets = file.pets.map((pet) => new Pet(pet.breed, pet.age));
    return new Person(file.name, file.age, file.pets);
  }
};

module.exports = Person;
