// function Person(name, lastname){
//     this.name = 'Frank';
//     this.lastname = 'Alejandria';

//     this.fullname = ()=>{
//         return `${this.name} ${this.lastname}`
//     }
// }
// const person = new Person();
// console.log(person.fullname());

class Persona{
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }
    fullname(){
        return `${this.name} ${this.lastname}`
    }
}

const persona1 = new Persona('Frank', 'Alejandria');
console.log(persona1);
console.log(persona1.fullname());
