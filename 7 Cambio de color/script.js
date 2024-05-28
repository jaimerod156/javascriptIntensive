
function Togglemenu(){
    const menuToggle = document.querySelector(".menuToggle");
    menuToggle.classList.toggle("active");
    const navegation = document.querySelector(".navigation");
    navegation.classList.toggle("active");

}


function imgSlider(parametro){
    document.getElementById('slider').src = parametro;
       
   }