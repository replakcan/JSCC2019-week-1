const Pet = class {
  hasOwner = false;

  constructor(breed, age) {
    this.breed = breed;
    this.age = age;
  }
};

module.exports = Pet;