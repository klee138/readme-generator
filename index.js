const fs = require("fs");
const inquirer = require("inquirer");

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
/*         {
            type: "input",
            message: "Please provide a table of contents",
            name: "toc"
        }, */
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
            choices: ['MIT', 'Apache', 'GPL']
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
        const fileName = response.title.toLowerCase().split(' ').join('') + ".md";

        const title = response.title.charAt(0).toUpperCase() + response.title.slice(1)
        const upperLocation = response.location.charAt(0).toUpperCase() + response.location.slice(1)
        const upperBio = response.bio.charAt(0).toUpperCase() + response.bio.slice(1)
        const userInput = `# ${title}
        
## ${title}

## Description
        
${description}
        
## Table of Contents
        
*[Installation][#installation]
        
*[Usage][#usage]
        
*[License][#license]
        
*[Usage][#usage]
        
*[Tests][#tests]
        
*[Contributions][#contributions]
        
## Installation
        
${install}
## Usage
        
${usage}
        
## Tests
        
${tests}
        
## Contributions
        
${contributing}`

        fs.writeFile(fileName, userInput, function(err){
            if(err){
                console.log(err);
            }
            console.log("Success!")
        })
    })

}
getInfo();
