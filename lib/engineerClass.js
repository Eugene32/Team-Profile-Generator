const Employee = require('./employeeClass');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        return this.Engineer;
    }

}

module.exports = Engineer;