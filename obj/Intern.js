const Employee = require("./Employee");

// extends employee to intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        // get employee variables
        super(name, id, email);
        this.school = school;
    }

    // get school
    getSchool() {
        return this.school;
    }

    // get role
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;