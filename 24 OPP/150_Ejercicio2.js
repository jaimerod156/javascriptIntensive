class Producto{
     static contadorProducto = 0;
     
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio
    }

    mostrarDatos(){
        return `Producto{idProducto: ${this._idProducto}, nombre:${this._nombre}, precio:${this._precio}}`
    }

}

class Orden{
    static contadorOrdenes = 0;
    static get MaxProductos(){
        return 5;
    }
    contadorProd = 0;
    // Productos = [];
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden(){
        return this._idOrden
    }
    set idOrden(idOrden){
        this._idOrden = idOrden
    }
    AgregarProductos(producto){
        if(this.contadorProd < Orden.MaxProductos){
            this._productos.push(producto);
            this.contadorProd++;
        }else{
            alert(`No se puede agregar mas de ${Orden.MaxProductos}`);
        }
    }

    calcularTotal(){
        let total = 0;
        for(let i=0; i< this.contadorProd; i++){
            total += this._productos[i]._precio
        }
        return total;
    }
    mostrarOrden(){
        let listarProductos = '';
        listarProductos += `IdOrden: ${this._idOrden}`;
        listarProductos += `\nTotal Orden:$ ${this.calcularTotal()}`
        listarProductos += `\nListado de Productos:\n`
        for(let i=0; i< this.contadorProd; i++){
            listarProductos += `\t\t${this._productos[i].mostrarDatos()}\n`
        }
        return listarProductos;
    }


}
const prod1 = new Producto('Zapatos',1200);
const prod2 = new Producto('Blusa',500);
const prod3 = new Producto('Pantlones',800);
const orden1 = new Orden();
orden1.AgregarProductos(prod1);
orden1.AgregarProductos(prod2)
orden1.AgregarProductos(prod3)
console.log(orden1.mostrarOrden());