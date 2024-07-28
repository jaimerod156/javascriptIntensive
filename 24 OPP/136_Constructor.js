const actriz1 = {
    nombre: "Scarlett 1",
    gustos: "codigo369",
    medidas: "90-60-90",
    Actuar(){
         return `${this.nombre} ${this.medidas}`
    },
};

//Constructor
function ActrizConstructor(){
    this.nombre = '';
    this.gustos = '';
    this.medidas = '';
    this.actuar = ()=>{
        return `${this.nombre} ${this.medidas}`;
    }
}
const actriz2 = new ActrizConstructor();
actriz2.nombre = 'Megan Fox';
actriz2.gustos = 'Modelaje';
actriz2.medidas = '90 69 90';
console.log(actriz2.actuar());

const actriz3 = new ActrizConstructor();
actriz3.nombre = 'Salma';
actriz3.gustos = 'Direccion';
actriz3.medidas = '90 69 90';
console.log(actriz3.actuar());


