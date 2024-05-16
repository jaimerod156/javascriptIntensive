//declaracion
const txt1 = document.getElementById("n1");
console.log(txt1.value);
const txt2 = document.getElementById("n2");
const btn = document.getElementById("calcular");
const resp = document.getElementById("resp");

function calcular(){
    const num1 = parseFloat(txt1.value);
    const num2 = parseFloat(txt2.value);
    let resultado = num1 + num2;
    resp.innerText = resultado;
    resp.style = "color:red";
};

btn.addEventListener("click",calcular);