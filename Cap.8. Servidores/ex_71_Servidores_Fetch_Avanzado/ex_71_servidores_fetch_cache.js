/* Manejo de Caché en Fetch API

Concepto de Caché.
La caché se utiliza para almacenar temporalmente respuestas HTTP en el cliente para mejorar el rendimiento y reducir la necesidad de hacer solicitudes redundantes al servidor.

En Fetch API, el parámetro `cache` permite controlar cómo se maneja la caché al realizar solicitudes. Las diferentes opciones disponibles para el manejo de la caché son:

1. `default`:
    - Se utiliza la política de caché predeterminada del navegador.
    - Es equivalente a no especificar la opción `cache`.

2. `no-cache`:
    - Fuerza al navegador a validar la respuesta con el servidor antes de usar una respuesta almacenada en caché.
    - No significa que la respuesta no se almacene en caché, sino que siempre se valida.

3. `no-store`:
    - La solicitud y la respuesta no se almacenan en absoluto en la caché.
    - Útil para datos altamente sensibles o solicitudes que deben ser siempre nuevas.

4. `reload`:
    - Fuerza al navegador a cargar la solicitud directamente desde el servidor, ignorando cualquier respuesta almacenada en caché.

5. `force-cache`:
    - Utiliza exclusivamente la respuesta almacenada en caché, incluso si está desactualizada.
    - Si no hay caché disponible, el navegador realizará una solicitud al servidor.

6. `only-if-cached`:
    - Intenta usar únicamente la respuesta almacenada en la caché.
    - Si no existe una respuesta en la caché, la solicitud fallará con un error.
    - Solo funciona con solicitudes del modo `same-origin`.


Ejemplo para el Uso de cache:
En este ejemplo, se usa cache: 'default', lo que significa que se empleará la política predeterminada del navegador para manejar la caché.
Dependiendo de las necesidades del sistema, puedes cambiar la opción cache para ajustar el comportamiento de la caché. Por ejemplo:
no-cache si deseas asegurarte de que las respuestas sean siempre las más recientes.
force-cache si deseas usar respuestas almacenadas incluso si están desactualizadas.
no-store para evitar completamente el uso de caché.

let token = `miToken`;

fetch(`https://jsonplaceholder.typicode.com/posts`,{
    method:`GET`,
    credentials:`include`,
    cache:`default`,
    headers:{
        'Authorization':'Bearer', token,
        'Content-Type':'application/json'
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error(`Error: `, error));
*/

let token = `miToken`; // Variable que contiene el token de autenticación.

// Realización de una solicitud HTTP GET con configuración de caché.
fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: `GET`, // Método HTTP GET para obtener datos del servidor.
    credentials: `include`, // Indica que se deben incluir credenciales como cookies.
    cache: `default`, // Configuración de la política de caché (se está usando la política por defecto).
    headers: {
        'Authorization': 'Bearer ' + token, // Encabezado para autenticación con token Bearer.
        'Content-Type': 'application/json' // Especifica que el tipo de contenido esperado es JSON.
    }
})
.then(respuesta => respuesta.json()) // Convierte la respuesta del servidor a un objeto JSON.
.then(data => console.log(data)) // Muestra en la consola los datos obtenidos.
.catch(error => console.error(`Error: `, error)); // Maneja errores si ocurre un fallo en la solicitud.
