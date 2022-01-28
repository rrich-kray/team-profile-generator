const Employee = require('../lib/Employee')

test('verify employee object creation', () => {
    const employee = new Employee('Dave', 2, 'dave@gmail.com')
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.name).toBe('Dave')
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.email).toBe('dave@gmail.com');
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.id).toBe(2)

    expect(employee.getName()).toBe('Dave');
    expect(employee.getName()).toEqual(expect.any(String))
    expect(employee.getId()).toBe(2)
    expect(employee.getId()).toEqual(expect.any(Number))
    expect(employee.getEmail()).toBe('dave@gmail.com')
    expect(employee.getEmail()).toEqual(expect.any(String))
})