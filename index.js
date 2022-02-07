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
    <div class="container notification is-info has-text-centered">
        <h1 class="title is-1 is-primary"> My Team </h1>
    </div>
    
        <main class="container is-relative ">
        <section id="managerContainer" class="columns columns is-centered is-bordered is-flex-wrap-wrap">       
        `;

    fs.writeFile('./dist/team.html', htmlFileStart, (err) =>
        err ? console.log(err) : null
    );
}

appendDetails = (name, id, email, uniqueLabel, unique, role) => {

    const htmlMan =
        `      <div class="box bd-notification is-primary is-one-fifth is-bordered" style="width: 20%; height: 20%;">
 <ul class="">
   <li>
       <ul>
           <li><span class="container title is-5-fullhd">${name}</span></li>
           <li><span class="container title is-4-fullhd">${role}</span></li>
       </ul>
   </li>
   <li>
       <ul>
           <li class="box">ID: <span >${id}</span></li>
           <li class="box">Email:<a href="mailto:${email}">${email}</a></li>
           <li class="box">${uniqueLabel}: <span >${unique}</span></li>
       </ul>
   </li>
 </ul>
 </div >
`;

    fs.appendFile('./dist/team.html', htmlMan, (err) =>
        err ? console.log(err) : null
    );

}

appendEnd = () => {

    const htmlEnd = `</section>
        </main>
            <footer class="footer">
                <div class="content has-text-centered">
                    <h4 class="is-align-content-center"> &copy &#x1d19&#670 2021 </h4>
                </div>
            </footer>
        </body>
        </html>`;

    fs.appendFile('./dist/team.html', htmlEnd, (err) =>
        err ? console.log(err) : null
    );


}


// function saveFile(personnelData, fileName) {
//     const fileData = JSON.stringify(personnelData);
//     fileName = (`./src/${fileName}.JSON`);
//     fs.writeFile(fileName, fileData, (err) =>
//         err ? console.log(err) : null);

// };


async function main() {

    writeHTMLFile();  // Prepare the HTML file, this overwrites the previous file.

    let personnelData = await inquirer.prompt(managerPrompts);
    let person = new Manager(personnelData.name, personnelData.ID, personnelData.email, personnelData.unique);

    let name = person.getName();
    let id = person.getId();
    let email = person.getEmail();
    let unique = person.getNumber();
    let role = person.getRole();
    let uniqueLabel = 'Phone';

    appendDetails(name, id, email, uniqueLabel, unique, role);

    let answer = false;

    do {
        const mainMenuChoice = await inquirer.prompt(menuPrompts);

        if (mainMenuChoice.menuSelection == 'Add an Engineer') {

            let personnelData = await inquirer.prompt(engineerPrompts);

            const person = new Engineer(personnelData.name, personnelData.ID, personnelData.email, personnelData.unique);

            let name = person.getName();
            let id = person.getId();
            let email = person.getEmail();
            let unique = person.getGithub();
            unique = `<a href="https://github.com/${unique}" target="_blank">${unique}</a>`;
            let role = person.getRole();
            let uniqueLabel = 'Github';

            appendDetails(name, id, email, uniqueLabel, unique, role);

        }

        else if (mainMenuChoice.menuSelection == 'Add an Intern') {

            //Prompts for intern details
            let personnelData = await inquirer.prompt(internPrompts);

            //Creates person based on intern details
            const person = new Intern(personnelData.name, personnelData.ID, personnelData.email, personnelData.unique);

            //Retrieve information for the person
            let name = person.getName();
            let id = person.getId();
            let email = person.getEmail();
            let unique = person.getSchool();
            let role = person.getRole();
            let uniqueLabel = 'School';

            //Append the details to file
            appendDetails(name, id, email, uniqueLabel, unique, role);
        }
        else {
            answer = true;
        }

    } while (answer === false);

    appendEnd();
}

main();











