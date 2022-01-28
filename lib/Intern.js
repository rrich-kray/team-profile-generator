const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school = '') {
        super(name, id, email);
        this.school = school
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

    getSchool() {
        return this.school
    }

}

module.exports = Intern