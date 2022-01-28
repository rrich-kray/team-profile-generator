const Intern = require('../lib/Intern')

test('verify intern object creation', () => {
    const intern = new Intern('Dave', 1, 'dave@gmail.com', 'school')
    expect(intern.name).toEqual(expect.any(String))
    expect(intern.name).toBe('Dave')
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.id).toBe(1)
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.email).toBe('dave@gmail.com');
    expect(intern.school).toEqual(expect.any(String))
    expect(intern.school).toBe('school')

    expect(intern.getName()).toEqual(expect.any(String))
    expect(intern.getName()).toBe('Dave')
    expect(intern.getId()).toEqual(expect.any(Number))
    expect(intern.getId()).toBe(1)
    expect(intern.getEmail()).toEqual(expect.any(String))
    expect(intern.getEmail()).toBe('dave@gmail.com');
    expect(intern.getSchool()).toEqual(expect.any(String))
    expect(intern.getSchool()).toBe('school')
})