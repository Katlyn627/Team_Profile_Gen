// Created packages for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

// Created variables to link library data to cards

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 


// Created a function to write date to the README file

function writeToFile(fileName, data) {
    fs.writeFileSync(`${fileName}.html`, data,(err) => {
        if (err) throw err;
        console.log('Team Profile Created');
      }) 
}

// Create async function to initialize app and get inquirer prompts and answers

async function init() {
    // let answers = await userInput();
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is the role of this team member?',
            name: 'role',
            choices:[
                "Manager",
                "Engineer",
                "Intern"
            ]  
        },
        {
            type: 'input',
            message: "What is the employee's ID number?",
            name: 'id',   
        },
        {
            type: 'input',
            message: "What is the employees email address?",
            name: 'email', 
        },
        {
            type: 'input',
            message: "What is the managers office number?",
            name: 'officeNumber',            
        }
    ]).then((answers) => {
console.log(answers);
writeToFile(("GenerateHTML"),(generateHTML(answers)));
})
} 

// Function call to initialize application
init();