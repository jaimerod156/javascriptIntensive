class User {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Conductor extends User{
    constructor(nombre, edad, licencia){
        super(nombre, edad)
        this.licencia = licencia;
    }
}

const conductor1 = new Conductor('Frank',22, 'A-3445')
console.log(conductor1);