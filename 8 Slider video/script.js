
function ToggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("active");

  const navBar = document.getElementById("nav-bar");
  navBar.classList.toggle("active");
}

const sliderShow = document.getElementById("slider-show");
const slides = sliderShow.getElementsByTagName("video");
const sliderShowText = document.getElementById("slider-show-text");
const sliderText = sliderShowText.getElementsByTagName("div");

let index = 0;

function nextSlider() {
  slides[index].classList.remove("active");
  sliderText[index].classList.remove("active");
  // index++;
  // if(index < slides.length){
  //     slides[index].classList.add('active');
  //     console.log(index);    }
  // else {
  //     index = 0;
  //     slides[index].classList.add('active');
  // }
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
  sliderText[index].classList.add("active");
}

function prevSlider() {
  slides[index].classList.remove("active");
  sliderText[index].classList.remove("active");

  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
  sliderText[index].classList.add("active");
}
