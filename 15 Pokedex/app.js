document.addEventListener("DOMContentLoaded",function(){

    //#region Observador de imagenes task
    const imgOptions = {};
    const imgObserver = new IntersectionObserver((entries, imgObserver)=>{
        entries.forEach((entry) =>{
            if(!entry.isIntersecting) return;
            const img = entry.target;
            let dataImage = img.getAttribute("data-image");
            img.src = dataImage;
            imgObserver.unobserve(img);
        });
    },imgOptions)

    //#endregion
    //#region CONSUMO DE API CON FETCH
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
    //#endregion

    //#region ORDENAR POKEMONES POR NUMERO 
    const ordernumber = (str) =>{
        let mySubstring = str.substring(str.lastIndexOf("s/") + 2,str.lastIndexOf("/"));
        return mySubstring;

    }
    // const cadena = "https://pokeapi.co/api/v2/pokemon-species/32/";
    // console.log(cadena.substring(cadena.lastIndexOf("s/") +2,cadena.lastIndexOf("/")));
    //#endregion

    //#region AGREGAR POKEMONS AL HTML
    const getPokemons = async (numero,toggle)=>{
        let endpoint = `https://pokeapi.co/api/v2/generation/${numero}/`;
        let container = document.getElementById("container");
        container.innerHTML = "";
        let pokemons = [];
        pokemons = await fetchPokemons(endpoint);
        pokemons.forEach( (pokemon) => {
            pokemon.nr = ordernumber(pokemon.url)
        });

        pokemons.sort((a,b) => a.nr - b.nr);

        pokemons.forEach((pokemon) =>{
            let numero3decimales = pokemon.nr;
            if(numero3decimales < 10){
                numero3decimales = '00'+pokemon.nr;
            }
            else if(numero3decimales<100){
                numero3decimales = '0'+ pokemon.nr;
            }

            let divItem = document.createElement('li');
            divItem.classList.add('item');

            let img = new Image();
            const toggleUrl = toggle ? "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"
            : "https://www.serebii.net/pokemongo/pokemon/";
            // const toggleUrl = "https://www.serebii.net/pokemongo/pokemon/";
            img.src =
            "https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif";

            const urlImage = `${toggleUrl}${numero3decimales}.png`;
            img.setAttribute("data-image", urlImage);
            img.setAttribute("class", "pokeimage");
            img.setAttribute("alt", pokemon.name);

            divItem.innerHTML = `
                <div>${pokemon.nr}-${pokemon.name}</div>                
            `;

            divItem.appendChild(img);
            container.appendChild(divItem)
            imgObserver.observe(img)

        })
        

    }
    //#endregion
    
    //#region agregar generaciones
    let numero = 1;
    getPokemons(numero);
    var toggle = false;
    // const btnIcono = document.getElementById('btnicono');
    // btnicono.addEventListener('click', ()=>{
    //     toggle = !toggle;
    //     getPokemons(numero,toggle);
    // })
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
      filters.addEventListener('click', (e)=>{
        let targ = e.target.type;
        if(targ == 'radio'){
            getPokemons(e.target.value,toggle);
            title.innerHTML = 'Pokemon ' + e.target.id
        }

      })
    //#endregion

})

