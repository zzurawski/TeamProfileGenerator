const inquirer = require('inquirer');
const fs = require("fs");

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let employeeList = []

const questionsEmployee =
    [
        {
            type: 'list',
            message: 'What role does this employee fall in?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern', 'None of these'],
        }
    ];

function questionManager() {  
    inquirer.prompt(
    [
        {   
            type: "input",
            message: "What is the employee's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "id"
        },
        {
            type: "input",
            message: `What is their email?`,
            name: "email",
        },
        {
            type: "input",
            message: `What is this manager's office number?`,
            name: 'office'
        },
        {
            type: 'confirm',
            message: 'Add another employee?',
            name: 'addAnother'
        }
    ])
    .then((answer) => {
        let newManager = new Manager(
            answer.name,
            answer.id, 
            answer.email,
            answer.role = "Manager",
            answer.office,
        )

        employeeList.push(newManager)
    
        if (answer.addAnother == true) {
            inputNewEmployee();
        } else {
            makeFile();
        }
    })
};
function questionEngineer() {
    inquirer.prompt(
    [
        {   
            type: "input",
            message: "What is the employee's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "id"
        },
        {
            type: "input",
            message: `What is their email?`,
            name: "email",
        },
        {
            type: "input",
            message: `What is the engineers's GitHub?`,
            name: "github"
        },
        {
            type: 'confirm',
            message: 'Add another employee?',
            name: 'addAnother'
        }
    ])
    .then((answer) => {
        let newEngineer = new Engineer(
            answer.name,
            answer.id,
            answer.email,
            answer.role = "Engineer",
            answer.github,
        )

        employeeList.push(newEngineer);
        
        if (answer.addAnother == true) {
            inputNewEmployee();
        } else {
            makeFile();
        }
    })
};

function questionIntern() {
    inquirer.prompt(
    [
        {   
            type: "input",
            message: "What is the employee's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "id"
        },
        {
            type: "input",
            message: `What is their email?`,
            name: "email",
        },
        {
            type: 'input',
            message: `Where does the intern go to school?`,
            name: 'school'
        },
        {
            type: 'confirm',
            message: 'Add another employee?',
            name: 'addAnother'
        }
    ])
    .then((answer) => {
        let newIntern = new Intern(
            answer.name,
            answer.id,
            answer.email,
            answer.role = 'Intern',
            answer.school
        )
        console.log(newIntern);

        if (answer.addAnother == true) {
            employeeList.push(newIntern);
            inputNewEmployee();
        } else {
            employeeList.push(newIntern);
            makeFile();
        }
    })
};

function inputNewEmployee() {
    inquirer.prompt(questionsEmployee)
        .then((answer) => {

            if (answer.role === "Manager"){
                questionManager();
            } else if (answer.role === "Engineer"){
                questionEngineer();
            } else if (answer.role === "Intern"){
                questionIntern();
            } else {
                const newEmployee = new Employee(
                    answer.name,
                    answer.email,
                    answer.id,
                    answer.role,
                );
                employeeList.push(newEmployee);
                makeFile();
            }
                
        })
};

function writeCard(answer) {

    let cardTemplate = `
    <div class="col-sm-8 col-lg-3">
        <div class="card">
        <div class="card-body">
        <h3 class="card-text">${answer.name}</h3>
        <div id="employeeInfo">
            <ul id="infoList">
                <li class="employeeID">ID: ${answer.id}</li>
                <li class="employeeEmail">Email: ${answer.email}</li>
                <li class="employeeRole">Role: ${answer.role}</li>`;

    switch(answer.role) {
        case "Engineer":
            cardTemplate +=`<li class="engineer">GitHub: ${answer.github}</li>`;
            break;
        case "Manager":
            cardTemplate += `<li class="manager">Office Number: ${answer.office}</li>`
            break;
        case "Intern":
            cardTemplate +=  `<li>School: ${answer.school}</li>`
            break;
    }

    cardTemplate += `</ul></div></div></div></div>`
    
    return cardTemplate;
}

function createHTML(employeeList) {
    let cards = '';
    for (let i=0; i < employeeList.length; i++) {
        cards += writeCard(employeeList[i]);
    };
    
    let html = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css">
            <title>Team Builder</title>
        </head>
        <body>
            <header id="header">
                <h1 id="h1">Meet the Team</h1>
            </header>
            
            <div class="cards">
                ${cards}
            </div>
        </body>
    </html>`;

    return html;
}

function makeFile() {
    fs.writeFile('./dist/index.html', createHTML(employeeList), (err) => {if (err) {console.log(err)}})
}


function init() {
    questionManager();
}

init()