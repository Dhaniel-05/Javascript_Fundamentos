/*Método PUT:

El método PUT reemplaza completamente un recurso existente en el servidor. Si el recurso no existe, puede crear uno nuevo en algunos casos, dependiendo de cómo esté configurada la API.

Este método se utiliza cuando se desean actualizar todos los campos de un recurso o se quiere sobrescribir completamente el recurso.

Estructura de la solicitud:
URL: Indica el recurso a modificar (/posts/5 en este caso).
Cuerpo: Debe incluir todos los campos necesarios para el recurso. Los campos no especificados pueden ser eliminados o reemplazados por valores predeterminados.

Códigos de respuesta típicos:
200 (OK): La operación fue exitosa y se devuelve el recurso actualizado.
201 (Created): Se creó un nuevo recurso (si es permitido por la API).
404 (Not Found): El recurso que se intenta reemplazar no existe

Ejemplo Método Put:

fetch(`https://jsonplaceholder.typicode.com/posts/5`,{
    method:`PUT`,
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        id: 5,
        title:`Nuevo Título`,
        body:`Nueva Descripción título`
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error(`Error: `, error));
*/

/* Realiza una solicitud HTTP al endpoint especificado utilizando la función fetch */
fetch(`https://jsonplaceholder.typicode.com/posts/5`, { 
    // Configura la solicitud para usar el método HTTP PUT, que reemplaza completamente el recurso especificado.
    method: `PUT`, 
    // Se especifican los encabezados para indicar que el cuerpo de la solicitud está en formato JSON.
    headers: { 
        "Content-Type": "application/json" 
    },
    // El cuerpo de la solicitud contiene los datos completos del recurso que se reemplazará.
    body: JSON.stringify({ 
        id: 5, // El ID del recurso que se desea reemplazar (debe coincidir con el ID en la URL).
        title: `Nuevo Título`, // Nuevo valor para el título del recurso.
        body: `Nueva Descripción título` // Nueva descripción asociada al recurso.
    })
})
// Procesa la respuesta devuelta por el servidor.
// El método .json() convierte el cuerpo de la respuesta a un objeto JSON.
.then(respuesta => respuesta.json()) 
// Recibe los datos procesados y los imprime en la consola.
.then(data => console.log(data)) 
// Si ocurre algún error durante la solicitud o en la conversión de datos, se captura aquí.
.catch(error => console.error(`Error: `, error)); 
