const cards = document.querySelector('.cards');
const images = document.querySelectorAll('.card__img');
const cardBgs = document.querySelectorAll('.card__bg');
const range = 40;

//Funcion para calcular el valor de la posicion del mouse en relacion a la ventana actual
const calcValue = (a,b) => (a/b*range - range/2).toFixed(1);

let timeout;
document.addEventListener('mousemove', ({x,y}) =>{
    // console.log(x,y);
    if(timeout){
        window.cancelAnimationFrame(timeout);
    }
    timeout = window.requestAnimationFrame(() =>{
        const yValue = calcValue(y,window.innerHeight);
        const xValue = calcValue(x,window.innerWidth);
        cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;    
        
        [].forEach.call(images, (item) =>{
            item.style.transform = `translateX(${-xValue}px) translateY(${-yValue}px)`
        });

        [].forEach.call(cardBgs, (item) =>{
            item.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`
        })
    })
},false)

