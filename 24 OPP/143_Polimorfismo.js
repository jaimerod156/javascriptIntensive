class Persona{
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }
    obtenerDatos(){
        return `Nombre: ${this.name} ${this.lastname}`
    }
}

class Empleado extends Persona{
    constructor(name, lastname, sueldo){
        super(name, lastname);
        this.sueldo = sueldo
    }
    obtenerDatos(){
        return `${super.obtenerDatos()}, Sueldo: ${this.sueldo} `
    }
}

class Ejecutivo extends Empleado{
    constructor(name, lastname, sueldo, departamento){
        super(name, lastname, sueldo);
        this.departamento = departamento;
    }
    obtenerDatos(){
        return `${super.obtenerDatos()}, Departamento: ${this.departamento}`
    }
}

persona1 = new Persona('Jaime', 'Rodriguez')
console.log(persona1.obtenerDatos());

empleado1 = new Empleado('Karla','Gomez',1200)
console.log(empleado1.obtenerDatos());

ejecutivo1 = new Ejecutivo('Carlos','Perez',5000, 'Marketing');
console.log(ejecutivo1.obtenerDatos());