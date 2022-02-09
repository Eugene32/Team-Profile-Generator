const Employee = require('../lib/employeeClass');

const person = new Employee('Roy', 2, 'fakemail@gmail.com');

test('Expect person to be equal to new Employee', () => {
    expect(person.getEmail()).toEqual('fakemail@gmail.com');
    expect(person.getName()).toBe('Roy');
    expect(person.getId()).toEqual(2);
    expect(person.getRole()).toEqual('Employee');
});

