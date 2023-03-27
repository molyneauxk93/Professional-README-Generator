// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');

//importing generateMArkdown javascript file 
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please give a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter any installation guidelines required.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter any usage guidelines required.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please select a license from the list of options.',
        name: 'license',
        choices: ['MIT', 'Apache', 'ISC', 'Boost Software License', 'No License'],
    },
    {
        type: 'input',
        message: 'Please enter any contributing guidelines.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please enter any testing guidelines.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md has been generated successfully.')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);

            const fileName = 'README.md';

            writeToFile(fileName, generateMarkdown(data));

        });
}

// Function call to initialize app
init();