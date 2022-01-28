const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, git) {
        super(name, id, email);
        this.git = git;
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

    getGit() {
        return this.git
    }
}

module.exports = Engineer