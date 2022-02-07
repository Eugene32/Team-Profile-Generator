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


const writeHTMLFile = () => {

    const htmlFileStart = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="./assets/css/reset.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>Team</title>
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
        <section id="managerContainer" class="columns box is-half columns is-centered is-bordered">       
        `;

    fs.writeFile('./dist/team.html', htmlFileStart, (err) =>
        err ? console.log(err) : null
    );
}

appendDetails = (name, id, email, unique, role) => {
    console.log('append_manager_details');
    const htmlMan =
        `      <div class="box bd-notification is-primary is-one-fifth is-bordered" >
 <ul class="">
   <li>
       <ul>
           <li><span class="container title is-5-fullhd">${name}</span></li>
           <li><span class="container title is-4-fullhd">${role}</span></li>
       </ul>
   </li>
   <li>
       <ul>
           <li class="box">id: <span >${id}</span></li>
           <li class="box">email:<a href="mailto:${email}">${email}</a></li>
           <li class="box">Office number: <span >${unique}</span></li>
       </ul>
   </li>
 </ul>
 </div >
`;

    fs.appendFile('./dist/team.html', htmlMan, (err) =>
        err ? console.log(err) : null
    );

}




function saveFile(personnelData, fileName) {
    const fileData = JSON.stringify(personnelData);
    fileName = (`./src/${fileName}.JSON`);
    fs.writeFile(fileName, fileData, (err) =>
        err ? console.log(err) : null);

};

let intern = [];
let engineer = [];
let engineerFile = [];
let manager;
let managerGlb;
let engineerGlb = [];
let internGlb = [];

// let name;
// let id;
// let email;
// let unique;
// let position;

async function main() {
    writeHTMLFile();
    let personnelData = await inquirer.prompt(managerPrompts);
    //manager = new Manager(personnelData.name, personnelData.ID, personnelData.email, personnelData.unique);
    let person = new Manager(personnelData.name, personnelData.ID, personnelData.email, personnelData.unique);

    let name = person.getName();
    let id = person.getId();
    let email = person.getEmail();
    let unique = person.getNumber();
    let role = person.getRole();

    appendDetails(name, id, email, unique, role);

    let answer = false;

    do {
        const mainMenuChoice = await inquirer.prompt(menuPrompts);

        if (mainMenuChoice.menuSelection == 'Add an Engineer') {

            let personnelData = await inquirer.prompt(engineerPrompts);
            engineerFile.push(personnelData);
            const person = new Engineer(personnelData.name, personnelData.ID, personnelData.email, personnelData.unique);

            let name = person.getName();
            let id = person.getId();
            let email = person.getEmail();
            let unique = person.getGithub();
            let role = person.getRole();

            appendDetails(name, id, email, unique, role);

        }

        else if (mainMenuChoice.menuSelection == 'Add an Intern') {

            let personnelData = await inquirer.prompt(internPrompts);
            const person = new Intern(personnelData.name, personnelData.ID, personnelData.email, personnelData.unique);
            let name = person.getName();
            let id = person.getId();
            let email = person.getEmail();
            let unique = person.getSchool();
            let role = person.getRole();

            appendDetails(name, id, email, unique, role);
        }
        else {
            answer = true;
        }

    } while (answer === false);


    let saveToFile = saveFile(manager, 'manager');  // Save Mngr details
    saveToFile = saveFile(engineerFile, 'engineer');  // Save Engr details
    saveToFile = saveFile(intern, 'intern');  // Save Intrn details  

    console.log(name);

    //writeToFile(name);



}




main();






// function writeToFile(name) {

//     const htmlFileStart = `<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link rel="stylesheet" href="./assets/css/reset.css">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
//     <link rel="stylesheet" href="./assets/css/style.css">
//     <title>Document</title>
// </head>

// <body class="container">
//     <nav class="navbar" role="navigation" aria-label="main navigation ">
//         <div class="navbar-brand">
//             <a class="navbar-item" href="https://bulma.io">
//                 <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
//             </a>

//             <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
//                 data-target="navbarBasicExample">
//                 <span aria-hidden="true"></span>
//                 <span aria-hidden="true"></span>
//                 <span aria-hidden="true"></span>
//             </a>
//         </div>

//         <div id="navbarBasicExample" class="navbar-menu">
//             <div class="navbar-start">
//                 <a class="navbar-item">
//                     Home
//                 </a>

//                 <a class="navbar-item">
//                     Documentation
//                 </a>

//                 <div class="navbar-item has-dropdown is-hoverable">
//                     <a class="navbar-link">
//                         More
//                     </a>

//                     <div class="navbar-dropdown">
//                         <a class="navbar-item">
//                             About
//                         </a>
//                         <a class="navbar-item">
//                             Jobs
//                         </a>
//                         <a class="navbar-item">
//                             Contact
//                         </a>
//                         <hr class="navbar-divider">
//                         <a class="navbar-item">
//                             Report an issue
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             <div class="navbar-end">
//                 <div class="navbar-item">
//                     <div class="buttons">
//                         <a class="button is-primary">
//                             <strong>Sign up</strong>
//                         </a>
//                         <a class="button is-light">
//                             Log in
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </nav>

//     <main class="container is-relative ">`;




//     const htmlMan =
//         `< div class="box bd-notification is-primary column is-one-fifth is-bordered" >
//  <ul class="">
//    <li>
//        <ul>
//            <li><span class="container title is-5-fullhd">${name}</span></li>
//            <li><span class="container title is-4-fullhd">Manager</span></li>
//        </ul>
//    </li>
//    <li>
//        <ul>
//            <li><span class="box"></span></li>
//            <li><span class="box"></span></li>
//            <li><span class="box"></span></li>
//        </ul>
//    </li>

//  </ul>
//  </div >`;

//     const htmlManStart = `
// <section id="managerContainer" class="columns box is-fullwidth columns is-centered is-bordered">`;



//     // let htmlEngr;

//     // htmlEngrInt = () => {
//     //     for (let i = 0; i < engineer.length; i++) {
//     //         htmlEngr +=
//     //             `< div class="box bd-notification is-primary column is-one-fifth is-bordered" >
//     //     <ul class="">
//     //             <li>
//     //             <ul>
//     //                 <li><span class="container title is-5-fullhd">${engineer[i].name}</span></li>
//     //                 <li><span class="container title is-4-fullhd">Manager</span></li>
//     //             </ul>
//     //         </li>
//     //         <li>
//     //             <ul>
//     //                 <li><span class="box">${engineer[i].ID}</span></li>
//     //                 <li><span class="box">${engineer[i].email}</span></li>
//     //                 <li><span class="box">${engineer[i].unique}</span></li>
//     //             </ul>
//     //         </li>

//     //     </ul>
//     // </div > `;
//     //     }

//     // }

//     //let htmlMan;


//     // const htmlManEnd = `</section>`;

//     // const htmlEngStart = `<section id="engineerContainer" class="columns box is-fullwidth is-centered is-bordered ">`;

//     // const htmlEngEnd = `</section>`;

//     // const htmlIntStart = `<section id="internContainer" class="box is-fullwidth columns is-centered is-bordered">`;

//     // const htmlIntEnd = `</section>`;

//     // const htmlEnd = `</main > </body ></html > `;


//     // const dataBox = `< div class="box bd-notification is-primary column is-one-fifth is-bordered" >
//     //     <ul class="">
//     //         <li>
//     //             <ul>
//     //                 <li><span class="container title is-5-fullhd">Name</span></li>
//     //                 <li><span class="container title is-4-fullhd">title</span></li>
//     //             </ul>
//     //         </li>
//     //         <li>
//     //             <ul>
//     //                 <li><span class="box">ID</span></li>
//     //                 <li><span class="box">Email</span></li>
//     //                 <li><span class="box">Office Number</span></li>
//     //             </ul>
//     //         </li>

//     //     </ul>
//     // </div > `;


//     let HTMLfile = htmlFileStart;
//     HTMLfile += htmlManStart;
//     HTMLfile += htmlMan;
//     // HTMLfile += htmlManEnd;
//     // HTMLfile += htmlEngStart;
//     // HTMLfile += htmlEngr
//     // HTMLfile += htmlEngEnd;
//     // HTMLfile += htmlIntStart;
//     // HTMLfile += //Inser iNTERN details here
//     //     HTMLfile += htmlIntEnd;
//     // HTMLfile += htmlEnd;

//     fs.writeFile('./dist/team.html', HTMLfile, (err) =>
//         err ? console.log(err) : console.log('Success!')
//     );

//     // console.log(managerGlb);
//     //console.log(engineerGlb);
//     // console.log(internGlb);

// }

module.exports = { manager, engineer, intern };










