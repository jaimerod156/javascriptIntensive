async function obtenerData(){
    // const response = await fetch("https://api.github.com/repos/hadley/ggplot2/commits");
    // const json = await response.text();
    // const json = await response.json();
    // console.log(JSON.parse(json));
    // console.log(json);

    await fetch("http://127.0.0.1:5500/data.json")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error=> console.log('error'))
}

obtenerData();