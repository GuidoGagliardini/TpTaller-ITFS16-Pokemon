
window.onload = function(){
    const jsonPokemons =[
        {id: "1",
        nombre:"dunsparce",
        imagen:'./imagenes/poke1.png',
        origen: "Esta basado en un tsuchinoko, que es un animal que se parece vagamente a una víbora. También guarda semejanza con un gecko leopardo por sus hábitos y la forma de su cuerpo, aunque es ápodo.",
        precio:Math.random()*100,
        especie : "Serptierra",
        habilidadOculta :"Cobardia",
        peso: "1,4 KG",
        altura : "1,50 mts"}
        
    
    ];
    let panelComentarios =[];
   
    const DOMitems = document.querySelector('#items');
    const DOMvaolraciones = document.querySelector('#valoraciones');
    
    const url    = "./../json/pokemones.json"

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = "json";
    request.send();
    console.log(request);
    function mostrarPokemones () {
        jsonPokemons.forEach((infoPoke)=>{
            const cardPokemon = document.createElement('div');
            cardPokemon.classList.add('card', 'col-sm-4');
            
            const cardBodyPokemon =  document.createElement('div');
            cardBodyPokemon.classList.add('card-body');
            
            
            const cardPokemonTitle = document.createElement('div');
            cardPokemonTitle.classList.add('display-4');
            cardPokemonTitle.textContent= infoPoke.nombre;

            const cardPokemonImg = document.createElement('img');
            cardPokemonImg.classList.add('img-fluid');
            cardPokemonImg.setAttribute('src', infoPoke.imagen);

            const cardPokemonPrecio = document.createElement('p');
            cardPokemonPrecio.classList.add('card-text');
            cardPokemonPrecio.textContent = "💲"+infoPoke.precio;
            
            

            const cardPokemonButton = document.createElement('p');
            cardPokemonButton.classList.add('btn');
            cardPokemonButton.classList.add('btn-success');
            cardPokemonButton.classList.add('btn-lg');
            cardPokemonButton.classList.add('d-flex');
            cardPokemonButton.addEventListener('click', verComentarios);
            cardPokemonButton.textContent = "Caracteristicas 👉";
            
           


            cardBodyPokemon.appendChild(cardPokemonImg);
            cardBodyPokemon.appendChild(cardPokemonTitle);
            cardBodyPokemon.appendChild(cardPokemonPrecio);
            cardBodyPokemon.appendChild(cardPokemonButton);
         
            cardPokemon.appendChild(cardBodyPokemon)
            DOMitems.appendChild(cardPokemon);
    
        })
    }

    function verComentarios(e){
        if (e){
            
           jsonPokemons.forEach((infoPoke)=>{
            const id = infoPoke.id;
            console.log(id);
          
            const comentariosElement = document.createElement('div');
            comentariosElement.classList.add('list-group-item', 'text-right', 'mx');
            
            const comentarioTitle1 = document.createElement('h2');
            comentarioTitle1.textContent = "Generalidades";
            const comentarioCuerpo1 = document.createElement('p');
            comentarioCuerpo1.textContent = `${infoPoke.origen}`;

            const comentarioTitle2 = document.createElement('h2');
            comentarioTitle2.textContent = "Especie";
            const comentarioCuerpo2 = document.createElement('p');
            comentarioCuerpo2.textContent = `${infoPoke.especie}`;

            const comentarioTitle3 = document.createElement('h2');
            comentarioTitle3.textContent = "Peso";
            const comentarioCuerpo3 = document.createElement('p');
            comentarioCuerpo3.textContent = `${infoPoke.peso}`;

            const comentarioTitle4 = document.createElement('h2');
            comentarioTitle4.textContent = "Altura";
            const comentarioCuerpo4 = document.createElement('p');
            comentarioCuerpo4.textContent = `${infoPoke.altura}`;


            const tituloIntermedio = document.createElement('h2');
            tituloIntermedio.textContent= "Ingrese sus datos👇";


            const textAreaComentarios = document.createElement('textarea');
            const comentarioBoton = document.createElement('button');
            textAreaComentarios.setAttribute('placeholder', "Comentarios")
           
            const formCreate =  document.createElement('form');
            const inputCreate = document.createElement('input');
            inputCreate.setAttribute('placeholder', "ejemplo@1234.com")
            
            
            const valoracionesAnimacion = document.createElement('div');
            const botonValoraciones = document.createElement('button');
            const iconoValoracion = document.createElement('i');
            iconoValoracion.classList.add('fas-fa-star');
            
           
            comentarioBoton.classList.add('btn');
            comentarioBoton.classList.add('btn-block');
            comentarioBoton.textContent  = "Enviar 📩"
            comentarioBoton.addEventListener('click', agregoComentario);
            textAreaComentarios.textContent = "";

            const valoracionPoke = document.createElement('p');
            valoracionPoke.textContent = "⭐⭐⭐⭐⭐";
            valoracionesAnimacion.appendChild(valoracionPoke);
            
            panelComentarios.push(infoPoke);
            console.log(panelComentarios);
            comentariosElement.appendChild(comentarioTitle1);
            comentariosElement.appendChild(comentarioCuerpo1);
            comentariosElement.appendChild(comentarioTitle2);
            comentariosElement.appendChild(comentarioCuerpo2);
            comentariosElement.appendChild(comentarioTitle3);
            comentariosElement.appendChild(comentarioCuerpo3);
            comentariosElement.appendChild(comentarioTitle4);
            comentariosElement.appendChild(comentarioCuerpo4);
            comentariosElement.appendChild(tituloIntermedio);
            comentariosElement.appendChild(textAreaComentarios);
            comentariosElement.appendChild(formCreate);
            comentariosElement.appendChild(valoracionesAnimacion);
            valoracionesAnimacion.appendChild(botonValoraciones);
            botonValoraciones.appendChild(iconoValoracion);
            formCreate.appendChild(inputCreate);
            comentariosElement.appendChild(comentarioBoton);
            

            DOMvaolraciones.appendChild(comentariosElement);


    
        })
          

        }else {
            console.log("no clickeamos")
        }

    }
    function agregoComentario(e){
        if (e){
            alert("Comentario Enviado!");
            //me gustaria reiniciar el textArea.
            verComentarios();
        }
    }
    mostrarPokemones();
    

}

