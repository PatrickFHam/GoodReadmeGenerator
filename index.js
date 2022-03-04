// PACKAGES NEEDED
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// LIST OF QUESTIONS TO BE USED IN 'INQUIRER'
const questions = [
  {
    type: 'input',
    message: 'What is the PROJECT TITLE?',
    name: 'projectTitle'
  },
  {
    type: 'input',
    message: 'Provide DESCRIPTION:',
    name: 'projectDescription'
  },
  {
    type: 'input',
    message: 'Provide some INSTALLATION INSTRUCTIONS:',
    name: 'installationInstructions'
  },
  {
    type: 'input',
    message: 'Provide some USAGE INFORMATION',
    name: 'usageInformation'
  },
  {
    type: 'input',
    message: 'Provide some CONTRIBUTION GUIDELINES:',
    name: 'contributionGuidelines'
  },
  {
    type: 'input',
    message: 'Provide some TEST INSTRUCTIONS:',
    name: 'testInstructions'
  },
  {
    type: 'list',
    message: 'Select LICENSE:',
    name: 'license',
    choices: ['NONE',
      'Apache 2.0',
      'Boost Software License 1.0',
      'BSD 3-Clause',
      'BSD 2-Clause',
      'IBM Public License Version 1.0',
      'ISC License',
      'MIT License',
      'Mozilla Public License 2.0',
      'Perl',
      'Artistic 2.0',
      'SIL Open Font License 1.1',
      'The Unlicense',
      'The Do What the Fuck You Want to Public License',
      'zlib/libpng']
  },
  {
    type: 'input',
    message: 'What is your GITHUB USERNAME?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your EMAIL ADDRESS?',
    name: 'email'
  }
];

// FUNCTION THAT RECEIVES THE RETURN FROM generateMarkdown FUNCTION AND WRITES IT TO THE A NEW FILE
function writeToFile(fileName, data) {
  license = data.license;
  fs.writeFileSync(fileName, generateMarkdown(data));
}

// INITIATES THE INQUIRER, PASSES THE NEW FILENAME AND RESPONSE INTO NEXT FUNCTION
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile('generatedREADME.md', response))
}

init();
