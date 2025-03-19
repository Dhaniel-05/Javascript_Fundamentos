/* Axios
Axios es una biblioteca de JavaScript utilizada para realizar solicitudes HTTP desde el navegador y Node.js. Es muy popular debido a su facilidad de uso, soporte para promesas, y características avanzadas que simplifican el manejo de solicitudes.

Características principales.
Facilidad de uso: Simplifica las solicitudes HTTP con una sintaxis más legible que fetch.
Soporte para Promesas: Usa promesas de JavaScript, lo que facilita la gestión de operaciones asincrónicas.
Intercepción de solicitudes y respuestas: Permite agregar lógica antes de enviar la solicitud o procesar la respuesta.
Configuración global: Puedes establecer configuraciones predeterminadas para todas las solicitudes.
Compatibilidad con navegadores antiguos: Soporta navegadores donde fetch podría no estar disponible.
Automatización de datos JSON: Transforma automáticamente el cuerpo de las respuestas y solicitudes en JSON.

Ejemplo del consumo del api:
function obtenerInfo(){
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(function(respuesta){
        let listaInformacion = document.getElementById(`listaInfo`);
        for (let f = 0; f < respuesta.data.length; f++){
            let elemento = document.createElement(`li`);
            elemento.innerText = respuesta.data[f].title;
            listaInformacion.appendChild(elemento);
        }
    })
    .cath(function(error){
        console.log(error);
    })
}

Explicación de las partes clave del código.

Solicitud con axios.get:
Realiza una solicitud GET a la URL especificada.
Retorna una promesa que se resuelve si la solicitud tiene éxito y se rechaza si hay un error.

respuesta.data:
Contiene los datos de la respuesta del servidor. En este caso, es un arreglo de objetos que representan publicaciones (posts).

Iteración con for:
Recorre cada elemento de respuesta.data para extraer información relevante (títulos de publicaciones).

Creación dinámica de elementos:
Usa document.createElement para crear nuevos elementos de lista (li) que luego se agregan al DOM con appendChild.

Manejo de errores:
Usa .catch para capturar errores en caso de que la solicitud falle.
*/

// Función para obtener información desde una API
function obtenerInfo() {
    // Realiza una solicitud GET usando Axios a una API de prueba.
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(function(respuesta) { 
            // El método `.then` se ejecuta cuando la solicitud es exitosa.
            // La variable `respuesta` contiene los datos devueltos por el servidor.

            // Obtiene el elemento de la lista en el HTML donde se mostrará la información.
            let listaInformacion = document.getElementById(`listaInfo`);

            // Itera sobre los datos recibidos en la respuesta (`respuesta.data`).
            for (let f = 0; f < respuesta.data.length; f++) {
                // Crea un nuevo elemento de lista (`li`) por cada entrada en los datos.
                let elemento = document.createElement(`li`);
                
                // Agrega el título de cada entrada al texto del elemento de la lista.
                elemento.innerText = respuesta.data[f].title;
                
                // Agrega el elemento `li` creado a la lista en el documento HTML.
                listaInformacion.appendChild(elemento);
            }
        })
        .catch(function(error) { 
            // Este bloque captura errores que puedan ocurrir durante la solicitud.
            console.log(error); // Muestra el error en la consola para depuración.
        });
}
