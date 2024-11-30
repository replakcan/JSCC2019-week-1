const AnimalShelter = class {
  constructor(location, animalList) {
    this.location = location;
    this.animalList = animalList;
    this.animalCount = animalList.length;
  }
};

module.exports = AnimalShelter;