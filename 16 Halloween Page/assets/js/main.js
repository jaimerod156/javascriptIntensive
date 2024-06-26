const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
        console.log('menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
        
    })
}
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((link) =>{
    link.addEventListener('click',linkAction)
})

// SWIPER
 let homeSwiper = new Swiper('.home-swiper',{
      spaceBetween:30,
      loop:'true',
      pagination: {
        el: '.swiper-pagination',
        clickable:true
      },

});

let newSwiper = new Swiper('.new-swiper',{
    centerSlides:true,
    slidesPerView: "auto",
    loop: "true",
    spaceBetween: 16,
})

// SCROLL UP
function scrollUp() {
    const scrollup = document.getElementById("scroll-up");
    if (this.scrollY >= 460) scrollup.classList.add("show-scroll");
    else scrollup.classList.remove("show-scroll");
  }
window.addEventListener("scroll", scrollUp);

// Section ACTIVE
const sections = document.querySelectorAll('section[id]');
let scrollActive = () =>{
    const scrollY = window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll",scrollActive);

// Scroll reveal
const sr =ScrollReveal({
    origin:"top",
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
}) 
sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`,{interval:200})
sr.reveal(`.about__data, .discount__img`,{origin:"left"})
