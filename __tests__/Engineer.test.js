const Engineer = require('../lib/Engineer')

test('engineer object creation', () => {
    const engineer = new Engineer('Dave', 'dave@gmail.com', 'davesgit');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})