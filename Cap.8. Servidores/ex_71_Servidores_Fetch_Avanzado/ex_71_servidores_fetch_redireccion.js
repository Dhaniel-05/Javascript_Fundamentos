/* Redirect en Fetch API

El parámetro redirect en Fetch API controla cómo se manejan las redirecciones HTTP (códigos de estado 3xx) durante una solicitud. Dependiendo de la configuración, puedes decidir si seguir automáticamente las redirecciones o manejar manualmente los redireccionamientos en tu aplicación. Las opciones disponibles son:

follow (por defecto):
El cliente sigue automáticamente todas las redirecciones hasta llegar al recurso final.
Es útil para solicitudes estándar donde no necesitas gestionar redirecciones explícitamente.

error:
No sigue las redirecciones.
Si ocurre una redirección, se genera un error.
Útil cuando quieres prevenir redirecciones o manejar manualmente estas situaciones.

manual:
No sigue automáticamente las redirecciones.
En lugar de generar un error, te permite inspeccionar y manejar manualmente el estado de redirección mediante la propiedad Location en los encabezados de la respuesta.


let token = `miToken`;

fetch(`https://jsonplaceholder.typicode.com/posts`,{
    method:`GET`,
    credentials:`include`,
    cache:`default`,
    redirect:`follow`,
    headers:{
        'Authorization':'Bearer', token,
        'Content-Type':'application/json'
    }
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error(`Error: `, error));

Ejemplo para gestionar manualmente una redirección primera forma:
fetch(`https://example.com/redirect`, {
    method: 'GET',
    redirect: 'manual',
})
.then(response => {
    if (response.type === 'opaqueredirect') {
        console.log('Redirección opaca detectada.');
    } else {
        console.log('URL de redirección:', response.headers.get('Location'));
    }
})
.catch(error => console.error(`Error: `, error));

Ejemplo para gestionar manualmente una redirección segunda forma:
fetch(`https://example.com/redirect`, {
    method: 'GET',
    redirect: 'manual', // Configurar redirección manual.
})
.then(response => {
    if (response.type === 'opaqueredirect') {
        console.log('Redirección opaca detectada. No es posible acceder a la URL.');
    } else {
        let nuevaUbicacion = response.headers.get('Location'); // Obtener la cabecera de redirección.
        if (nuevaUbicacion) {
            console.log('Redirección manual detectada:', nuevaUbicacion);
            // Opcional: realizar otra solicitud a la nueva ubicación.
            fetch(nuevaUbicacion)
                .then(nuevaRespuesta => nuevaRespuesta.json())
                .then(datos => console.log('Datos de la nueva ubicación:', datos))
                .catch(error => console.error('Error al acceder a la nueva ubicación:', error));
        } else {
            console.log('No hay redirección. Respuesta original:', response);
        }
    }
})
.catch(error => console.error(`Error:`, error));
*/

let token = `miToken`; // Variable que almacena el token de autenticación.

// Realiza una solicitud HTTP GET con configuración de redirección.
fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: `GET`, // Método HTTP GET para obtener datos del servidor.
    credentials: `include`, // Indica que se deben incluir credenciales como cookies.
    cache: `default`, // Usa la política predeterminada de caché del navegador.
    redirect: `follow`, // Configura el manejo de redirecciones. Aquí, sigue automáticamente las redirecciones.
    headers: {
        'Authorization': 'Bearer ', token, // Proporciona el token para la autenticación mediante el encabezado Authorization.
        'Content-Type': 'application/json' // Especifica que se espera contenido en formato JSON.
    }
})
.then(respuesta => respuesta.json()) // Convierte la respuesta del servidor en un objeto JSON.
.then(data => console.log(data)) // Muestra en la consola los datos obtenidos del servidor.
.catch(error => console.error(`Error: `, error)); // Maneja errores si ocurre un fallo en la solicitud.
