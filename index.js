const Employee = require('./lib/employeeClass');
const Engineer = require('./lib/engineerClass');
const Manager = require('./lib/managerClass');
const Intern = require('./lib/internClass');


const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');

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


// const managerDetails = inquirer
//     .prompt(managerPrompts)
//     .then(managerData => {
//         console.log(managerData);
//         const managerFile = `${managerData.managerName}, ${managerData.managerID}, ${managerData.managerEmail}, ${managerData.managerNumber}`;
//         const managerFileData = JSON.stringify(managerFile);
//         console.log(managerFileData);
//         fileName = './src/manager.JSON';
//         fs.writeFile(fileName, managerFileData, (err) =>
//             err ? console.log(err) : console.log('Success!')
//         );

//     });


const saveManagerFile = () => { };


async function main() {
    const managerData = await inquirer.prompt(managerPrompts);

    function saveManagerDetails() {
        const managerFile = `${managerData.managerName}, ${managerData.managerID}, ${managerData.managerEmail}, ${managerData.managerNumber}`;
        const managerFileData = JSON.stringify(managerFile);
        console.log(managerFileData);
        fileName = './src/manager.JSON';
        fs.writeFile(fileName, managerFileData, (err) =>
            err ? console.log(err) : console.log('Success!'));

    };

    const saveManagerFile = saveManagerDetails();
    const mainMenuChoice = await inquirer.prompt(menuPrompts);
    console.log(mainMenuChoice);
    
    if (mainMenuChoice == 'Add an Engineer') {

    }

    else {

    }




}

main();









