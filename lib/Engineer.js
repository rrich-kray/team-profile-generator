const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, email, git) {
        super(name, email);
        this.git = git;
    }

    generateEngineerCard() {
        return generateCard()
    }
}

module.exports = Engineer