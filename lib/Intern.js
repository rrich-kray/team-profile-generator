const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school, role = "Intern") {
        super(name, id, email);
        this.school = school;
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

    getSchool() {
        return this.school
    }

    getRole() {
        return this.role
    }
}

module.exports = Intern