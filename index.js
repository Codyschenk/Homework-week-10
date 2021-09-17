// create page
const generatePAGE = require("./src/generatePAGE");

// manage profiles
const Manager = require("./obj/Manager");
const Engineer = require("./obj/Engineer");
const Intern = require("./obj/Intern");
//------------------------------------
const fs = require("fs");
const inquirer = require("inquirer");
const workers = [];

const addManager = () => {
    return inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "Please enter Team managers name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the managers ID.",
                validate: (nameInput) => {
                    if (isNaN(nameInput)) {
                        console.log("Please enter the managers ID!");
                        return false;
                    } else {
                        return true;
                    }
                },
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Please enter the managers office number",
                validate: (nameInput) => {
                    if (isNaN(nameInput)) {
                        console.log("Please enter an office number!");
                        return false;
                    } else {
                        return true;
                    }
                },
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the managers email.",
                validate: (email) => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email!");
                        return false;
                    }
                },
            },
        ])
        .then((managerInput) => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            workers.push(manager);
            console.log(manager);
        });
};

const addEmployee = () => {
    console.log(`
    ||||||||||||||||||||||||||||
        Set up the employees
    ||||||||||||||||||||||||||||
    `);

    return inquirer
        .prompt([{
                type: "list",
                name: "role",
                message: "Please choose your employees role",
                choices: ["Engineer", "Intern"],
            },
            {
                type: "input",
                name: "name",
                message: "Please enter employees name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter an employees name!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "id",
                message: "Please enter employees ID.",
                validate: (nameInput) => {
                    if (isNaN(nameInput)) {
                        console.log("Please enter the employee's ID!");
                        return false;
                    } else {
                        return true;
                    }
                },
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the employees email.",
                validate: (email) => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter a valid email!");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "github",
                message: "Please enter the employees github username.",
                when: (input) => input.role === "Engineer",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employees github username!");
                    }
                },
            },
            {
                type: "input",
                name: "school",
                message: "Please enter the interns school",
                when: (input) => input.role === "Intern",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the interns school!");
                    }
                },
            },
            {
                type: "confirm",
                name: "confirmAddWorker",
                message: "Would you like to add another worker?",
                default: false,
            },
        ])
        .then((employeeData) => {
            let { name, id, email, role, github, school, confirmAddWorker } =
            employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);
            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }

            workers.push(employee);

            if (confirmAddWorker) {
                return addEmployee(workers);
            } else {
                return workers;
            }
        });
};

// generate HTML file
const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(
                "Your team profile has been successfully created! Please check out the index.html"
            );
        }
    });
};
//handle all the program logic
addManager()
    .then(addEmployee)
    .then((workers) => {
        return generatePAGE(workers);
    })
    .then((pageHTML) => {
        return writeFile(pageHTML);
    })
    .catch((err) => {
        console.log(err);
    });