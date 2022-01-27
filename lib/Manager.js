const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, email, id)
        this.office = office
    }
}

module.exports = Manager