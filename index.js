const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require("./src/page-template")

const managers = [];
const interns = []
const engineers = [];



const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Please select the type of employee',
            choices: ['manager', 'engineer', 'intern']
        },
    ])
}


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of your manager',
            validate: answer => {
                if (
                    answer.trim().match(/\d/) ||
                    !answer
                    ) {
                        console.log("Please enter a valid name!")
                    }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter your manager's employee ID number",
            validate: answer => {
                if (!typeof answer !== Number) {

                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your manager's email address",
            validate: answer => {
                if (
                    !answer.includes('@') ||
                    answer.match(/,/).length > 1 ||
                    answer.match(/@/).length > 1 ||
                    answer.match(/./).length > 1 ||
                    !answer
                ) {
                    console.log("please enter a valid email address!");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'office number',
            message: "Please enter your manager's office number",
            validate: answer => {
                if (!typeof answer !== Number) {
                    console.log("Please enter a valid office number!")
                } else return false;
            }
        },
        {
            type: 'checkbox',
            name: 'another',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No']
        },
    ])
    .then(managerData => {
        managers.push(new Manager(managerData.name, managerData.email, managerData.office))
        if (managerData.another === 'yes') promptEmployee()
        else {
            generatePage(managers, engineers, interns)
        }
    })
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "please enter your engineer's name",
            validate: answer => {
                if (answer) return true;
                else {
                    console.log("please enter your engineer's name!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your engineer's email address",
            validate: answer => {
                if (
                    !answer.includes('@') ||
                    answer.match(/,/g).length > 1 ||
                    answer.match(/@/g).length > 1 ||
                    answer.match(/./).length > 1
                ) {
                    console.log("please enter a valid email address!");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'git',
            message: "Please enter your engineer's GitHub address",
            validate: answer => {
                if (answer) return true;
                else return false
            }
        },
        {
            type: 'checkbox',
            name: 'another',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No']
        },
    ])
    .then(engineerData => {
        engineers.push(new Engineer(engineerData.name, engineerData.email, engineerData.git));
        if (engineerData.another === 'yes') promptEmployee()
        else {
            generatePage(managers, engineers, interns)
        }
    })
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your intern's name",
            validate: answer => {
                if (answer) return true;
                else return false
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your intern's email address",
            validate: answer => {
                if (
                    !answer.includes('@') ||
                    answer.match(/,/g).length > 1 ||
                    answer.match(/@/g).length > 1 ||
                    answer.match(/./).length > 1
                ) {
                    console.log("please enter a valid email address!");
                    return false;
                } else {
                    return true;
                };
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the school your intern is currently attending",
            validate: answer => {
                if (
                    answer.match(/^[A-Za-z]/)
                ) {
                    console.log('Please enter a valid school name')
                    return false
                } else return true;
            }
        },
        {
            type: 'checkbox',
            name: 'another',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No']
        },
    ])
    .then(internData => {
        interns.push(new Intern(internData.name, internData.email, internData.school))
        if (internData.another === 'yes') promptEmployee()
        else {
            generatePage(managers, engineers, interns)
        }
    })
}


promprUser().then(response => {
    if (response.choice === 'manager') {
        promptManager()
    } else if (response.choice === 'engineer') {
        promptEngineer()
    } else {
        promptIntern()
    }
})




// select type, then ask questions on that type
// main menu that branmches off into four directions, 