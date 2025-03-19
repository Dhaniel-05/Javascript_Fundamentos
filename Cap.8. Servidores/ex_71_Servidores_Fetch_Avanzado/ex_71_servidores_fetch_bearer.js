/* Manejo de Autenticación con Tokens (Bearer Token)

En este código se utiliza el método HTTP `GET` con la función `fetch` para obtener datos de un servidor, implementando un esquema de autenticación basado en tokens (`Bearer Token`).

Conceptos Claves.
1. Bearer Token:
- Es un tipo de token de acceso que se incluye en el encabezado `Authorization` para autenticar solicitudes HTTP.
- Permite al servidor identificar y autorizar al cliente que realiza la solicitud.
- Los tokens suelen ser emitidos por un servidor de autenticación y tienen un tiempo de vida limitado por razones de seguridad.
2. Fetch API:
- Al igual que en la autenticación básica, `fetch` permite realizar solicitudes HTTP con encabezados personalizados, incluyendo el encabezado de autorización para tokens.
3. Promesas y Manejo de Errores:
- Se utiliza `.then()` para procesar la respuesta del servidor y `.catch()` para manejar errores en caso de fallos en la solicitud.

Ejemplo de autenticación con Bearer Token:

let token = `miToken`;

fetch(`https://jsonplaceholder.typicode.com/posts`,{
    method:`GET`,
    credentials:`include`,
    headers:{
        'Authorization':'Bearer', token,
        'Content-Type':'application/json'
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error(`Error: `, error));

Conceptualización.
Barer Token:
Propósito: Se utiliza para autenticar al cliente y autorizar el acceso a recursos protegidos en el servidor.
Formato: Se envía como parte del encabezado Authorization con el prefijo Bearer seguido del valor del token ('Bearer ' + token).
Ventajas: Los tokens son independientes del usuario y no exponen credenciales directamente, lo que los hace más seguros.

Fetch API:
Encabezados Personalizados: El encabezado Authorization incluye el esquema de autenticación y el token, mientras que Content-Type especifica que el servidor debe interpretar los datos en formato JSON.
Método GET: Se utiliza para recuperar datos del servidor sin modificar recursos.

Manejo de Promesas:
.then(): Procesa la respuesta del servidor. Aquí se convierte el cuerpo de la respuesta en un objeto JSON utilizando .json().
.catch(): Captura errores en caso de que falle la solicitud, como problemas de red o un token inválido.

Seguridad y Mejores Prácticas:
Protección del Token: Los tokens deben ser tratados como información sensible y nunca deben exponerse en el lado del cliente ni en la consola de producción.
Vencimiento del Token: Los tokens deben renovarse regularmente para mantener la seguridad de las solicitudes.
*/

let token = `miToken`; // Variable que contiene el token de autenticación.

// Se realiza una solicitud HTTP GET utilizando Fetch API.
fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: `GET`, // Método HTTP GET para obtener datos del servidor.
    credentials: `include`, // Indica que se deben incluir credenciales (como cookies) con la solicitud.
    headers: {
        // Se añade el encabezado Authorization con el esquema Bearer y el token.
        'Authorization': 'Bearer ' + token, 
        // 'Bearer' es el esquema utilizado para autenticar solicitudes con tokens.
        'Content-Type': 'application/json', // Se especifica que el tipo de contenido esperado es JSON.
    }
})
.then(respuesta => respuesta.json()) // Convierte la respuesta del servidor a un objeto JSON.
.then(data => console.log(data)) // Muestra en la consola los datos obtenidos.
.catch(error => console.error(`Error: `, error)); // Maneja y muestra errores si ocurre un fallo en la solicitud.
