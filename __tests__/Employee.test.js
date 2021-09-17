// get employee
const Employee = require("../obj/Employee");

// create employee obj
test("create employee object", () => {
    const employee = new Employee("Harshit", 001, "harshit@test.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// get name
test("get employee name", () => {
    const employee = new Employee("Harshit", 001, "harshit@test.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

// get id
test("get employee ID", () => {
    const employee = new Employee("Harshit", 001, "harshit@test.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

// get email
test("get employee email", () => {
    const employee = new Employee("Harshit", 001, "harshit@test.com");

    expect(employee.getEmail()).toEqual(
        expect.stringContaining(employee.email.toString())
    );
});

// get role
test("get role of employee", () => {
    const employee = new Employee("Harshit", 001, "harshit@test.com");

    expect(employee.getRole()).toEqual("Employee");
});