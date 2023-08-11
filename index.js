// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ projectTitle, description, installation, instructions, screenshots, credits, license, github, email, link }) => 
`# ${projectTitle}

${link}

## Description

${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${instructions}

${screenshots}

## Credits

${credits}

## License

${license}

## Questions

Contact me here.

GitHub: [GitHub Profile Link](${github})

Email: ${email}

---`;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: `What is your project title?
        
        ->`,
    },
    {
        type: 'input',
        name: 'description',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?
        
        ->`,
    },
    {
        type: 'input',
        name: 'installation',
        message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running below.
        
        ->`,
    },
    {
        type: 'input',
        name: 'instructions',
        message: `Provide instructions and examples for use.
        
        ->`,
    },
    {
        type: 'input',
        name: 'screenshots',
        message: `Include screenshots as needed.

        To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

        ![alt text](assets/images/screenshot.png)
        
        ->`,
    },
    {
        type: 'input',
        name: 'credits',
        message: `List your collaborators, if any, with links to their GitHub profiles.

        If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
        
        If you followed tutorials, include links to those here as well.

        The syntax for links is as follows: 

        [Link Name](Link URL)
        
        ->`,
    },
    {
        type: 'list',
        name: 'license',
        choices: ['n/a or no license', 
        'GNU General Public License v3.0',
        'MIT License',
        'Apache License 2.0',
        'Mozilla Public License 2.0',
        'Boost Software License 1.0',
        'The Unlicense',
        ],
        message: `The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to https://choosealicense.com`,
    },
    {
        type: 'input',
        name: 'github',
        message: `Please copy & paste your GitHub profile URL below.
        
        ->`,
    },
    {
        type: 'input',
        name: 'email',
        message: `Please copy & paste the email you would like people to contact you by.
        
        ->`,
    },
];

// TODO: Create a function to write README file
const writeToFile = (answers) => {

    let licenseLink;
    switch (answers.license) {
        case 'GNU General Public License v3.0':
            licenseLink = `[![Static Badge](https://img.shields.io/badge/License-GNU_General_Public_License_v3.0-%23d3ffce)](https://choosealicense.com/licenses/gpl-3.0/)`;
            break;

        case 'MIT License':
            licenseLink = `[![Static Badge](https://img.shields.io/badge/License-MIT_License-%23b0e0e6)](https://choosealicense.com/licenses/mit/)`;
            break;

        case 'Apache License 2.0':
            licenseLink = `[![Static Badge](https://img.shields.io/badge/License-Apache_License_2.0-%23c6e2ff)](https://choosealicense.com/licenses/apache-2.0/)`
            break;

        case 'Mozilla Public License 2.0':
            licenseLink = `[![Static Badge](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-%236897bb)](https://choosealicense.com/licenses/mpl-2.0/)`
            break;

        case 'Boost Software License 1.0':
            licenseLink = `[![Static Badge](https://img.shields.io/badge/License-Boost_Software_License_1.0-%23e6e6fa)](https://choosealicense.com/licenses/bsl-1.0/)`
            break;
        
        case 'The Unlicense':
            licenseLink = `[![Static Badge](https://img.shields.io/badge/License-The_Unlicense-%23fafae6)](https://choosealicense.com/licenses/unlicense/)`
            break;
    
        default:
            licenseLink = `[![Static Badge](https://img.shields.io/badge/No_License_Detected-gray?link=https%3A%2F%2Fchoosealicense.com%2Flicenses%2Fgpl-3.0%2F)](https://choosealicense.com/)`;
            break;
    }

    answers.link = licenseLink;

    const quickmeContent = generateREADME(answers);
    fs.writeFile('README.md', quickmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile(answers);
        })
}

// Function call to initialize app
init();
