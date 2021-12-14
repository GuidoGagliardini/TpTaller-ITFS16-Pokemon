console.log("HOLA MUNDO");

const url = 'pokemones.json';
const request = new XMLHttpRequest();
request.open('GET', url); 
request.responseType = 'json'; 
request.send();
var pokemones = '';

console.log(request.response);


request.onload = function (){
    pokemones = request.response; 
    console.log('POKEMONES ' , pokemones)
}