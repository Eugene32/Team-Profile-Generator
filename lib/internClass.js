const Employee = require('./employeeClass');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        return this.Intern;
    }

}