//const Employee = require('./lib/employeeClass');
const Engineer = require('./lib/engineerClass');
const Manager = require('./lib/managerClass');
const Intern = require('./lib/internClass');



const fs = require('fs');
const inquirer = require('inquirer');

const { resolve } = require('path');

managerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Manager's Name:  ",
    },
    {
        type: 'input',
        name: 'ID',
        message: "Employee ID:  ",
    },
    {
        type: 'input',
        name: 'email',
        message: "Email:  ",
    },
    {
        type: 'input',
        name: 'unique',
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
        name: 'name',
        message: "Engineer's name:  ",
    },
    {
        type: 'input',
        name: 'ID',
        message: "Employee ID:  ",
    },
    {
        type: 'input',
        name: 'email',
        message: "Email:  ",
    },
    {
        type: 'input',
        name: 'unique',
        message: 'GitHub Username:  ',
    },
]

internPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "Intern's name:  ",
    },
    {
        type: 'input',
        name: 'ID',
        message: "Employee ID:  ",
    },
    {
        type: 'input',
        name: 'email',
        message: "Email:  ",
    },
    {
        type: 'input',
        name: 'unique',
        message: 'School:  ',
    },
]

const HTMLfile = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./assets/css/reset.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Document</title>
</head>

<body class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation ">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        More
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <main class="container is-relative ">
        <section id="managerContainer" class="columns box is-fullwidth columns is-centered is-bordered">
            
        </section>
        <section id="engineerContainer" class="columns box is-fullwidth is-centered is-bordered ">

        </section>
        <section id="internContainer" class="box is-fullwidth columns is-centered is-bordered">

        </section>
    </main>

    
</body>

</html>`;


const dataBox = `<div class="box bd-notification is-primary column is-one-fifth is-bordered">
<ul class="">
    <li>
        <ul>
            <li><span class="container title is-5-fullhd">Name</span></li>
            <li><span class="container title is-4-fullhd">title</span></li>
        </ul>
    </li>
    <li>
        <ul>
            <li><span class="box">ID</span></li>
            <li><span class="box">Email</span></li>
            <li><span class="box">Office Number</span></li>
        </ul>
    </li>

</ul>
</div>`;





function saveFile(personnelData, fileName) {
    const fileData = JSON.stringify(personnelData);
    fileName = (`./src/${fileName}.JSON`);
    fs.writeFile(fileName, fileData, (err) =>
        err ? console.log(err) : null);

};


let str = HTMLfile;
console.log(typeof HTMLfile);
str += dataBox;
console.log(str);

function writeToFile(str) {

    fs.writeFile('./dist/team.html', str, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}



let manager;
let intern = [];
let engineer = [];
let engineerFile = [];


async function main() {



    let personnelData = await inquirer.prompt(managerPrompts);

    manager = new Manager(personnelData.name, personnelData.ID, personnelData.email, personnelData.unique);

    let answer = false;
    let eCntr = 0;
    let iCntr = 0;

    do {
        const mainMenuChoice = await inquirer.prompt(menuPrompts);

        if (mainMenuChoice.menuSelection == 'Add an Engineer') {

            let personnelData = await inquirer.prompt(engineerPrompts);
            engineerFile.push(personnelData);

            engineer[eCntr] = new Engineer(personnelData.name, personnelData.ID, personnelData.email, personnelData.unique);


            eCntr++;

        }

        else if (mainMenuChoice.menuSelection == 'Add an Intern') {

            let personnelData = await inquirer.prompt(internPrompts);


            intern[iCntr] = new Intern(personnelData.name, personnelData.ID, personnelData.email, personnelData.unique);


            iCntr++;

        }
        else {
            answer = true;
        }

    } while (answer === false);

    //console.log(manager);
    //console.log(engineer);
    //console.log(intern);
    //console.log(engineerFile);

    let saveToFile = saveFile(manager, 'manager');
    saveToFile = saveFile(engineerFile, 'engineer');
    saveToFile = saveFile(intern, 'intern');
    writeToFile(str);





}


main();
module.exports = { manager, engineer, intern };



boxTemplate = () => {
    const managerWindow = document.getElementById('managerContainer');
    const engineerWindow = document.getElementById('engineerContainer');
    const internWindow = document.getElementById('internContainer');




    // Box template

    addEmpbox = () => {

        let span = document.createElement('span');
        let ul1 = document.createElement('ul');
        let ul2 = document.createElement('ul');
        let ul3 = document.createElement('ul');

        let li1 = document.createElement('li');
        li1.setAttribute('id', 'empName');
        li1.setAttribute('class', 'container title is-5-fullhd');

        let li2 = document.createElement('li');
        li2.setAttribute('id', 'empPos');
        li2.setAttribute('class', 'container title is-5-fullhd');

        let li3 = document.createElement('li');
        li3.setAttribute('id', 'empID');
        li3.setAttribute('class', 'box');

        let li4 = document.createElement('li');
        li4.setAttribute('id', 'empEmail');
        li4.setAttribute('class', 'box');

        let li5 = document.createElement('li');
        li5.setAttribute('id', 'uniqueVar');
        li5.setAttribute('class', 'box');

        let li6 = document.createElement('li');

        let li7 = document.createElement('li');


        //
        ul2.append(li1);
        ul2.append(li2);
        ul3.append(li3);
        ul3.append(li4);
        ul3.append(li5);
        li6.append(ul2);
        li7.append(ul3);
        ul1.append(li6);
        ul1.append(li7);


        let div = document.createElement('div');
        div.setAttribute('class', 'box is-primary column is-one-fifth is-bordered');

        div.append(ul1);
        return div;

    };
}








