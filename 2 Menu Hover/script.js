const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
const lists = document.querySelectorAll(".list");


menuToggle.onclick = function(){
    navigation.classList.toggle('open');
}

function activarLink(){
    lists.forEach( (list) =>
    list.classList.remove("active")
    )
    this.classList.add("active")
}
lists.forEach((list)=>
    list.addEventListener("click",activarLink)
)   
