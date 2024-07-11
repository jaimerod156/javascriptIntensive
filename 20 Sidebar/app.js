const headerToggleBtn = document.getElementById('header-toggle');
const navbarEl = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav__link')

// const mostrarMenu = (headerToggle,navbarEl) =>{

// }

headerToggleBtn.addEventListener('click',()=>{
    navbarEl.classList.toggle('show-menu');
    headerToggleBtn.classList.toggle('bx-x');

})

function colorLink(){
    navLinks.forEach(item => 
        item.classList.remove('active'))
        this.classList.add('active')
}
navLinks.forEach((item)=>{
    item.addEventListener('click',colorLink)

})