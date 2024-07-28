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
console.log(typeof Persona);