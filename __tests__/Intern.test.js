// get intern
const Intern = require("../obj/Intern");

// create intern object
test("create intern object", () => {
    const intern = new Intern("Harshit", 001, "harshit@test.com", "CSU");

    expect(intern.school).toEqual(expect.any(String));
});

// get school
test("get employee school", () => {
    const intern = new Intern("Harshit", 001, "harshit@test.com", "CSU");

    expect(intern.getSchool()).toEqual(
        expect.stringContaining(intern.school.toString())
    );
});

// get role
test("get employee role", () => {
    const intern = new Intern("Harshit", 001, "harshit@test.com", "CSU");

    expect(intern.getRole()).toEqual("Intern");
});