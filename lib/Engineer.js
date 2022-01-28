const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, git, role = "Engineer") {
        super(name, id, email);
        this.git = git;
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

    getGit() {
        return this.git
    }
}

module.exports = Engineer