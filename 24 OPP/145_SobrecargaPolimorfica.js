class Animal{
    emitirSonido(){
        return console.log("Grrrr......");
    }
}

class Gato extends Animal{
    emitirSonido(){
        return console.log('Meaw');
    }
}

class Perro extends Animal{
    emitirSonido(){
        return console.log('Weof');
    }
}

const perro = new Perro()
perro.emitirSonido();