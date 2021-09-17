// get engineer
const Engineer = require("../obj/Engineer");

// create engineer
test("create Engineer ", () => {
    const engineer = new Engineer(
        "Harshit",
        001,
        "harshit@test.com",
        "harshit123"
    );

    expect(engineer.github).toEqual(expect.any(String));
});

// get github username
test("get engineer github username", () => {
    const engineer = new Engineer(
        "Harshit",
        001,
        "harshit@test.com",
        "harshit123"
    );

    expect(engineer.getGithub()).toEqual(
        expect.stringContaining(engineer.github.toString())
    );
});

// get role
test("gets role of employee", () => {
    const engineer = new Engineer(
        "Harshit",
        001,
        "harshit@test.com",
        "harshit123"
    );

    expect(engineer.getRole()).toEqual("Engineer");
});