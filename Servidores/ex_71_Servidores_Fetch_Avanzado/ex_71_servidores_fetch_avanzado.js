/* Manejo de Autenticación Básica con Fetch

En este código se utiliza el método HTTP `GET` con la función `fetch` para obtener datos de un servidor, incluyendo la autenticación básica utilizando el encabezado `Authorization`.

Conceptos Claves

1. Fetch API: Es una API moderna para realizar solicitudes HTTP desde JavaScript. Devuelve una promesa que se resuelve con el objeto de respuesta.
2. Autenticación Básica: Se utiliza el encabezado `Authorization` con el esquema `Basic`. Los datos de autenticación (usuario y contraseña) se codifican en Base64 para su envío.
3. Encabezados HTTP: Se pueden añadir encabezados personalizados a la solicitud para especificar detalles como el tipo de contenido (`Content-Type`) y las credenciales (`Authorization`).
4. Promesas: El método `fetch` devuelve una promesa que se maneja con `.then()` y `.catch()` para procesar la respuesta o manejar errores.

Ejemplo de autenticación con Fetch:

let usuario = `Usuario01`;
let password = `12345`;

fetch(`https://jsonplaceholder.typicode.com/posts`,{
    method:`GET`,
    credentials:`include`,
    headers:{
        'Authorization':'Basic'+ btoa(usuario,':', password),
        'Content-Type':'application/json'
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error(`Error: `, error));

Conceptualización.

Credenciales.
btoa(): Convierte una cadena de texto (en este caso, usuario:contraseña) a su representación codificada en Base64. Esto es necesario para incluir credenciales en el encabezado Authorization del esquema Basic.
Authorization: Es el encabezado HTTP utilizado para autenticar la solicitud. El esquema Basic requiere que los datos estén en formato Base64.

Fetch API.
Método GET: Se utiliza para obtener recursos de un servidor. Aquí, estamos solicitando datos de ejemplo desde https://jsonplaceholder.typicode.com/posts.
Encabezados: Se envían metadatos adicionales al servidor para la autenticación (Authorization) y el tipo de datos esperado (Content-Type).
Credentials include: Permite enviar credenciales (como cookies o encabezados de autenticación) con la solicitud.

Manejo de Promesas.
El método fetch devuelve una promesa. Cuando se resuelve correctamente, el objeto de respuesta se procesa para convertir los datos en formato JSON mediante .json().
Si ocurre un error durante la solicitud, este se captura en el bloque .catch() y se muestra en la consola.
*/

let usuario = `Usuario01`; // Variable que contiene el nombre de usuario.
let password = `12345`; // Variable que contiene la contraseña del usuario.

// Se realiza una solicitud HTTP GET utilizando Fetch API.
fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: `GET`, // Se especifica el método HTTP, en este caso GET para obtener datos.
    credentials: `include`, // Indica que se deben incluir credenciales en la solicitud, como cookies o encabezados de autorización.
    headers: {
        // Se añade el encabezado Authorization para autenticación básica.
        'Authorization': 'Basic ' + btoa(usuario + ':' + password), 
        // btoa() convierte la cadena "usuario:contraseña" en una representación Base64 requerida por Basic Auth.
        'Content-Type': 'application/json', // Se especifica que el tipo de contenido esperado es JSON.
    }
})
.then(respuesta => respuesta.json()) // Convierte la respuesta de la promesa a un objeto JSON.
.then(data => console.log(data)) // Muestra en la consola los datos obtenidos del servidor.
.catch(error => console.error(`Error: `, error)); // Maneja y muestra errores si la solicitud falla.
