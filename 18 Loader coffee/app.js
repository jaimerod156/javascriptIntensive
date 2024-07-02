const ocultarLoader = () =>{
    document.getElementById('loading').remove();
}

setTimeout(() =>{
    ocultarLoader();
},2500)