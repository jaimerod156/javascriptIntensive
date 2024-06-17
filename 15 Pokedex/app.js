document.addEventListener("DOMContentLoaded",function(){

    const fetchPokemons = async (endpoint)=>{
        let data;
        try{
            const response = await fetch(endpoint,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            data = await response.json();
        }catch(error){
            alert(error);
        }
        return data.pokemon_species;
    }

    const ordernumber = (str) =>{
        let mySubstring = str.substring(str.lastIndexOf("s/") +2,str.lastIndexOf("/"));
        return mySubstring;
    }

    // const cadena = "https://pokeapi.co/api/v2/pokemon-species/32/";
    // console.log(cadena.substring(cadena.lastIndexOf("s/") +2,cadena.lastIndexOf("/")));
    

    const getPokemons = async (numero)=>{
        let endpoint = `https://pokeapi.co/api/v2/generation/${numero}/`;
        let container = document.getElementById("container");
        container.innerHTML = "";
        let pokemons = [];
        pokemons = await fetchPokemons(endpoint);
        pokemons.forEach( (element) => {
            
        });
        console.log(pokemons)

    }
    getPokemons(1);
    

    var geners = [
        "generation-1",
        "generation-2",
        "generation-3",
        "generation-4",
        "generation-5",
        "generation-6",
        "generation-7",
      ];
    let filters = document.getElementById('filters');
    let gen = "";
    for(let i=0; i < geners.length;i++){
        gen +=`
        <input class="radio-gen" type="radio" id=${geners[i]} value=${i+1} name="generation" checked>
        <label for=${geners[i]} class="label-generation">${geners[i]}</label>
        `
    }
    filters.innerHTML = gen;
})

