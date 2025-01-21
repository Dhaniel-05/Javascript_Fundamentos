/*Eventos En Tiempo Real*/

/*Los eventos en tiempo real actualizan el website sin necesidad de recargar la página. Se utilizan tecnologías como websocket y http/2 server push*/

let socket = new WebSocket(`ws://localhost:8008`); /*WebSocket pide como parámetro dirección de origen. las letras ws indican que se está utilizando el protocolo WebSocket. El localhost es la dirección ficticia y el 8080 es el puerto ficticio el cual es en el que está escuchando el servidor*/

/*Se crean variables para capturar elementos del DOM*/
let mensajeingresado = document.getElementById(`mensajeIngresado`);
let botonenviar = document.getElementById(`botonenviar`);

/*Función que sirve para mostrar los mensajes del chat que se van acumulando*/
function mostrarMensajes(contenido){
    let contenedorMensajes = document.getElementById(`mensajesChat`); /*Captura el Id del HTML*/
    let elementoMensaje = document.createElement(`p`); /*Construye un nuevo elemento para colocarlo dentro de un div en el HTML*/
    elementoMensaje.innerText = contenido; /*El contenido del mensaje en su texto interno va a tener el valor recibido*/
    contenedorMensajes.appendChild(elementoMensaje); /*Se agrega un hijo que va a ser el elemento mensaje, esto permite que los mensajes se vayan agregando uno debajo del otro*/
}
botonenviar.onclick = function(){
    let mensaje = mensajeingresado.value; /*Contiene el mensaje ingresado por el usuario pero solo la propiedad value*/
    mostrarMensajes(mensaje); /*Se invoca la función mostrarMensajes y el en parámetro se le pasa el mensaje del usuario*/
    socket.send(mensaje); /*Socket envía el mensaje al servidor con su método send*/
};
socket.onmessage = function(event){ /*Este envento sirve para cuando se recibe un mensaje a través del servidor con el onmessage a través del web socket*/
    let mensaje = event.data; /*Esta variable va a almacenar lo que recibio evento pero de su propiedad data*/
    mostrarMensajes(mensaje); /*Muestra el mensaje en cuestión*/
}
