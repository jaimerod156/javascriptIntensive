const keys = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

function getRandomNumber(min, max){
    min = Math.ceil(min)
    //0.95 -> Math.ceil(0.95)=1
    max = Math.floor(max);
    return Math.floor(Math.random() * (max -min +1)) + min; 
}

function getRandomKey(){
    return keys[getRandomNumber(0,keys.length - 1)]
}

function targetRandomKey(){
    const key = document.getElementById(getRandomKey());
    key.classList.add("selected");
    console.log(key.id);
}


document.addEventListener("keyup",(e)=>{
    const keyPressed = String.fromCharCode(e.keyCode);
    const keyElement = document.getElementById(keyPressed);
    const highlightedkey = document.querySelector(".selected");
    keyElement.classList.add('hit');
    keyElement.addEventListener('animationend', ()=>{
        keyElement.classList.remove("hit");
    })
    if(keyPressed===highlightedkey.innerHTML){
        highlightedkey.classList.remove("selected");
        targetRandomKey();
    }
})


targetRandomKey();