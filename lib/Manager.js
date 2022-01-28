const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, office, role = "manager") {
        super(name, id, email)
        this.office = office
        this.role = role
    }

    static getName() {
        return super.getName()
    }

    static getId() {
        return super.getId()
    }

    static getEmail() {
        return super.getEmail()
    }

    getOffice() {
        return this.office
    }

    getRole() {
        return this.role
    }
}

module.exports = Manager