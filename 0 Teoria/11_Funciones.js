// FUNCIONES
var resultado = 'capuchino';
function cafetera(ingrediente1, ingrediente2){
    if(ingrediente1=='leche' && ingrediente2=='cafe'){
        return resultado;
    } 
}

var tasa = cafetera('leche','cafe');
console.log(`tasa con: ${tasa}`)