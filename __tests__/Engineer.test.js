const Engineer = require('../lib/Engineer')

test('verify engineer object creation', () => {
    const engineer = new Engineer('Dave', 1, 'dave@gmail.com', 'davesgit')
    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.name).toBe('Dave')
    expect(engineer.id).toBe(1)
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.email).toBe('dave@gmail.com');
    expect(engineer.git).toEqual(expect.any(String))
    expect(engineer.git).toBe('davesgit')

    expect(engineer.getName()).toBe('Dave');
    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getEmail()).toBe('dave@gmail.com');
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getId()).toBe(1)
    expect(engineer.getId()).toEqual(expect.any(Number))
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getEmail()).toEqual(expect.any(String));

})