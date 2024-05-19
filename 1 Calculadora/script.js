const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button")

buttons.forEach((button) =>{
    button.onclick = ()=>{
        if(button.id=='clear'){
            display.innerText = '';
        }else if(button.id=="backspace"){
            let string = display.innerText;
            display.innerText  = string.substring(0,string.length-1);
        }else if(display.innerText != "" && button.id=="equal"){
            // let cadena = 2+2
            display.innerText= eval(display.innerText)
        }else if(display.innerText=="" && button.id=="equal"){
            display.innerText="Null";
            setTimeout(()=>{
                display.innerText="";
            },2000)
        }else{
            display.innerText+=button.id
        }
    }
});

const themeTogglerBtn= document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeTogglerBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeTogglerBtn.classList.toggle("active");
    isDark=!isDark;
}