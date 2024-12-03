const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  pets: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Pet",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
});

PersonSchema.methods.adopt = async function (pet) {
  this.pets.push(pet);
  pet.owners.push(this);
  await pet.save();
  await this.save();
};

PersonSchema.plugin(require("mongoose-autopopulate"));

const PersonModel = mongoose.model("Person", PersonSchema);

module.exports = PersonModel;

/* const Pet = require("./pet");

const Person = class {
  constructor(name, age, pets = [], id) {
    this.name = name;
    this.age = age;
    this.pets = pets;
    this.id = id;
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

  static create({ name, age, pets, id }) {
    const person = new Person(name, age, pets, id);

    person.pets = pets.map((pet) => new Pet(pet.breed, pet.age, pet.id));
    console.log(person.pets);
    return person;
  }
};

module.exports = Person;
 */
