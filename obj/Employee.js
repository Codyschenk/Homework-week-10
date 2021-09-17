class Employee {
    constructor(name, id, email) {
            this.name = name;
            this.id = id;
            this.email = email;
        }
        //get name
    getName() {
        return this.name;
    }

    // get id
    getId() {
        return this.id;
    }

    // get email
    getEmail() {
        return this.email;
    }

    // get type
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;