class Usuario{
    constructor(iduser, nombre, apellido, edad){
        this._iduser = iduser;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad
    }
    get idusuario(){
        return this._iduser;
    }
    set idusuario(idusuario){
        this._iduser = idusuario
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._ap = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    mostrarDatos(){
        return `idUser: ${this._iduser}, Nombre: ${this._nombre} ${this._apellido}, Edad: ${this._edad}`;
    }
    mostrarPoli(){
        return this.mostrarDatos();
    }
}
class Cliente extends Usuario{
    constructor(idusuario, nombre, apellido, edad,idcliente, saldo){
        super(idusuario,nombre, apellido, edad);
        this._saldo = saldo;
        this._idcliente = idcliente;

    }
    get saldo(){
        return this._saldo;
    }
    set saldo(saldo){
        this._saldo = saldo
    }
    get idcliente(){
        return this._idcliente;
    }
    set idcliente(idcliente){
        this._idcliente = idcliente;
    }
    mostrarDatos(){
        return `${super.mostrarDatos()}, IdCliente: ${this._idcliente}, Saldo: ${this._saldo}`;
    }

}

class Proveedor extends Usuario{
    constructor(idusuario, nombre, apellido, edad,idprov, idfiscal){
        super(idusuario,nombre, apellido, edad);
        this._idprov = idprov;
        this._idfiscal = idfiscal;

    }

    get idprov(){
        return this._idprov;
    }
    set idprov(idprov){
        this._idprov =idprov;
    }
    get idfiscal(){
        return this._idfiscal;
    }
    set idfiscal(idfiscal){
        this._idfiscal =idfiscal;
    }
    mostrarDatos(){
        return `${super.mostrarDatos()}, idProveedor: ${this._idprov}, idFiscal: ${this._idfiscal}`;
    }
}

const proveedor = new Proveedor(1,'Frank', 'Alejandria',34,2,4543)
console.log(proveedor.mostrarPoli());

const cliente = new Cliente(2,'Carlos','Perez',23,1,150);
console.log(cliente.mostrarPoli());