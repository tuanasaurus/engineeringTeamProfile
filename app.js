// Const to call the cards that was built in the templates folder
// const Manager = require('./templates/manager.html');
// const Employee = require('./templates/intern.html.html');
// const Engineer = require('./templates/engineer.html.html');
const inquire = require("inquirer");
const fs = require("fs");

// Function to ask questions
let teamRoster = [];
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter manager name:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter manager's email:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter manager's Github:",
    },
    {
        type: "input",
        name: "hasTeam",
        message: "Do you have team member?",
    },
]

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter employee name:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter employee's email:",
    },
    {
        type: "list",
        name: "role",
        message: "What is their role?",
        choices: ["engineer","intern"]
    },
    {
        when: input => {
            return input.role === "engineer"
        },
        type: "input",
        name: "github",
        message: "Engineer, enter your github username:"
    },
    {
        when: input => {
            return input.role === "intern"
        },
        type: "input",
        name: "github",
        message: "Intern, enter your school:"
    },
    {
        type: "list",
        name: "addAnother",
        message: "Add another team member?",
        choices: ["yes", "no"]
    },
]

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter manager name:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter manager's email:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter manager's Github:",
    },
    {
        type: "input",
        name: "hasTeam",
        message: "Do you have team member?",
    },
]
