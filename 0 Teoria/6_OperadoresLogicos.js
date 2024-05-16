// Operadores logicos
var num1 = 5;
var num2 = 5;
// o
var respuesta = (num1 >=num2) || ( num1 >6);
console.log(respuesta);

//y
respuesta = (num1 >=num2) && ( num1 >6);
console.log(respuesta);
//y con negacion
respuesta = (num1 >=num2) && !( num1 >6);
console.log(respuesta);