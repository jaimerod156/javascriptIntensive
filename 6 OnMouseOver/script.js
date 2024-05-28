const liElement = document.querySelectorAll(".thum li img");
const imgTarget = document.querySelector(".imgBox img");

console.log(liElement);

// for(let elem of liElement){
//     elem.onmouseover = function(){
//        imgTarget.src = elem.getAttribute('src');
//     }
// }

function imgURL(item){
 imgTarget.src = item;
    
}