const Pet = class {
  hasOwner = false;

  constructor(breed, age, id) {
    this.breed = breed;
    this.age = age;
    this.id = id;
  }

  talk() {
    if (this.breed[0] === "d") {
      console.log("barkBark");
    } else {
      console.log("meowwWWwwwWww");
    }
  }

  static create({ breed, age, id }) {
    return new Pet(breed, age, id);
  }
};

module.exports = Pet;
