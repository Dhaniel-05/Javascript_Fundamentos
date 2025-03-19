/*Eventos

Los más comunes son:

click
doble click
mouseover
mouseout
keydown */

/*Se agrega un evento escuchar al presionar el botón con id boton1*/
let boton = document.getElementById(`boton1`);
boton.addEventListener(`click`, function(){
    alert(`Muy bien lo presionaste`);
})

/*Se agrega un evento escuchar al presionar el botón con id boton2*/
let botonAzul = document.getElementById(`boton2`);
function mostrarMensaje(){
    alert(`Presionaste el botón Azul`);
}
botonAzul.addEventListener(`click`, mostrarMensaje);

/*Se agrega un evento escuchar al pasar por encima del título con id titulo*/
let pasarEncima = document.getElementById(`titulo`);
function mostrarEncima(){
    alert(`Pasaste por encima del Título Evento`);
}
pasarEncima.addEventListener(`mouseover`, mostrarEncima);
