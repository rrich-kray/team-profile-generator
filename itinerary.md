GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

1. Create separate inquirer prompts for Manager, engineer and intern information. These will be located in 
    - managerPrompt(), engineerPrompt() and internPrompt()
    - run managerPrompt().then(choicePrompt()). choicePrompt() gives user choice to add an engineer, intern or exit the queries.
    - if statements to determine which function to run. Each function will append additional information to the promise object returned from the original then statement.
    - Data will then be passed through classes as arguments to instantiate employee objects
    - Is it necessary to create objects? why not just pass the data directly from the inquirer promise to the page builder? Should inquirer prompts be object methods

2. Create Manager, Engineer, Intern classes. Each can inherit common methods, properties from a parent Employee class.
    - Common properties: Email, id
    - Manager: Office Number
    - Engineer: GitHub
    - Intern: School

3. Add generateFile.js to utils file. This will produce the final HTML file and will do so in dist folder

4. Add page-template.js to src folder - this will contain the HTML code, and will import the necessary objects 

index.js prompts user for information; imports necessary 


