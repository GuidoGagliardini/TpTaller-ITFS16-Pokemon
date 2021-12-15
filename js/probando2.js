
const url = 'pokemones.json';
const request = new XMLHttpRequest();
request.open('GET', url); 
request.responseType = 'json'; 
request.send();
var pokemones = '';
const pokemonesOrdenados = [];//Para ordenar Alfabeticamente



request.onload = function (){
    pokemones = request.response; 
    console.log('POKEMONES ' , pokemones);
    setPokemones();
    tiposPoke();
}


function tiposPoke (){
    var  tipoResult = ''
    let tiposElement = `<form name="tiposPokes">`;
    tiposElement = ` <li><button class="dropdown-item"   >Agua</button></li>`;
    tiposElement += `<li><button class="dropdown-item"   >Fuego</button></li>`;
    tiposElement += `<li><button class="dropdown-item"   >Hielo</button></li>`;
    tiposElement += `<li><button class="dropdown-item"   >Electrico</button></li>`;
    tiposElement += `<li><button class="dropdown-item"   >Roca</button></li>`;
    tiposElement += `<li><button class="dropdown-item"   >Planta</button></li>`;
    tiposElement += `<li><button class="dropdown-item"   >TODOS</button></li>`;
    tiposElement += `</form>`
    $('#tiposPoke').append(tiposElement);
    const tipo = document.querySelectorAll('.dropdown-item');
    const verTipo = function (e){
         tipoResult= this.innerText 
         console.log(tipoResult);
        if(tipoResult==="Agua"){
           let result = pokemones.pokemones.slice(8,10);
            
           let cardsElements = `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[0].id}">`;
            let cardsElements1 =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[1].id}">`;
            cardsElements += `<h2 class ="card-title mb-2"> TIPO 👉${result[0].tipo} </h2>`;
            cardsElements1 += `<h2 class ="card-title mb-2"> TIPO 👉 ${result[1].tipo} </h2>`;
            cardsElements += `<img src=${result[0].imagen} >`;
            cardsElements1 += `<img src=${result[1].imagen} >`;
            cardsElements += `<div class="card-body">`;
            cardsElements1 += `<div class="card-body">`;
            cardsElements += `<h5 class ="card-title"><b>Nombre</b> :: ${result[0].pokemon} </h5>`;
            cardsElements1 += `<h5 class ="card-title"> <b>Nombre</b> : ${result[1].pokemon} </h5>`;
            cardsElements += `<p class="card-tex"> <b>Peso</b> : ${result[0].caracteristicas[0].peso} </p>`; 
            cardsElements1 += `<p class="card-tex"> <b>Peso</b> : ${result[1].caracteristicas[0].peso} </p>`; 
            cardsElements += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements1 += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements += `<p class="card-tex">${result[0].caracteristicas[0].habilidad} </p>`; 
            cardsElements1 += `<p class="card-tex">${result[1].caracteristicas[0].habilidad} </p>`; 
            cardsElements += `</div></div>`;
            cardsElements1 += `</div></div>`;
            $('#pokeCards').remove();
            $('#tipoPokesCards').append(cardsElements);
            $('#tipoPokesCards').append(cardsElements1);
            
          
        }if(tipoResult==="Fuego"){
            let result = pokemones.pokemones.slice(2,4);
             
            let cardsElements = `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[0].id}">`;
            let cardsElements1 =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[1].id}">`;
            cardsElements += `<h2 class ="card-title mb-2"> TIPO 👉${result[0].tipo} </h2>`;
            cardsElements1 += `<h2 class ="card-title mb-2"> TIPO 👉 ${result[1].tipo} </h2>`;
            cardsElements += `<img src=${result[0].imagen} >`;
            cardsElements1 += `<img src=${result[1].imagen} >`;
            cardsElements += `<div class="card-body">`;
            cardsElements1 += `<div class="card-body">`;
            cardsElements += `<h5 class ="card-title"><b>Nombre</b> :: ${result[0].pokemon} </h5>`;
            cardsElements1 += `<h5 class ="card-title"> <b>Nombre</b> : ${result[1].pokemon} </h5>`;
            cardsElements += `<p class="card-tex"> <b>Peso</b> : ${result[0].caracteristicas[0].peso} </p>`; 
            cardsElements1 += `<p class="card-tex"> <b>Peso</b> : ${result[1].caracteristicas[0].peso} </p>`; 
            cardsElements += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements1 += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements += `<p class="card-tex">${result[0].caracteristicas[0].habilidad} </p>`; 
            cardsElements1 += `<p class="card-tex">${result[1].caracteristicas[0].habilidad} </p>`; 
            cardsElements += `</div></div>`;
            cardsElements1 += `</div></div>`;
             $('#pokeCards').remove('');
             $('#tipoPokesCards').append(cardsElements);
             $('#tipoPokesCards').append(cardsElements1);
             
         }if(tipoResult==="Hielo"){
         
            let result = pokemones.pokemones.slice(10,12);
             
            let cardsElements = `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[0].id}">`;
            let cardsElements1 =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[1].id}">`;
            cardsElements += `<h2 class ="card-title mb-2"> TIPO 👉${result[0].tipo} </h2>`;
            cardsElements1 += `<h2 class ="card-title mb-2"> TIPO 👉 ${result[1].tipo} </h2>`;
            cardsElements += `<img src=${result[0].imagen} >`;
            cardsElements1 += `<img src=${result[1].imagen} >`;
            cardsElements += `<div class="card-body">`;
            cardsElements1 += `<div class="card-body">`;
            cardsElements += `<h5 class ="card-title"><b>Nombre</b> :: ${result[0].pokemon} </h5>`;
            cardsElements1 += `<h5 class ="card-title"> <b>Nombre</b> : ${result[1].pokemon} </h5>`;
            cardsElements += `<p class="card-tex"> <b>Peso</b> : ${result[0].caracteristicas[0].peso} </p>`; 
            cardsElements1 += `<p class="card-tex"> <b>Peso</b> : ${result[1].caracteristicas[0].peso} </p>`; 
            cardsElements += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements1 += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements += `<p class="card-tex">${result[0].caracteristicas[0].habilidad} </p>`; 
            cardsElements1 += `<p class="card-tex">${result[1].caracteristicas[0].habilidad} </p>`; 
            cardsElements += `</div></div>`;
            cardsElements1 += `</div></div>`;
             $('#pokeCards').remove('');
             $('#tipoPokesCards').append(cardsElements);
             $('#tipoPokesCards').append(cardsElements1);
             
         }if(tipoResult==="Electrico"){
            let result = pokemones.pokemones.slice(5,7);
             
            let cardsElements = `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[0].id}">`;
            let cardsElements1 =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[1].id}">`;
            cardsElements += `<h2 class ="card-title mb-2"> TIPO 👉${result[0].tipo} </h2>`;
            cardsElements1 += `<h2 class ="card-title mb-2"> TIPO 👉 ${result[1].tipo} </h2>`;
            cardsElements += `<img src=${result[0].imagen} >`;
            cardsElements1 += `<img src=${result[1].imagen} >`;
            cardsElements += `<div class="card-body">`;
            cardsElements1 += `<div class="card-body">`;
            cardsElements += `<h5 class ="card-title"><b>Nombre</b> : ${result[0].pokemon} </h5>`;
            cardsElements1 += `<h5 class ="card-title"> <b>Nombre</b> : ${result[1].pokemon} </h5>`;
            cardsElements += `<p class="card-tex"> <b>Peso</b> : ${result[0].caracteristicas[0].peso} </p>`; 
            cardsElements1 += `<p class="card-tex"> <b>Peso</b> : ${result[1].caracteristicas[0].peso} </p>`; 
            cardsElements += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements1 += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements += `<p class="card-tex">${result[0].caracteristicas[0].habilidad} </p>`; 
            cardsElements1 += `<p class="card-tex">${result[1].caracteristicas[0].habilidad} </p>`; 
            cardsElements += `</div></div>`;
            cardsElements1 += `</div></div>`;
             $('#pokeCards').remove('');
             $('#tipoPokesCards').append(cardsElements);
             $('#tipoPokesCards').append(cardsElements1);
             
         }if(tipoResult==="Roca"){
            let result = pokemones.pokemones.slice(7,9);
             
            let cardsElements = `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[0].id}">`;
            let cardsElements1 =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[1].id}">`;
            cardsElements += `<h2 class ="card-title mb-2"> TIPO 👉${result[0].tipo} </h2>`;
            cardsElements1 += `<h2 class ="card-title mb-2"> TIPO 👉 ${result[1].tipo} </h2>`;
            cardsElements += `<img src=${result[0].imagen} >`;
            cardsElements1 += `<img src=${result[1].imagen} >`;
            cardsElements += `<div class="card-body">`;
            cardsElements1 += `<div class="card-body">`;
            cardsElements += `<h5 class ="card-title"><b>Nombre</b> :: ${result[0].pokemon} </h5>`;
            cardsElements1 += `<h5 class ="card-title"> <b>Nombre</b> : ${result[1].pokemon} </h5>`;
            cardsElements += `<p class="card-tex"> <b>Peso</b> : ${result[0].caracteristicas[0].peso} </p>`; 
            cardsElements1 += `<p class="card-tex"> <b>Peso</b> : ${result[1].caracteristicas[0].peso} </p>`; 
            cardsElements += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements1 += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements += `<p class="card-tex">${result[0].caracteristicas[0].habilidad} </p>`; 
            cardsElements1 += `<p class="card-tex">${result[1].caracteristicas[0].habilidad} </p>`; 
            cardsElements += `</div></div>`;
            cardsElements1 += `</div></div>`;
             $('#pokeCards').remove('');
             $('#tipoPokesCards').append(cardsElements);
             $('#tipoPokesCards').append(cardsElements1);
             
         }if(tipoResult==="Planta"){
            let result = pokemones.pokemones.slice(0,2);
          
            let cardsElements = `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[0].id}">`;
            let cardsElements1 =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${result[1].id}">`;
            cardsElements += `<h2 class ="card-title mb-2"> TIPO 👉${result[0].tipo} </h2>`;
            cardsElements1 += `<h2 class ="card-title mb-2"> TIPO 👉 ${result[1].tipo} </h2>`;
            cardsElements += `<img src=${result[0].imagen} >`;
            cardsElements1 += `<img src=${result[1].imagen} >`;
            cardsElements += `<div class="card-body">`;
            cardsElements1 += `<div class="card-body">`;
            cardsElements += `<h5 class ="card-title"><b>Nombre</b> :: ${result[0].pokemon} </h5>`;
            cardsElements1 += `<h5 class ="card-title"> <b>Nombre</b> : ${result[1].pokemon} </h5>`;
            cardsElements += `<p class="card-tex"> <b>Peso</b> : ${result[0].caracteristicas[0].peso} </p>`; 
            cardsElements1 += `<p class="card-tex"> <b>Peso</b> : ${result[1].caracteristicas[0].peso} </p>`; 
            cardsElements += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements1 += `<h4 class="card-title">Habilidades </h4>`; 
            cardsElements += `<p class="card-tex">${result[0].caracteristicas[0].habilidad} </p>`; 
            cardsElements1 += `<p class="card-tex">${result[1].caracteristicas[0].habilidad} </p>`; 
            cardsElements += `</div></div>`;
            cardsElements1 += `</div></div>`;
           
             $('#pokeCards').remove('');
             $('#tipoPokesCards').append(cardsElements);
             $('#tipoPokesCards').append(cardsElements1);
             
         }if(tipoResult==="TODOS"){
            
            pokemones.pokemones.forEach(poke => {
                       
                        let cardsElements =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${poke.id}">`;
                        cardsElements += `<img src=${poke.imagen} >`;
                        cardsElements += `<div class="card-body">`;
                        cardsElements += `<h5 class ="card-title"> ${poke.pokemon} </h5>`;
                        cardsElements += `<p class="card-tex">${poke.descripcion} </p>`; 
                        cardsElements += `</div></div>`;
                        $('#tipoPokesCards').remove('.row mb-2');
                        $('#tipoPokesCards').append(cardsElements);                          
                    } 
            )};

    }
    tipo.forEach(boton=>{
        boton.addEventListener('click',verTipo);
    });
   
    
};
function setPokemones(){
    //Chequeo Pokemones
    console.log("SETPOKEMONES",pokemones.pokemones);
     //ordenAlfabetico
        pokemonesOrdenados.push(pokemones.pokemones.slice(0,13));
        pokemonesOrdenados.sort();
        console.log("orden",pokemonesOrdenados);
        //Fin OA

    pokemones.pokemones.forEach(poke => {
       
                let cardsElements =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${poke.id}">`;
                cardsElements += `<img src=${poke.imagen} >`;
                cardsElements += `<div class="card-body">`;
                cardsElements += `<h5 class ="card-title"> ${poke.pokemon} </h5>`;
                cardsElements += `<p class="card-tex">${poke.descripcion} </p>`; 
                cardsElements += `</div></div>`;
               
                $('#pokeCards').append(cardsElements);
                  
            }
    )};