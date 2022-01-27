const Manager = require('../lib/Manager')

test('verify manager object creation', () => {
    const manager = new Manager('Dave', 'dave@gmail.com', 1)
    expect(manager.name).toEqual(expect.any(String))
    expect(manager.name).toBe('Dave')
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.office).toEqual(expect.any(Number))
    expect(manager.office).toBe(1)
})