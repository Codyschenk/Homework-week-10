const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Luke', 88, 'skywalker1@gmail.com', 'Death Star Academy');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Luke', 88, 'skywalker1@gmail.com', 'Death Star Academy');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Luke', 88, 'skywalker1@gmail.com', 'Death Star Academy');

    expect(intern.getRole()).toEqual("Intern");
}); 