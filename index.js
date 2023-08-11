// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ projectTitle, description, installation, instructions, screenshots, credits, license, github, email }) => 
`# ${projectTitle}

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
        'Academic Free License v3.0',
        'Apache license 2.0',
        'Artistic license 2.0',
        'Boost Software License 1.0',
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        'BSD 3-clause Clear license',
        'BSD 4-clause "Original" or "Old" license',
        'BSD Zero-Clause license',
        'Creative Commons license family',
        'Creative Commons Zero v1.0 Universal',
        'Creative Commons Attribution 4.0',
        'Creative Commons Attribution Share Alike 4.0',
        'Do What The F*ck You Want To Public License',
        'Educational Community License v2.0',
        'Eclipse Public License 1.0',
        'Eclipse Public License 2.0',
        'European Union Public License 1.1',
        'GNU Affero General Public License v3.0',
        'GNU General Public License family',
        'GNU General Public License v2.0',
        'GNU General Public License v3.0',
        'GNU Lesser General Public License family',
        'GNU Lesser General Public License v2.1',
        'GNU Lesser General Public License v3.0',
        'ISC',
        'LaTeX Project Public License v1.3c',
        'Microsoft Public License',
        'MIT',
        'Mozilla Public License 2.0',
        'Open Software License 3.0',
        'PostgreSQL License',
        'SIL Open Font License 1.1',
        'University of Illinois/NCSA Open Source License',
        'The Unlicense',
        'zLib License',
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
