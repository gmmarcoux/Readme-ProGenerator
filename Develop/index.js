// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const generateMarkdown = require('./src/generateMarkdown.js');
const util = require('util'); 

// TODO: Create an array of questions for user input
const questions = [{

    //1. Name of project
    type: '',
    name: '',
    message: '',
    validate: txt => {
        if () => {
            return true;
        } else {
            console.log('');
            return false;
        }
    }

    //2. Description 
    type: '',
    name: '',
    message: '',
    validate: txt => {
        if () => {
            return true;
        } else {
            console.log('');
            return false;
        }
    }

    //3. Installation Instructions 
    type: '',
    name: '',
    message: '',
    validate: txt => {
        if () => {
            return true;
        } else {
            console.log('');
            return false;
        }
    }

    //4. Usage Information
    type: '',
    name: '',
    message: '',
    validate: txt => {
        if () => {
            return true;
        } else {
            console.log('');
            return false;
        }
    }

    //5. Contribution guidelines
    type: '',
    name: '',
    message: '',
    validate: txt => {
        if () => {
            return true;
        } else {
            console.log('');
            return false;
        }
    }

    //6. Test Instructions 
    type: '',
    name: '',
    message: '',
    validate: txt => {
        if () => {
            return true;
        } else {
            console.log('');
            return false;
        }
    }

    //7. License 
    type: '',
    name: '',
    message: '',
    choices: '',
    validate: txt => {
        if () => {
            return true;
        } else {
            console.log('');
            return false;
        }
    }

    //8. Github user
    type: '',
    name: '',
    message: '',
    validate: txt => {
        if () => {
            return true;
        } else {
            console.log('');
            return false;
        }
    }

    //9. Email
    type: '',
    name: '',
    message: '',
    validate: txt => {
        if () => {
            return true;
        } else {
            console.log('');
            return false;
        }
    }
}];

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
},

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
