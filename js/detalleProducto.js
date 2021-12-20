const url = 'pokemones.json';
const request = new XMLHttpRequest();
request.open('GET', url); 
request.responseType = 'json'; 
request.send();
var jsonPokemons = '';
const valores =window.location.search;
console.log("VALORES",valores);
const idPoke = valores.split('?')[1];

window.onload = function(){
var valoracion = '';
jsonPokemons = request.response;

    let panelComentarios =[];
   
    const DOMitems = document.querySelector('#items');
    const DOMvaolraciones = document.querySelector('#valoraciones');
    const DOMdescripciones = document.querySelector('#descripciones');
    
    function mostrarPokemones () {
        jsonPokemons.pokemones.forEach((infoPoke)=>{
            if (infoPoke.id === idPoke){
                const cardPokemon = document.createElement('div');
                cardPokemon.classList.add('card');
                
                const cardBodyPokemon =  document.createElement('div');
                cardBodyPokemon.classList.add('card-body');
            
                const cardPokemonTitle = document.createElement('div');
                cardPokemonTitle.classList.add('display-4');
                cardPokemonTitle.textContent= infoPoke.pokemon;
    
                const cardPokemonImg = document.createElement('img');
                cardPokemonImg.classList.add('img-fluid');
                cardPokemonImg.setAttribute('src', infoPoke.imagen);
    
                const cardPokemonPrecio = document.createElement('p');
                cardPokemonPrecio.classList.add('card-text');
                cardPokemonPrecio.textContent = "💲"+`${Math.random(100)}`;
    
                const comentarioPokeCard = document.createElement('span');
                comentarioPokeCard.classList.add('card-text');
                comentarioPokeCard.textContent="Para valorar, debe clickear en Caracteristicas👆"
                
                
    
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
                cardBodyPokemon.appendChild(comentarioPokeCard);
             
                cardPokemon.appendChild(cardBodyPokemon)
                DOMitems.appendChild(cardPokemon);
            }

    
        })
    }

    function verComentarios(e){
        if (e){
            
           jsonPokemons.pokemones.forEach((infoPoke)=>{
            if (infoPoke.id === idPoke){
                          
            const comentariosElement = document.createElement('div');
            comentariosElement.classList.add('card');
            
            const valoracionesElement = document.createElement('div');
            valoracionesElement.classList.add('card');


            const comentarioTitle1 = document.createElement('h2');
            comentarioTitle1.textContent = "Generalidades";
            const comentarioCuerpo1 = document.createElement('p');
            comentarioCuerpo1.textContent = `${infoPoke.descripcion}`;

            const comentarioTitle2 = document.createElement('h2');
            comentarioTitle2.textContent = "Especie";
            const comentarioCuerpo2 = document.createElement('p');
            comentarioCuerpo2.textContent = `${infoPoke.tipo}`;

            const comentarioTitle3 = document.createElement('h2');
            comentarioTitle3.textContent = "Peso";
            const comentarioCuerpo3 = document.createElement('p');
            comentarioCuerpo3.textContent = `${infoPoke.caracteristicas[0].peso}`;

            const comentarioTitle4 = document.createElement('h2');
            comentarioTitle4.textContent = "Altura";
            const comentarioCuerpo4 = document.createElement('p');
            comentarioCuerpo4.textContent = `${infoPoke.caracteristicas[0].altura}`;

            const comentarioTitle5 = document.createElement('h2');
            comentarioTitle5.textContent = "Habilidades";
            const comentarioCuerpo5 = document.createElement('p');
            comentarioCuerpo5.textContent=`${infoPoke.caracteristicas[0].habilidad}`

            const comentarioTitle6 = document.createElement('h2');
            comentarioTitle6.textContent = "Debilidades";
            const comentarioCuerpo6 = document.createElement('p');
            comentarioCuerpo6.textContent=`${infoPoke.caracteristicas[0].debilidades}`

            //VALORACIONES

            const tituloIntermedio = document.createElement('h2');
            tituloIntermedio.textContent= "Ingrese sus datos👇";

            const textAreaComentarios = document.createElement('textarea');
            const spanCreate1 =  document.createElement('span');
            textAreaComentarios.classList.add('contenedor');
            spanCreate1.setAttribute('id',"spanValoraciones1");
           
            textAreaComentarios.setAttribute('id',"comentInput");
            textAreaComentarios.classList.add('texto','mb-2');
            textAreaComentarios.setAttribute('placeholder', "Comentarios")
           

            const formCreate =  document.createElement('form');
            const inputCreate = document.createElement('input');
            const spanCreate =  document.createElement('span');
            spanCreate.setAttribute('id',"spanValoraciones");
            inputCreate.setAttribute('id', "mailInput");
            inputCreate.setAttribute('placeholder', "ejemplo@1234.com");
            
            
            
            
            const comentarioBoton = document.createElement('button');
            comentarioBoton.classList.add('btn');
            comentarioBoton.classList.add('btn-block');
            comentarioBoton.textContent  = "Enviar 📩"
            comentarioBoton.addEventListener('click', agregoComentario);

            const comentarioBotonComprar = document.createElement('button');
            comentarioBotonComprar.classList.add('btn');
            comentarioBotonComprar.classList.add('btn-block');
            comentarioBotonComprar.classList.add('btn-primary');
            comentarioBotonComprar.textContent  = "Ingrese y Compre! ✅"
            comentarioBotonComprar.addEventListener('click', compra);
         
            textAreaComentarios.textContent = "";

            console.log(panelComentarios);
            comentariosElement.appendChild(comentarioTitle1);
            comentariosElement.appendChild(comentarioCuerpo1);
            comentariosElement.appendChild(comentarioTitle2);
            comentariosElement.appendChild(comentarioCuerpo2);
            comentariosElement.appendChild(comentarioTitle3);
            comentariosElement.appendChild(comentarioCuerpo3);
            comentariosElement.appendChild(comentarioTitle4);
            comentariosElement.appendChild(comentarioCuerpo4);
            comentariosElement.appendChild(comentarioTitle5);
            comentariosElement.appendChild(comentarioCuerpo5);
            comentariosElement.appendChild(comentarioTitle6);
            comentariosElement.appendChild(comentarioCuerpo6);


            valoracionesElement.appendChild(tituloIntermedio);
            valoracionesElement.appendChild(textAreaComentarios);
            valoracionesElement.appendChild(formCreate);
            valoracionesElement.appendChild(spanCreate);
            valoracionesElement.appendChild(spanCreate1);

            formCreate.appendChild(inputCreate);
            valoracionesElement.appendChild(comentarioBoton);
            valoracionesElement.appendChild(comentarioBotonComprar);
            

            DOMdescripciones.appendChild(comentariosElement);
            DOMvaolraciones.appendChild(valoracionesElement);
            
            
       
            
              //Efecto de Valoraciones
           
              var s = document.getElementById("pingStar"),
              m = document.getElementById('dir'),
              n = s.getElementsByTagName("li"),
                                 input = document.getElementById ('startP'); 
             clearAll = function () {
              for (var i = 0; i < n.length; i++) {
               n[i].className = '';
              }
             }
             for (var i = 0; i < n.length; i++) {
              n[i].onclick = function () {
               var q = this.getAttribute("rel");
               clearAll();
               input.value = q;
               valoracion = q;
              
              
               for (var i = 0; i < q; i++) {
                n[i].className = 'on';
               }
               m.innerHTML = this.getAttribute("title");
              }
              n[i].onmouseover = function () {
               var q = this.getAttribute("rel");
               clearAll();
               for (var i = 0; i < q; i++) {
                n[i].className = 'on';
                
               }
              }
              n[i].onmouseout = function () {
               clearAll();
               for (var i = 0; i < input.value; i++) {
                n[i].className = 'on';
               }
              }
             }
        //Fin efecto Valoraciones
                
            }
        })
          

        }else {
          console.log("FINISH");
        }
        
    }
    function agregoComentario(e){
        if (e){
            
           
            //me gustaria reiniciar el textArea.
            // document.location.href = "index.html"
            const mailVerif = document.getElementById('mailInput').value;
            const comentVerif = document.getElementById('comentInput').value;
            console.log(comentVerif,mailVerif);
            const exprReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

            //Verifico Camos llenos y email.
            if(mailVerif.length==0){
                const createSpan = document.querySelector("#spanValoraciones");
                createSpan.classList.add('text-danger')
                createSpan.textContent = "Mail Vacio";

            }if(!exprReg.exec(mailVerif)){
                const createSpan = document.querySelector("#spanValoraciones");
                createSpan.classList.add('text-danger')
                createSpan.textContent = "Mail Erroneo";
            }if(comentVerif.length==0){
                const createSpan = document.querySelector("#spanValoraciones1");
                createSpan.classList.add('text-danger')
                createSpan.textContent = "Comentario Vacio";
                //Fin de verificaion de campos.
            }else{
                //Verifico valoracion, envio de datos termino funcion.
                if(!valoracion){
                    alert(`Recuerde de poner una valoracion para poder enviar su comentario!`)
                }if(valoracion==1){
                    alert(`Ups!😪 algo anduvo mal... vea nuestro pokemones nuevamente ${mailVerif}`);
                    document.location.href = "probando2.html";
                }if(valoracion==2){
                    alert(`Ups!😪 algo anduvo mal... vea nuestro pokemones nuevamente ${mailVerif}`);
                    document.location.href = "probando2.html";
                }if(valoracion==3){
                    alert(`Tenemos mejoras y ofertas para vos! ${mailVerif}`);
                    document.location.href = "probando2.html";
                }if(valoracion==4){
                    alert(`Gracias por tu valoracion! ${mailVerif}`);
                    document.location.href = "index.html";
                }if(valoracion==5){
                    alert(`Gracias ${mailVerif} 😊 `);
                    document.location.href = "index.html";
                }
            }

            verComentarios();
        }
    }
    mostrarPokemones();
    

}
function compra(){
    document.location.href = "login.html";

}

