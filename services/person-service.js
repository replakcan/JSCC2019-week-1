const BaseService = require('./base-service')
const Person = require('../models/person')

class PersonService extends BaseService {
    constructor() {
        super(Person, `${__dirname}/../person.json`)
    }
}

module.exports = new PersonService()
