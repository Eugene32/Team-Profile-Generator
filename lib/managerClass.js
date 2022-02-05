const Employee = require('./employeeClass');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;

    }

    getRole() {
        return this.Manager;
    }


}