const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
    }

    getName() {
        return super.getName()
    }

    getId() {
        return super.getId()
    }

    getEmail() {
        return super.getEmail()
    }

    getOffice() {
        return this.office
    }
}

module.exports = Manager