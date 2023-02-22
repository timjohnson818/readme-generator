const inquirer = require('inquirer')
const fs = require('fs')

const generateREADME = ({ title, description, install, usage, guidelines, testInstructions, license, user, email}) =>
`# ${title}

## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
${install}

## Usage
${usage}

## License
${license}

## Contributing
${guidelines}

## Tests
${testInstructions}

`



inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter instructions for installation:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Enter contribution guidelines:',
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Enter the test instructions:',
        },
        {
            type: 'list',
            message: 'What license are you using?',
            name: 'license',
            choices: ['MIT', 'Microsoft Public License', 'Mozilla Public License 2.0'],
        },
        {
            type: 'input',
            name: 'user',
            message: 'What is your github profile name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
    .then((data) => {
       const READMEcontent = generateREADME(data);
        
       fs.writeFile('README.md', READMEcontent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
       );
    });