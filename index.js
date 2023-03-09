const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// Questions for each type of employee
const managerQuestions = [
{type: 'input', name: 'managerName', message: 'What is the managers name?'},
{type: 'number', name: 'managerID', message: 'What is your ID number?'},
{type: 'input', name: 'managerEmail', message: 'What is your email?'},
{type: 'number', name: 'managerOfficeNumber', message: 'What is your office number?'}
];

const engineerQuestions = [
    {type: 'name', name: 'engineerName', message: 'What is the engineers name?'},
    {type: 'number', name: 'engineerID', message: 'What is your ID number?'},
    {type: 'input', name: 'engineerEmail', message: 'What is your email?'},
    {type: 'input', name: 'engineerGitHub', message: 'What is your GITHUB username?'}
];

const internQuestions = [
    {type: 'name', name: 'internName', message: 'What is the intern name?'},
    {type: 'number', name: 'internID', message: 'What is your ID number?'},
    {type: 'input', name: 'internEmail', message: 'What is your email?'},
    {type: 'input', name: 'internSchool', message: 'What is your school?'}    
];

const completeTeamQuestion = [{type: 'list', name: 'completedQuestionCheck', choices: ['Add an engineer', 'Add an intern', 'Finish building the team']}];

//Array to push employees onto to be rendered
const team = [];

//Initialise function
function init(){
    //Gets prompts for manager and creates new manager object for it and pushes this to the team array
    inquirer.prompt(managerQuestions).then((data) => {
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNumber);
        team.push(manager);
        //Runs new employee function
        addNewEmployee();
    });
}

//Function to check whether a new employee is added
function addNewEmployee(){
    //Conditional check to see which choice user has selected then runs selected function
    inquirer.prompt(completeTeamQuestion).then((data) =>{
        console.log(data);
        if (data.completedQuestionCheck === 'Add an engineer'){
            addEngineer();
        }
        else if (data.completedQuestionCheck === 'Add an intern'){
            addIntern();
        }
        else{
            //finishBuildingTeam();
            console.log("All done");
        }

    });
}

//Function to add an engineer, similar to adding a manager just different object created
function addEngineer(){
    inquirer.prompt(engineerQuestions).then((data) => {
        const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub);
        team.push(engineer);
        console.log(team);
        addNewEmployee();
    });
}

//Function to add an intern, similar to adding a manager just different object created
function addIntern(){
    inquirer.prompt(internQuestions).then((data) => {
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
        team.push(intern);
        console.log(team);
        addNewEmployee();
    });
}

init();

