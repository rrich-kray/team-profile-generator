const Manager = require('../lib/Manager')

test('verify manager object creation', () => {
    const manager = new Manager('Dave', 1, 'dave@gmail.com', 22)
    expect(manager.name).toEqual(expect.any(String))
    expect(manager.name).toBe('Dave')
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.id).toBe(1)
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.office).toEqual(expect.any(Number))
    expect(manager.office).toBe(22)

    expect(manager.getName()).toEqual(expect.any(String))
    expect(manager.getName()).toBe('Dave')
    expect(manager.getId()).toEqual(expect.any(Number))
    expect(manager.getId()).toBe(1)
    expect(manager.getEmail()).toEqual(expect.any(String))
    expect(manager.getEmail()).toBe('dave@gmail.com')
    expect(manager.getOffice()).toEqual(expect.any(Number))
    expect(manager.getOffice()).toBe(22)
})