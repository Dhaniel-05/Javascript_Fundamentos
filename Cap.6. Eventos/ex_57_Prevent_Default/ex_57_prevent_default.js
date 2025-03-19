/*Target Prevent Default

event.target
event.currentTarget
event.preventDefault
*/

/*Se agrega un evento escuchar al presionar el botón con id boton1*/
let boton = document.getElementById(`boton1`);
function mostrarMensaje(event){
    alert(event.target); /*Esta función aunque utiliza el parámtro del evento*/
    /*event.target: Es el elemento que inició el evento. Es decir, el elemento real que recibió el clic o interacción del usuario. */
}
boton.addEventListener(`click`, mostrarMensaje);
/*El mensaje de alerta sale así: [object HTMLButtonElement] esta es la información que contiene el elemento dentro de la propiedad target.*/


let div = document.getElementById(`divBtn2`);
function readMessage(e) { /*Recibe el evento como parámetro*/
    alert(e.currentTarget); /*Usa el parámetro del evento.*/
/*event.currentTarget: Es el elemento que tiene asignado el manejador de eventos y que está escuchando el evento. 
A diferencia de target, currentTarget siempre se refiere al elemento que escucha el evento, sin importar dónde se originó el evento.*/

}
div.addEventListener('click', readMessage);
/*El mensaje de alerta sale así: [object HTMLDivElement] esta es el elemento asociado como contenedor*/

let enlace = document.getElementById(`link`);
function blockLink(event){
    event.preventDefault();
/*event.preventDefault(): Evita que se ejecute la acción predeterminada asociada al evento. 
Por ejemplo, en un enlace, previene la navegación; en un formulario, evita el envío. Es útil para manejar eventos de forma personalizada.*/

    alert(`¡Enlace Deshabilitado!`);
}
enlace.addEventListener(`click`, blockLink);
/*Al dar click al enlace sale el mensaje programado que dice que está deshabilitado evitando que el link navegue a otra página.*/