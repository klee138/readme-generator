const fs = require("fs");
const inquirer = require("inquirer");
//const badge = ""
async function getInfo (){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the Title of this project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please provide a description of the project",
            name: "description"
        },
        {
            type: "input",
            message: "Please provide installation instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "Please enter usage information",
            name: "usage"
        },
        {
            type: "list",
            message: "Please choose a license type",
            name: "license",
            choices: ['MIT', 'Apache', 'GPL', 'none']
        },
        {
            type: "input",
            message: "Please provide contribution guidelines",
            name: "contributing"
        },
        {
            type: "input",
            message: "Please enter test instructions",
            name: "tests"
        },
        {
            type: "input",
            message: "Please enter your Github username",
            name: "username"
        },
        {
            type: "input",
            message: "Please enter your email address",
            name: "email"
        },
    ])
    .then(function(response){
        //const fileName = response.title.toLowerCase().split(' ').join('') + ".md";
        const fileName = "./output/readme.md"
        const title = response.title.charAt(0).toUpperCase() + response.title.slice(1)
        console.log(title);
        const description = response.description
        const installation = response.installation
        const usage = response.usage
        const license = response.license.split(' ').join('%20')
        const contributing = response.contributing
        const tests = response.tests
        const username = response.username
        const email = response.email
        console.log(license);
/*         if (license === 'Apache') {
            const badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        } else if (license === 'MIT') {
            const badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        } else if (license === 'GPL') {
            const badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        } else if (license = 'none') {
            const badge = 'none'
        } */
        //console.log(badge)
        const userInput = `## ${title}
## License

![License](https://img.shields.io/badge/License-${license}-blue.svg)

## Description

${description}

## Table of Contents

[Title](#title)

[Description](#description)
        
[Installation](#installation)
        
[Usage](#usage)
        
[License](#license)
        
[Usage](#usage)
        
[Tests](#tests)
        
[Contributions](#contributing)
        
## Installation
        
${installation}

## Usage
        
${usage}
        
## Tests
        
${tests}
        
## Contributions
        
${contributing}

## Questions

[My github repo:](https://github.com/${username})
If you have any questions, please reach out to me via email at ${email}`

        fs.writeFile(fileName, userInput, function(err){
            if(err){
                console.log(err);
            }
            console.log("Success!")
        })
    })

}
getInfo();
