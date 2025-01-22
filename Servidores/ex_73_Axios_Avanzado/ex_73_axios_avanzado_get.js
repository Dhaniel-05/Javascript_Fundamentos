/* Axios Básico con .get().then().catch()

1. Axios y Promesas
Axios es una biblioteca basada en promesas que permite realizar solicitudes HTTP con una sintaxis simple y legible. Estas solicitudes son útiles para interactuar con APIs y servidores web.
Con Axios puedes usar el método axios.get() para realizar solicitudes HTTP tipo GET y obtener datos de una URL.

2. Métodos Principales
.get(url): Realiza una solicitud HTTP tipo GET.
.then(): Maneja la respuesta exitosa del servidor.
.catch(): Captura y maneja errores ocurridos durante la solicitud.

3. Flujo de Trabajo
Se realiza una solicitud GET a una URL con axios.get().
La respuesta se procesa dentro del bloque .then(), donde se puede acceder a los datos devueltos por la API.
Si ocurre algún error, se captura y maneja dentro del bloque .catch().

axios.get().then().catch()

Este ejemplo básico de Axios muestra cómo realizar una solicitud GET a un servidor 
y manejar la respuesta o los posibles errores:

axios.get(`https://jsonplaceholder.typicode.com/posts`)
.then(respuesta => console.log(respuesta.data))
.catch(error => console.log(error));

1. Se realiza la solicitud a la API pública de JSONPlaceholder.
2. La respuesta, si es exitosa, se procesa dentro de `.then()`.
3. Cualquier error durante la solicitud o respuesta se captura con `.catch()`.

Explicación del Código

axios.get(): Este método realiza una solicitud HTTP tipo GET a la URL especificada (https://jsonplaceholder.typicode.com/posts). Devuelve una promesa, que puede resolverse (éxito) o rechazarse (error).

then(respuesta => {...}): Este bloque se ejecuta cuando la solicitud tiene éxito.
El objeto respuesta contiene varios datos útiles:
respuesta.data: El cuerpo de la respuesta en formato JSON (datos de la API).
respuesta.status: El código de estado HTTP (por ejemplo, 200 para éxito).
respuesta.headers: Encabezados de la respuesta.

catch(error => {...}): Este bloque captura cualquier error durante la solicitud.
El objeto error puede contener información sobre el problema, como:
Mensajes de error (error.message).
Detalles sobre la solicitud fallida (error.config).
*/

// Realizar una solicitud HTTP GET a JSONPlaceholder para obtener una lista de publicaciones
axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(respuesta => {
        // Manejo de la respuesta exitosa
        // `respuesta.data` contiene el cuerpo de la respuesta (los datos en formato JSON)
        console.log(respuesta.data); // Muestra en consola las publicaciones obtenidas
    })
    .catch(error => {
        // Manejo de errores
        // Si la solicitud falla (por ejemplo, por problemas de red), este bloque captura el error
        console.log(error); // Muestra el error en la consola
    });
