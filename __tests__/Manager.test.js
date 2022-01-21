const Manager = require('../lib/Manager')

Test('Manager object creation', () => {
    const manager = new Manager('Dave', 'dave@gmail.com', 1);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.office).toEqual(expect.any(Number));
})