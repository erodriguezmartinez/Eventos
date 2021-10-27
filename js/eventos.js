/*eventos.js
Ejercicio Eventos POE.
Autora: Esperanza Rogríguez Martínez <erodriguezmartinez.guadalupe@alumnado.fundacionloyola.net>.
Licencia: GPL v3 o superior.
Año 2021
*/
'use strict'

window.onload=iniciar;  //Cuando se haga click (ejecución del evento) va a iniciar
let mapa = null;

function iniciar(){

  mapa = document.getElementById('imgMapa');  ////Buscamos la img  del mapa del html

  //let img = document.getElementsByTagName('img')[0];  ////Buscamos la img del html
  //img.onclick= manejadorClick;  //Asignamos una función a img
  //De la siguiente manera podemos poner diferentes manejadores (funciones) sobre el mismo objeto y el mismo evento
  //img.addEventListener('click',manejadorClick);
  //img.addEventListener('click',manejadorClick2);

  //mapa.onclick= ponerSeta;
  mapa.onclick= ponerSetas;
}
/*
function manejadorClick(){
  console.log("TROM");

}
function manejadorClick2(){
  console.log("TROM2");

}*/
/*Función para que una misma seta se mueva, según donde hacemos click*/
function ponerSeta(evento){
  //console.log("poner seta");
  console.log(evento);
  let seta = document.getElementById('setaPrueba');
  //Definimos movimiento de la seta
  seta.style.top = `${evento.clientY -50 }px`;
  seta.style.left = `${evento.clientX -50 }px`;

}
/* Función para poner diferentes setas por el mapa, donde hagamos click*/
function ponerSetas(evento){
  //console.log("poner setas");
  //console.log(evento);
  let seta = document.createElement('img');  //Creamos img de seta
  document.body.appendChild(seta); //Lo añadimos a su padre
  seta.setAttribute('src','img/seta.png');  //Le agregamos atributos a img de seta indicando la imagen a visualizar
  seta.classList.add('setasPrueba');   //Le agregamos la clase correspondiente a img de seta

  seta.oncontextmenu=quitarSetas; //Asociamos el evento a cada seta àra después poder quitarla

  //Definimos posicionamiento de las setas
  seta.style.top = `${evento.clientY -50 }px`;
  seta.style.left = `${evento.clientX -50 }px`;

}
/*Función para quitar las diferentes setas añadidas al mapa anteriormente, con click derecho*/
function quitarSetas(evento){
  //console.log("quitar setas");
  //console.log(evento);
  //Quitamos el menú del navegador que nos aparece al hacer clik derecho
  evento.stopPropagation();
  evento.preventDefault();

  //Borrado de seta, target indica que imagen es la que esta entrendo con el evento, al borrar target borramos imagen
  evento.target.remove();

}
