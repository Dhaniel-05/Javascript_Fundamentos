/*Promesas Solicitudes y Respuestas

Teoría

Peticiones:

GET. Se utiliza para obtener información de un servidor.
POST. Se utiliza para enviar información al servidor.
PUT. Se utiliza para actualizar un recurso en un servidor.
DELETE. Se utiliza para eliminar un recurso que se encuentra en un servidor.

Respuesta:

Las respuestas a estas peticiones y/o solicitudes http van a traer consigo un código de estado http estos códigos son números que indican cuál ha sido el resultado de las solicitudes y los códigos más comunes que se pueden recibir son:

El código 200 para indicar que la respuesta fue completada exitosamente.
El código 201 que indica cuando un elemento se ha creado en caso de que se haya solicitado eso. 
EL código 204 que significa que la respuesta ha venido sin contenido.
El código 400 que quiere decir que es una solicitud incorrecta.
El código 401 que significa que la solicitud no fue autorizada por el servidor al que se la está pidiendo.

200 Respuesta completada
201 Elemento creado
204 Respuesta vacía
400 Mal solicitado
401 No autorizado

Resumen:
Las promesas y las solicitudes http son muy importantes en javascript para poder manejar la asincronía y la comunicación con servidores externos y con ellos se pueden crear aplicaciones dinámicas responsivas que puedan actualizarse y cambien en tiempo real sin bloquear la ejecución del resto de las aplicaciones.

Catch: La funcionalidad cach es un método que se utiliza en promesas para manejar posibles errores, es una forma de atrapar a cualquier error que ocurra en el código dentro de una promesa y realizar una acción específica en caso de que ocurra dicho error. */

let datosJson;
fetch(`../ex_50_Persona/ex_50_persona.json`)
    .then(res => res.json())
    .then((salida) => {
        datosJson = salida;
        let elementoTexto = document.getElementById(`nombre`);
        elementoTexto.textContent = datosJson.nombre;
    })
    .catch(function(error){alert(error)}); /*Con la funcionalidad Catch, el sistema se va a fijar si hubo un error y si lo hubo, va a ejecutar esta función que toma la información del error y lo muestra en un alert.*/

    /*Ejemplo práctico:
    
    let datosJson;
    fetch(`../ex_50_Persona/ex_50_persona.json`)
        .then(res => res.jsn()) //Aquí se está el error
        .then((salida) => {
            datosJson = salida;
            let elementoTexto = document.getElementById(`nombre`);
            elementoTexto.textContent = datosJson.nombre;
        })
        .catch(function(error){alert(error)});
    
    //El alert muestra: TypeError: res.jsn is not a function


    let datosJson;
    fetch(`../ex_50_Persona/ex_50_persona.json`)
        .then(res => res.jsn()) //Aquí se está el error
        .then((salida) => {
            datosJson = salida;
            let elementoTexto = document.getElementById(`nomre`); //Aquí está el error
            elementoTexto.textContent = datosJson.nombre;
        })
        .catch(function(error){alert(error)});
    
    //El alert muestra: TypeError: Cannot set properties of null (setting 'textContent')

    */