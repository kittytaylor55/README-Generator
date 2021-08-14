const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt ([
     //User will be prompted to answer the following questions.
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your READme?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description for you project:',
    },
    {
        type: 'input',
        name: 'tech',
        message: 'What technologies were used to make this project?',
    },
    //User enters installation and use instructions.
    {
        type: 'input',
        name: 'installation',
        message: 'How would a user install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would a user use this application?'
    },
    //any contributers to this project
    {
        type: 'input',
        name: 'contributers',
        message: 'Enter any contributers:',
    },
    //User enters contect info
    {
        type: 'input',
        name: 'contact',
        message: 'Please enter your name, email, and another other contact information',
    },
    //User selects license for READme
    {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 
        'Boost Software License 1.0 ', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 
        'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense' , 'NONE']
    }
]).then((response) => {
    fs.writeFile('READmeCREATED.md', generateMarkdown(response), (err) => err ? console.log(err) : console.log('New READme added!'));
})