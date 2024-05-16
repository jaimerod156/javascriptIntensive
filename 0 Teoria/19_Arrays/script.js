const respuesta = document.getElementById("resp");
const ejecutarBtn = document.getElementById("ejecuta");
let frutas = ["Manzana", "Banana", "fresa","mango"];

function iniciar(){
    // respuesta.innerText = frutas[frutas.length - 1];
    frutas.forEach((item, index, array)=>{
        respuesta.innerText = array;
    })
}
ejecutarBtn.addEventListener("click",iniciar);