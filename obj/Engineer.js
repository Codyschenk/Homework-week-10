const Employee = require("./Employee");
//extend employee to engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //get employee variables
        super(name, id, email);
        //adding github variable
        this.github = github;
    }

    // get Github
    getGithub() {
        return this.github;
    }

    //get role
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;