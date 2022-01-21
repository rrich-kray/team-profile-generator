const Intern = require('../lib/Intern')

test('Intern object creation', () => {
    const intern = new Intern('Dave', 'dave@gmail.com', 'Grand Canyon University');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('internPrompt() returns a valid promise object', () => {
    
})