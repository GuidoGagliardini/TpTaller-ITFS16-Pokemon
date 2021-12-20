
const url = 'pokemones.json';
const request = new XMLHttpRequest();
request.open('GET', url); 
request.responseType = 'json'; 
request.send();
var pokemones = '';
const ordenPokemon = [];




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
         
        pokemones.pokemones.forEach(poke =>{
            if(tipoResult===poke.tipo){
                
                    let cardsElements =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${poke.id}">`;
                    cardsElements += `<h3>Tipo ${poke.tipo}</h3>`
                    cardsElements += `<img src=${poke.imagen} >`;
                    cardsElements += `<div class="card-body">`;
                    cardsElements += `<h5 class ="card-title"> ${poke.pokemon} </h5>`;
                    cardsElements += `<p class="card-tex">${poke.descripcion} </p>`; 
                    cardsElements += `<a href="detalleproducto.html?${poke.id}" class="btn btn-primary">Ver mas</a>`;
                    
                    cardsElements += `</div></div>`;
                    $('#tipoPokesCards').html(cardsElements);
                    $('#tipoPokesCards').append(cardsElements);
                    // $('#tipoPokesCards').append(cardsElements);
                     $('#pokeCards').remove();

                
            }if(tipoResult==="TODOS"){
                document.location.href = "probando2.html";
            }
        })

    }
    tipo.forEach(boton=>{
        boton.addEventListener('click',verTipo);
    });
   
    
};
function setPokemones(){
    //Chequeo Pokemones
    console.log("SETPOKEMONES",pokemones.pokemones);
    

    pokemones.pokemones.forEach(poke => {
       
                let cardsElements =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${poke.id}">`;
                cardsElements += `<img src=${poke.imagen} >`;
                cardsElements += `<div class="card-body">`;
                cardsElements += `<h5 class ="card-title"> ${poke.pokemon} </h5>`;
                cardsElements += `<p class="card-tex">${poke.descripcion} </p>`; 
                cardsElements += `<a href="detalleproducto.html?${poke.id}" class="btn btn-primary">Ver mas</a>`;
                cardsElements += `</div></div>`;
               
                $('#pokeCards').append(cardsElements);
                  
            }
    )};

function ordenAz  (e){
    
    $('#pokeCards').html('');
   pokemones.pokemones.forEach(poke=>{
       ordenPokemon.push(poke);
      
        ordenPokemon.sort(function(a,b){
            if(a.pokemon > b.pokemon){
                return 1;
            }if(a.pokemon<b.pokemon){
                return -1;
            }
             return 0;//equivale a 0 
        });

       
   });
   ordenPokemon.forEach(poke2=>{
    
    let cardsElements3 =  `<div class="col"><div class="card mb-2" style="width: 18rem;" id="card ${poke2.id}">`;
    cardsElements3 += `<img src=${poke2.imagen} >`;
    cardsElements3 += `<div class="card-body">`;
    cardsElements3 += `<h5 class ="card-title"> ${poke2.pokemon} </h5>`;
    cardsElements3 += `<p class="card-tex">${poke2.descripcion} </p>`; 
    cardsElements3 += `<a href="detalleproducto.html?${poke2.id}" class="btn btn-primary">Ver mas</a>`;
    cardsElements3 += `</div></div>`;
    $('#pokeCards').append(cardsElements3);
    

   })
  
}