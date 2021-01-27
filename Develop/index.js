//calling packages to run application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

//array of questions
const questions =
    [
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Please describe your project:",
            name: "description",
        },
        {
            type: 'input',
            message: 'Enter the installation instructions for your project:',
            name: 'installation',
        },
        {
            type: "input",
            message: "Please enter link to the deployed application:",
            name: "link",
        },
        {
            type: "list",
            message: "What type of license do you want?",
            name: "license",
            choices: ["MIT License",
                "Apache License 2.0",
                "GPL License",
                "BSD License",
                "None"]
        },
        {
            type: 'input',
            message: 'Enter your Github username',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Enter your email',
            name: 'email',
        },
    ];

//promt user function
inquirer
    .prompt(questions)
    .then((response) => writeToFile(response));

//create Readme file function
function writeToFile(fileName, data) {
    fs.writeFile("testREADME.md", generate("data"), err => err
        ? console.error(err)
        : console.log("Success! Your ReadMe.md is being generated."));

};



