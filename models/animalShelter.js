const AnimalShelter = class {
  constructor(location, animalList, id) {
    this.location = location;
    this.animalList = animalList;
    this.animalCount = animalList.length;
    this.id = id;
  }

  static create(location, animalList) {
    return new AnimalShelter(location, animalList, id);
  }
};

module.exports = AnimalShelter;