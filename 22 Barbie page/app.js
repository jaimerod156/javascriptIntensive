const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close'),
navLinks = document.querySelectorAll('.nav__link');

//TOGGLE
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

navLinks.forEach((link) =>{
    link.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
})

// ScrollReveal
const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:400
})

sr.reveal(`.button, .newsletter__container`);
sr.reveal(`.category__data, .footer__container`,{
    interval:100
});
sr.reveal(`.swiper-slide`,{
    origin:"left"
})

// SCROLL UP
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >=60){
        scrollUp.classList.add('show-scroll')
    }  else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll',scrollUp)