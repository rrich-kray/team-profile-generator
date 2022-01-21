const inquirer = require('inquirer')

const managerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: name => {
                if (name) return true
                else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: email => {
                if (!email) return true
                else {
                    console.log("Please enter the manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
            validate: office => {
                if (office) return true
                else {
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        },
    ])
}

const engineerPrompt = () => {
    inquirer.prompt([
        {   
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name",
            validate: name => {
                if (name) return true;
                else {
                    console.log("please enter the engineer's name!")
                    return false;
                }
            }
        },
        {   
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email",
            validate: email => {
                if (email) return true;
                else {
                    console.log("please enter the engineer's email!")
                    return false;
                }
            }
        },
        {   
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub URL",
            validate: git => {
                if (git) return true;
                else {
                    console.log("please enter the engineer's GitHub!")
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'another',
            message: 'Would you like to add another engineer?',
            choices: ['Yes', 'No']
        }
    ])
}

// const internPrompt = () => {
//     inquirer.prompt([
//         {   
//             type: 'input',
//             name: 'name',
//             message: "Please enter the intern's name",
//             validate: name => {
//                 if (name) return true;
//                 else {
//                     console.log("please enter the interns name!")
//                     return false;
//                 }
//             }
//         },
//         {   
//             type: 'input',
//             name: 'name',
//             message: "Please enter the intern's email",
//             validate: email => {
//                 if (email) return true;
//                 else {
//                     console.log("please enter the interns email!")
//                     return false;
//                 }
//             }
//         },
//         {   
//             type: 'input',
//             name: 'school',
//             message: "Please enter the intern's school",
//             validate: school => {
//                 if (school) return true;
//                 else {
//                     console.log("please enter the interns school!")
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'list',
//             name: 'another',
//             message: 'Would you like to add another engineer?',
//             choices: ['Yes', 'No']
//         }
//     ])
// }

managerPrompt()
    .then(managerData => {

    })
    .then(engineerPrompt())
    .then(engineerData => {
        if (engineerData.another) engineerPrompt()
        else {

        }
    })
    .then(internPrompt())