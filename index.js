const Employee = require('./lib/employeeClass');
const Engineer = require('./lib/engineerClass');
const Manager = require('./lib/managerClass');
const Intern = require('./lib/internClass');


const fs = require('fs');
const inquirer = require('inquirer');
//const { resolve } = require('path');

managerPrompts = [
    {
        type: 'input',
        name: 'managerName',
        message: "Manager's Name:  ",
    },
    {
        type: 'input',
        name: 'managerID',
        message: "Employee ID:  ",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Email:  ",
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: 'Office Phone Number:  ',
    },

]

menuPrompts = [
    {
        type: 'list',
        name: 'menuSelection',
        message: "Add Team Member(s):  ",
        choices: ['Add an Engineer', 'Add an Intern', 'Exit']
    }

]


engineerPrompts = [
    {
        type: 'input',
        name: 'engineerName',
        message: "Engineer's name:  ",
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "Employee ID:  ",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Email:  ",
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: 'GitHub Username:  ',
    },
]

internPrompts = [
    {
        type: 'input',
        name: 'internName',
        message: "Intern's name:  ",
    },
    {
        type: 'input',
        name: 'internID',
        message: "Employee ID:  ",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "Email:  ",
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'School:  ',
    },
]


const collectInputs = async (inputs = []) => {
    const prompts = [
        {
            type: 'input',
            name: 'engineerName',
            message: "Engineer's name:  ",
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Employee ID:  ",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Email:  ",
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'GitHub Username:  ',
        },
        {
            type: 'confirm',
            name: 'again',
            message: 'Add another engineer? ',
            default: true
        }
    ];

    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
};


function saveManagerDetails(managerData) {
    const managerFile = `${managerData.managerName}, ${managerData.managerID}, ${managerData.managerEmail}, ${managerData.managerNumber}`;
    const managerFileData = JSON.stringify(managerFile);
    fileName = './src/manager.JSON';
    fs.writeFile(fileName, managerFileData, (err) =>
        err ? console.log(err) : null);

};

async function main() {


    const managerData = await inquirer.prompt(managerPrompts);
    //const saveManagerFile = saveManagerDetails(managerData);  //Use this function if you want to save the file as a JSON.
    const manager = new Manager(managerData.managerName, managerData.managerID, managerData.managerEmail, managerData.managerNumber);
    console.log(manager);
    let answer = false;
    let engineer = [];
    let eCntr = 0;
    let intern = [];
    let iCntr = 0;

    do {
        const mainMenuChoice = await inquirer.prompt(menuPrompts);

        if (mainMenuChoice.menuSelection == 'Add an Engineer') {
            const engineerData = await inquirer.prompt(engineerPrompts);
            engineer[eCntr] = new Engineer(engineerData.engineerName, engineerData.engineerID, engineerData.engineerEmail, engineerData.engineerGitHub);
            console.log(engineer[eCntr]);
            console.log(engineer);
            eCntr++;
        }

        else if (mainMenuChoice.menuSelection == 'Add an Intern') {
            console.log('Add an intern');
            const internData = await inquirer.prompt(internPrompts);
            intern[iCntr] = new Intern(internData.internName, internData.internID, internData.internEmail, internData.internSchool);
            console.log(intern[iCntr]);
            console.log(intern);
            iCntr++;
        }
        else {
            answer = true;
        }

    } while (answer === false);

    console.log(manager);
    console.log(engineer);
    console.log(engineer.length);
    console.log(intern);
    console.log(intern.length);
}

main();











