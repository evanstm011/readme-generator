//calling packages to run application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
const { networkInterfaces } = require('os');

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
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contribution',
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


//create Readme file function
function writeToFile(fileName, data) {

    return fs.writeFile(path.join(process.cwd), fileName, data)
};

//promt user function
function createFile() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log("Generate your readme now...");
            writeToFile("Readme.MD", generate({ ...response }));
        });
}


createFile();
