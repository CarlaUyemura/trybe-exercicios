import Person from './Person';

const person = new Person('rukia', new Date(Date.parse('11/10/1991')));

person.birthDate = new Date(Date.parse('12/11/2023'));

console.log(person);
