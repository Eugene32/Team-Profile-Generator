const Employee = require('./employeeClass');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        return this.Engineer;
    }

}