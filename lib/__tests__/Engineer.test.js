const Engineer = require('../Engineer')

test('verify engineer object creation', () => {
    const engineer = new Engineer('Dave', 'dave@gmail.com', 'davesgit')
    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.name).toBe('Dave')
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.email).toBe('dave@gmail.com');
    expect(engineer.git).toEqual(expect.any(String))
    expect(engineer.git).toBe('davesgit')
})