const inquirer = require('inquirer');

class Employee {
    constructor(name, email) {
        this.name = inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the employee's name",
                validate: name => {
                    if (name) return true;
                    else {
                        console.log('Please enter the name of the Employee!');
                        return false;
                    }
                }
            }
        ])
        this.email = inquirer.prompt([

        ])
    }
}

module.exports = Employee