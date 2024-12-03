const BaseService = require('./base-service')
const Shelter = require('../models/animalShelter');

class PersonService extends BaseService {
    constructor() {
        super(Shelter, `${__dirname}/../shelter.json`)
    }
}

module.exports = new PersonService()
