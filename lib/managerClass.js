const Employee = require('./employeeClass');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
       // const employee = new Employee (name, id, email);
    }

    // getOfficeNumber() {
    //     inquirer.prompt([
    //         {
    //             type: 'input',
    //             name: 'officeNumber',
    //             message: 'Employee ID:  ',
    //         }
    //     ])
    // }

    

    getRole() {
        this.getName();
        this.getId();
        this.getEmail();
        //return this.getRole;
    }



}

module.exports = Manager;