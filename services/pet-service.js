const BaseService = require('./base-service')
const Pet = require('../models/pet')

class PetService extends BaseService {
    constructor() {
        super(Pet, `${__dirname}/../pet.json`)
    }
}

module.exports = new PetService()
