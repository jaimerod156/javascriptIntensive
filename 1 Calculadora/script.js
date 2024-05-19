const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button")
display.innerText = "0";

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
})