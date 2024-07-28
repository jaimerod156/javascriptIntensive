console.log(typeof 'Hola mundo');
console.log(typeof false);
console.log(typeof new String("Hola Mundo"))
console.log(typeof [])
console.log(typeof {})

function Actuar(){
    return 'Actuando';
}

const actriz = {
    nombre: "Scarlett",
    gustos: "codigo369",
    medidas: "90-60-90",
    sueldo:100,
    Actuar(){
         this.sueldo += 50;
    },
};
actriz.Actuar()
actriz.Actuar()
console.log(actriz)
console.log(actriz.nombre);
console.log(actriz.gustos);
console.log(actriz.sueldo);

