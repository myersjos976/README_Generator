// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const license = require('./utils/generateMarkdown.js');

// Array of licenses for user to choose from.
const licenses = [
    "None",
    "Apache License 2.0",
    "GNU General Public License v3.0",
    "MIT License",
    "BSD 2-Clause Simplified License",
    "BSD 3-Clause New or Revised License",
    "Boost Software License 1.0",
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public License 2.0",
    "GNU Affero General Public License v3.0",
    "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1",
    "Mozilla Public License 2.0",
    "The Unlicense"
];

// Array of questions for user to answer.
const questions = [
    "Enter title:",
    "Enter description text:",
    "Enter installation instructions:",
    "Enter usage instructions:",
    "Enter contribution guidelines:",
    "Enter test instructions:",
    "Enter credits:",
    "Enter link to GitHub:",
    "Enter email address:",
    "Select desired licence number from the list below:",
    "Enter desired file path location (i.e. C:/Users/userName/repoName):"
];

// Array of responses from user.
const responses = [];

// Writes text from data to a README.md file at locations specified in fileName.
function writeToFile(fileName, data)
 {
    fs.writeFile(fileName + "/README.md", data, (err) =>
    err ? console.error(err) : console.log('SUCCESS! README file created') 
    );
 }

/*
 Intializes README Generator
 Calls generateMarkdown function from generateMarkdown.js
*/
function init() 
{
    console.log("Welcome to the README Generator!");
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'test',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'credits',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'email',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'github',
            },
            {
                type: 'rawlist',
                message: questions[9],
                choices: licenses,
                default: 'None',
                name: 'license',
            },
            {
                type: 'input',
                message: questions[10],
                name: 'fileLocation',
            },
        ])
        .then((response) => 
            writeToFile(response.fileLocation, license.generateMarkdown(
                [
                    response.title, 
                    response.description, 
                    response.installation, 
                    response.usage, 
                    response.contribution, 
                    response.test, 
                    response.credits, 
                    response.github, 
                    response.email, 
                    response.license
                ]
            )),
            (err) =>
                err ? console.error(err) : console.log('SUCCESS!')
        );
}

// Function call to initialize app
init();



