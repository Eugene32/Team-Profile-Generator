const Intern = require ('../lib/internClass');

const person = new Intern('Joyce', 2, 'joysee@gmail.com', 'USC-TC');

test('Expect person to be equal to new Employee', () => {
    expect(person.getEmail()).toEqual('joysee@gmail.com');
    expect(person.getName()).toBe('Joyce');
    expect(person.getId()).toEqual(2);
    expect(person.getSchool()).toEqual('USC-TC');
    expect(person.getRole()).toEqual('Intern');
});