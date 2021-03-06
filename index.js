const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require("./src/cards-template")
const writeFile = require('./utils/generateFile');

const managers = [];
const interns = []
const engineers = [];



const promptEmployee = () => {
    return inquirer.prompt([{
            type: 'list',
            name: 'type',
            message: 'Please select the type of employee',
            choices: ['manager', 'engineer', 'intern']
        }, ])
        .then(response => {
            if (response.type === 'manager') promptManager()
            else if (response.type === 'engineer') promptEngineer()
            else promptIntern()
        })
}


const promptManager = () => {
    inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Please enter the name of your manager',
                validate: answer => {
                    if (answer) return true
                    else {
                        console.log('Please enter the name of your manager!');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter your manager's employee ID number",
                validate: answer => {
                    if (!answer || answer.match(/\D/)) {
                        console.log('Please enter a valid employee ID number')
                        return false
                    } else return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your manager's email address",
                validate: answer => {
                    if (!answer || [...answer.matchAll(/@/g)].length > 1 || answer.match(/\.{2,}/)) {
                        console.log('Please enter a valid email address!');
                        return false;
                    } else return true;
                }
            },
            {
                type: 'input',
                name: 'office',
                message: "Please enter your manager's office number",
                validate: answer => {
                    if (!answer || answer.match(/\D/)) {
                        console.log('Please enter a valid employee ID number')
                        return false
                    } else return true;
                }
            },
            {
                type: 'list',
                name: 'another',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
            },
        ])
        .then(managerData => {
            managers.push(new Manager(managerData.name, managerData.id, managerData.email, managerData.office))
            if (managerData.another === 'Yes') promptEmployee()
            else {
                generatePage(managers, engineers, interns);
            }
        })
        .then(cardData => writeFile(cardData))
}

const promptEngineer = () => {
    inquirer.prompt([{
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
                name: 'id',
                message: "Please enter your engineer's employee ID number",
                validate: answer => {
                    if (!answer || answer.match(/\D/)) {
                        console.log('Please enter a valid employee ID number')
                        return false
                    } else return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your engineer's email address",
                validate: answer => {
                    if (!answer || [...answer.matchAll(/@/g)].length > 1 || answer.match(/\.{2,}/)) {
                        console.log('Please enter a valid email address!');
                        return false;
                    } else return true;
                }
            },
            {
                type: 'input',
                name: 'git',
                message: "Please enter your engineer's GitHub address",
                validate: answer => {
                    if (!answer || answer.match(/\.{2,}/)) {
                        console.log("Please enter a valid gitHub address!")
                        return false;
                    } else return true
                }
            },
            {
                type: 'list',
                name: 'another',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
            },
        ])
        .then(engineerData => {
            engineers.push(new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.git));
            if (engineerData.another === 'Yes') promptEmployee()
            else {
                generatePage(managers, engineers, interns)
            }
        })
        .then(cardData => writeFile(cardData))
}

const promptIntern = () => {
    inquirer.prompt([{
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
                name: 'id',
                message: "Please enter your intern's employee ID number",
                validate: answer => {
                    if (!answer || answer.match(/\D/)) {
                        console.log('Please enter a valid employee ID number')
                        return false
                    } else return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your intern's email address",
                validate: answer => {
                    if (!answer || [...answer.matchAll(/@/g)].length > 1 || answer.match(/\.{2,}/)) {
                        console.log('Please enter a valid email address!');
                        return false;
                    } else return true;
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the school your intern is currently attending",
                validate: answer => {
                    if (!answer) {
                        console.log('Please enter a valid school name')
                        return false
                    } else return true;
                }
            },
            {
                type: 'list',
                name: 'another',
                message: 'Would you like to add another employee?',
                choices: ['Yes', 'No']
            },
        ])
        .then(internData => {
            interns.push(new Intern(internData.name, internData.id, internData.email, internData.school))
            if (internData.another === 'Yes') promptEmployee()
            else {
                generatePage(managers, engineers, interns)
            }
        })
        .then(cardData => writeFile(cardData))
}


promptEmployee()

// want to limit side effects. Each function serves a single purpose so as to reduce 

// select type, then ask questions on that type
// main menu that branmches off into four directions,
// function expressions vs declarations are ultimately up to developer preference