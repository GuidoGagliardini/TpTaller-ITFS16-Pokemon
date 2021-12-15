const requestURL = 'pokemones.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send(); //envían la solicitud
var personajes = '';

console.log(request.response);


request.onload = function() { //esperan la respuesta
    console.log(request.response);
    personajes = request.response; //reciben la respuesta
    console.log(personajes);
    mostrarPokemon(personajes);
}

function mostrarPokemon(pokeJson) {

    console.log("PokeJson: " + pokeJson)
    let pokemones = []
    let i = 0
    pokeJson.pokemones.forEach(element => {
        if (i < 6) {




            let elementGalery = '<div class="col-md-4"><div class="card" style="width: 15rem;" id="card' + element.id + '">';
            elementGalery += '<img src="' + element.imagen + '" class="card-img-top" >';
            elementGalery += '<div class="card-body">';
            elementGalery += '<h5 class="card-title"><b> ' + element.pokemon + ' </b></h5>';
            elementGalery += '<p class="card-text"> ' + element.descripcion + ' </p>';

            elementGalery += '<a href="' + element.id + '" class="btn btn-primary">Ver mas</a>';
            elementGalery += '<div class="btn-group">';


            let gallery = document.getElementById('gallery_view');
            $('#gallery_view').append(elementGalery);
        }
        i++;
        console.log(element);

    });
}