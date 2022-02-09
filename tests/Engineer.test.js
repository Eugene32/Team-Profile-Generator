const Engineer = require ('../lib/engineerClass');

const person = new Engineer('Roy', 2, 'fakemail@gmail.com', 'carlos');

test('Expect person to be equal to new Employee', () => {
    expect(person.getEmail()).toEqual('fakemail@gmail.com');
    expect(person.getName()).toBe('Roy');
    expect(person.getId()).toEqual(2);
    expect(person.getGithub()).toEqual('carlos');
    expect(person.getRole()).toEqual('Engineer');
});