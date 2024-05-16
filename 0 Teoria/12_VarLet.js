// VAR LET

let resultado ='capuchino'

function cafetera(ingrediente1,ingrediente2){
    if(ingrediente1 =='leche' && ingrediente2=='cafe'){
        let resultado = 'otra cosa';
        // let resultado = 'otra cosa 2';
        return resultado
    }
}

console.log(cafetera('leche','cafe'));