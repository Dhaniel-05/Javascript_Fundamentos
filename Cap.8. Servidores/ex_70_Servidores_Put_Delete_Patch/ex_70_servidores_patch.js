/*Método PATCH

Propósito principal:
El método PATCH se utiliza para realizar actualizaciones parciales en un recurso existente. A diferencia de PUT, que reemplaza todo el recurso, PATCH modifica únicamente los campos especificados.

Uso común:
Se emplea sólo y cuando se necesitan cambiar ciertos atributos de un recurso y es importante conservar el resto de los datos intactos.

Códigos de respuesta comunes:
200 (OK): La operación fue exitosa y se devuelve el recurso actualizado.
204 (No Content): La operación fue exitosa, pero no se devuelve contenido adicional.
404 (Not Found): El recurso que se intenta actualizar no existe.
401 (Unauthorized) o 403 (Forbidden): Falta autenticación o permisos.

Estructura de la solicitud:
Se deben enviar solo los campos que se desean modificar. El cuerpo de la solicitud debe estar en un formato aceptado por el servidor (en este caso, JSON).

Ejemplo del Método Patch:

fetch(`https://jsonplaceholder.typicode.com/posts/5`,{
    method:`PATCH`,
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        id: 5,
        title:`Título Actualizado`,
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error(`Error: `, error));
*/

// Realiza una solicitud HTTP al endpoint especificado utilizando la función fetch.
fetch(`https://jsonplaceholder.typicode.com/posts/5`, {
    // Configura la solicitud para usar el método HTTP PATCH, que indica que se quiere actualizar parcialmente un recurso.
    method: `PATCH`,
    // Se especifican los encabezados para indicar que el cuerpo de la solicitud está en formato JSON.
    headers: {
        "Content-Type": "application/json"
    },
    // El cuerpo de la solicitud contiene los datos que se desean actualizar en formato JSON.
    // En este caso, solo se actualiza el título del recurso con ID 5.
    body: JSON.stringify({
        id: 5, // ID del recurso que se desea actualizar.
        title: `Título Actualizado` // Nuevo valor para el título.
    })
})
// Cuando la solicitud se completa, procesa la respuesta como una Promesa.
// El método `.json()` convierte el cuerpo de la respuesta a un objeto JSON.
.then(respuesta => respuesta.json())
// Recibe los datos procesados y los imprime en la consola.
.then(data => console.log(data))
// Si ocurre algún error durante la solicitud o en la conversión de datos, se captura aquí y muestra un mensaje de error en la consola.
.catch(error => console.error(`Error: `, error));
