// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init()
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const markdown = require('./generateMarkdown.js');

inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "please describe your project.",
        name: "description"
    },
    {
        type: 'input',
        message: 'Enter the installation instructions for your project',
        name: 'installation',
    },
    {
        type: "list",
        message: "What type of license do you want?",
        name: "license",
        choices: ["MIT License",
            "Apache License 2.0",
            "GPL License",
            "BSD License"]
    },
    {
        type: 'input',
        message: 'Enter your Github username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email'
    },
]
    
    // fs.writeFile('README.md', data, (err) =>
    // err ? console.error(err) : console.log('Success!')
    // )



);