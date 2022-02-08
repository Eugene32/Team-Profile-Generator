const Employee = require('../lib/employeeClass');


describe('Employee', () => {

    const person = new Employee('Roy', 2, 'fakemail@gmail.com');

    it.todo('should return "Roy"'), () => {
        
        const result = person.getName();
        expect(result).toBe('Roy');
    }
    it.todo('should return 2'), () => {
        
        const result = person.getId();
        expect(result).toBe(2);
    }
    it.todo('should return "fakemail@gmail.com"'), () => {
       
        const result = person.getEmail();
        expect(result).toBe('fakemail@gmail.com');
    }
    it.todo('should return "Employee"'), () => {
        const result = person.getRole();
        expect(result).toBe('Employee');
    }
    

});