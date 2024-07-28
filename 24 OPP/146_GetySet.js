class Persona{
    constructor(name, lastname){
        this._name = name;
        this._lastname = lastname;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
}
const persona = new Persona('Frank','Alejandria');
console.log(persona.name);
persona.name= 'Carlos';
console.log(persona.name);