/* Axios con el Método .post()

1. Método .post() en Axios: El método .post() de Axios se utiliza para enviar datos al servidor. Es especialmente útil cuando se necesita:
- Crear nuevos recursos en el servidor (como registros en una base de datos).
- Enviar formularios o cualquier tipo de datos estructurados.

2. Estructura Básica.
    axios.post(URL, datos, config)
    .then(respuesta => {...})
    .catch(error => {...});

- URL: Dirección a la que se enviará la solicitud.
- datos: Objeto que contiene los datos a enviar en el cuerpo de la solicitud (generalmente en formato JSON).
- config (opcional): Objeto para configurar encabezados u otras opciones (por ejemplo, autenticación o tipo de contenido).

3. Flujo de Trabajo
- Se envían datos al servidor con .post().
- El servidor responde con información sobre la creación del recurso (como el ID del nuevo recurso).
- Si hay un error, se captura en el bloque .catch().

Ejemplo con el método axios post:
1. Se define un objeto `datos` con el contenido que queremos enviar.
2. Se realiza la solicitud POST a una API pública (JSONPlaceholder).
3. Se maneja la respuesta exitosa o los errores mediante bloques `.then()` y `.catch()`.

let datos = {
    title:'Nuevo POST',
    body:'Mi Contenido'
}
axios.post(`https://jsonplaceholder.typicode.com/posts`, datos)
.then(respuesta => console.log('El POST fué creado con éxito', respuesta.data))
.catch(error => console.log('Error al publicar', error));

Explicación del Código.

Definición del Objeto datos:
Contiene la información a enviar en el cuerpo de la solicitud.
En este caso, tiene dos propiedades: title y body.

axios.post():
Envía la solicitud POST a la URL de la API.
Incluye el objeto datos como el cuerpo de la solicitud.

then(respuesta => {...}):
Se ejecuta si el servidor responde con éxito.
El objeto respuesta incluye:
respuesta.data: Los datos del recurso creado (incluyendo un nuevo id asignado por el servidor).
respuesta.status: Código de estado HTTP (por ejemplo, 201 para "Creado").
respuesta.headers: Encabezados de la respuesta.

catch(error => {...}):
Captura cualquier error que ocurra durante la solicitud.
El objeto error contiene información como:
Detalles de la solicitud que falló (error.config).
Mensaje de error (error.message).
*/

// Datos que queremos enviar al servidor
let datos = {
    title: 'Nuevo POST', // Título del recurso
    body: 'Mi Contenido' // Contenido o cuerpo del recurso
};

// Realizar la solicitud POST con Axios
axios.post(`https://jsonplaceholder.typicode.com/posts`, datos)
    .then(respuesta => {
        // Manejo de la respuesta exitosa
        console.log('El POST fue creado con éxito:', respuesta.data); 
        // `respuesta.data` contiene los datos del nuevo recurso creado, incluyendo el ID asignado por el servidor
    })
    .catch(error => {
        // Manejo de errores
        console.log('Error al publicar:', error);
        // Muestra en la consola el detalle del error ocurrido
    });
