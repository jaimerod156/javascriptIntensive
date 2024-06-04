const eyes = document.querySelector(".eyes");
const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const nose = document.querySelector(".nose");

let coursorPos = {x:0 ,y:0};
let windowWidth = window.innerWidth;
let windowHeight = window.windowHeight;

function definirTamaPantalla(){
    windowWidth = window.innerWidth;
    windowHeight = window.windowHeight;
}

function mouseMove(e){
    coursorPos={x:e.clientX, y:e.clientY}
}

const seguirCursor= (el,xrelaticion, yrelacion)=>{
    const elOffset = el.getBoundingClientRect();
    const centerX = elOffset.x + elOffset.width/2;
}
const seguir = ()=>{
    if(ears)
}