const BaseService = require('./base-service')
const Shelter = require('../animalShelter');

class PersonService extends BaseService {
    constructor() {
        super(Shelter, `${__dirname}/../shelter.json`)
    }
}

module.exports = new PersonService()
