const toggleBtn = document.querySelector(".toggleBtn");
const container = document.querySelector(".container");


toggleBtn.onclick = function(){
    container.classList.toggle('active');
}