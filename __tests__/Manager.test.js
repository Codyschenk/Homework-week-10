// get manager
const Manager = require("../obj/Manager");

// create manager object
test("create manager object", () => {
    const manager = new Manager("Harshit", 001, "harshit@test.com", 5);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});
// get role
test("get employee role", () => {
    const manager = new Manager("Harshit", 001, "harshit@test.com", 5);

    expect(manager.getRole()).toEqual("Manager");
});