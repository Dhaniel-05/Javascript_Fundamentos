/*Método DELETE:

El método DELETE es uno de los métodos estándar de HTTP y se utiliza en APIs RESTful para indicar que se desea eliminar un recurso en el servidor.

Propósito principal:
Solicita al servidor que elimine un recurso identificado por la URL especificada. Por ejemplo:
En este caso, la URL https://jsonplaceholder.typicode.com/posts/5 apunta al recurso con ID 5 en el conjunto posts.

Características clave:
Idempotencia: Si se realiza la misma solicitud DELETE varias veces, el resultado no cambia (si el recurso ya no existe, sigue devolviendo éxito o error apropiado).
Sin cuerpo en la mayoría de los casos: Generalmente no se envía información adicional en el cuerpo de una solicitud DELETE. Si se necesitan datos adicionales, deben enviarse como parámetros en la URL o en los encabezados.

Códigos de respuesta comunes:
200 (OK): La operación fue exitosa, y puede incluir información sobre el recurso eliminado.
204 (No Content): La operación fue exitosa, pero no se devuelve contenido.
404 (Not Found): El recurso que se intenta eliminar no existe.
401 (Unauthorized) o 403 (Forbidden): Falta autenticación o permisos.

Ejemplo del Método DELETE:

fetch(`https://jsonplaceholder.typicode.com/posts/5`,{
method:`DELETE`,
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error(`Error: `, error));
*/

// Realiza una solicitud HTTP al endpoint especificado utilizando la función fetch.
fetch(`https://jsonplaceholder.typicode.com/posts/5`, { 
    // Configura la solicitud para usar el método HTTP DELETE, que indica que se quiere eliminar un recurso.
    method: `DELETE`, 
})
// Cuando la solicitud se completa, procesa la respuesta como una Promesa.
// El método `.json()` convierte el cuerpo de la respuesta a un objeto JSON.
.then(respuesta => respuesta.json())
// Recibe los datos procesados (que en este caso suelen ser un objeto vacío `{}`) y los imprime en la consola.
.then(data => console.log(data))
// Si ocurre algún error durante la solicitud o en la conversión de datos, se captura aquí y muestra un mensaje de error en la consola.
.catch(error => console.error(`Error: `, error));
