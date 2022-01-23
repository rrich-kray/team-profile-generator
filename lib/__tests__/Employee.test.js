const Employee = require('../Employee')

test('verify employee object creation', () => {
    const employee = new Employee('Dave', 'dave@gmail.com')
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.name).toBe('Dave')
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.email).toBe('dave@gmail.com');
})