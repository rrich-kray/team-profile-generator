const Intern = require('../lib/Intern')

test('verify intern object creation', () => {
    const intern = new Intern('Dave', 'dave@gmail.com', 'school')
    expect(intern.name).toEqual(expect.any(String))
    expect(intern.name).toBe('Dave')
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.email).toBe('dave@gmail.com');
    expect(intern.school).toEqual(expect.any(String))
    expect(intern.school).toBe('school')
})