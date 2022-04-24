// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const { writeFile, copyFile } = require('./develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    //1. Name of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your super cool project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please type in a name!');
                return false;
            }
        }
    },

    //2. Description 
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a small desription of your project!');
                return false;
            }
        }
    },

    //3. Installation Instructions 
    {
        type: 'input',
        name: 'installationinstructions',
        message: 'If I want to check out your project, how can I install it?',
        validate: installationinstructionsInput => {
            if (installationinstructionsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    //4. Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //5. Contribution guidelines
    {
        type: 'confirm',
        name: 'contribution',
        message: 'Is it alright for other developers to contribute to your project?',
        default: false
    },

    //6. Test Instructions 
    {
        type: 'input',
        name: 'testinstructions',
        message: 'How can your project be tested?',
        validate: testinstructionsInput => {
            if (testinstructionsInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //7. License 
    {
        type: 'ckeckbox',
        name: 'licensing',
        message: 'Which license would you like to choose?',
        choices: ['A', 'B', 'C', 'D'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //8. Github user
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                return false;
            }
        }
    },

    //9. Email
    {
        type: 'input',
        name: 'questions',
        message: 'What is a good email for people to contact you?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                return false;
            }
        }
    },
];

//ToC ?? not too sure about this one



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
            return console.log('There was an error');
        } else {
            console.log('Readme is updated!');
        }
    }); 
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(writeFileResponse => {
        console.log('Readme updating!' + writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch((err) => {
        console.log(err);
    })
};

// Function call to initialize app
init();
