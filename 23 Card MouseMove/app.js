const cardsContainer = document.querySelector('.cards');
const cardContainerInner = document.querySelector('.cards__inner');
const cards = Array.from(document.querySelectorAll('.card'));
const overlay = document.querySelector('.overlay');

const applyOverlayMask = (e) =>{
    const overlayEl = e.currentTarget;
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;
    overlayEl.style = `--opacity:1; --x:${x}px; --y:${y}px;`; 
    
}

const initOverLayCard = ()=>{
    const overLayCard = document.createElement('div');
    overLayCard.classList.add("card");
    overlay.append(overLayCard);

}
cards.forEach(initOverLayCard)
document.body.addEventListener('pointermove', applyOverlayMask);