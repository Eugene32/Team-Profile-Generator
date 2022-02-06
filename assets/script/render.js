
//const app = express();
//app.use(express.static('lib'));

const fileSystem = require('../../package-lock.json');


fileSystem.readFile('../../src/manager.JSON', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
})

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






