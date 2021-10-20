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

function ponerSeta(evento){
  //console.log("poner seta");
  console.log(evento);
  let seta = document.getElementById('setaPrueba');
  seta.style.top = `${evento.clientY -50 }px`;
  seta.style.left = `${evento.clientX -50 }px`;

}
function ponerSetas(evento){
  //console.log("poner setas");
  console.log(evento);
  let seta = document.createElement('img');  //Creamos img de seta
  document.body.appendChild(seta); //Lo añadimos a su padre
  seta.setAttribute('src','img/seta.png');  //Le agregamos atributos a img de seta indicando la imagen a visualizar
  seta.setAttribute('class','setasPrueba');   //Le agregamos atributos a img de seta indicando la imagen a visualizar


  seta.style.top = `${evento.clientY -50 }px`;
  seta.style.left = `${evento.clientX -50 }px`;

  if(seta.oncontextmenu){
    quitarSetas(seta);
  }

}
function quitarSetas(evento){
  //console.log("quitar setas");
  console.log(evento);
  let seta = document.getElementsByTagName('p')[3];  //Buscamos el p que queremos destruir
  seta.remove(); //Borramos seta


}
