const Employee = require("./Employee");

// extends employee to manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
            // get employee variables
            super(name, id, email);
            this.officeNumber = officeNumber;
        }
        // retur office number
    getName() {
        return this.officeNumber;
    }

    // get role
    getRole() {
        return "Manager";
    }
}

// to be exported
module.exports = Manager;