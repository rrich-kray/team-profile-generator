const Employee = require('../lib/Employee')

test('Employee object creation', () => {
    const employee = new Employee('Dave', 'dave@gmail.com', 1);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})