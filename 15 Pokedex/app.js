document.addEventListener("DOMContentLoaded",()=>{
    let geners = ["generation-1",
        "generation-2",
        "generation-3",
        "generation-4",
        "generation-5",
        "generation-6",
        "generation-7"
    ];
    let filters = document.getElementById('filters');
    let gen = '';
    let value = 1;
    for(let gener of geners){
        gen+=`
        <input class="radio-gen" type="radio" id=${gener} value=${value} name="generation" checked>
        <label for=${gener} class="label-generation">${gener}</label>
        `
        value++;
        
    }
    filters.innerHTML = gen;
})