const Pet = class {
  hasOwner = false;

  constructor(breed, age) {
    this.breed = breed;
    this.age = age;
  }

  talk() {
    if (this.breed[0] === 'd') {
      console.log('barkBark');
    } else {
      console.log('meowwWWwwwWww');
    }
  }
};

module.exports = Pet;