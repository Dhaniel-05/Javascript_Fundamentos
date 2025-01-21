// Definición de la función `obtenerUsuarios`.
function obtenerUsuarios() {
    // Devuelve una nueva promesa.
    return new Promise(function (resolve, reject) {
        // Se crea una instancia de `XMLHttpRequest` para realizar una solicitud HTTP.
        let xhr = new XMLHttpRequest();

        // Configuración de la solicitud HTTP (método GET y URL del recurso).
        xhr.open(`GET`, `http://jsonplaceholder.typicode.com/users`);

        // Maneja el evento de carga (`onload`), que se dispara cuando la respuesta se recibe completamente.
        xhr.onload = function () {
            // Verifica si el código de estado HTTP es 200 (éxito).
            if (xhr.status === 200) {
                // Si la solicitud es exitosa, llama a `resolve` con la respuesta convertida a objeto JSON.
                resolve(JSON.parse(xhr.responseText));
            } else {
                // Si hay un error (código de estado diferente de 200), llama a `reject` con el texto del error.
                reject(xhr.statusText);
            }
        };

        // Envía la solicitud al servidor.
        xhr.send();
    });
}

// Llamada a la función `obtenerUsuarios`, que retorna una promesa.
obtenerUsuarios()
    .then(function (usuarios) {
        // Este bloque se ejecuta cuando la promesa se cumple exitosamente.
        // Recibe los datos de los usuarios en forma de array (convertidos desde JSON) y los imprime en la consola.
        console.log(usuarios);
    })
    .catch(function (error) {
        // Este bloque se ejecuta si la promesa es rechazada.
        // Imprime en la consola el mensaje de error recibido desde el `reject`.
        console.error(error);
    });

/* 
Explicación paso a paso

obtenerUsuarios:
Es una función que retorna una promesa. Esto permite manejar la solicitud de forma asincrónica y encadenar acciones una vez completada (usando then y catch).

XMLHttpRequest:
Se utiliza para realizar solicitudes HTTP al servidor.
El método open configura la solicitud para obtener (GET) datos desde la URL http://jsonplaceholder.typicode.com/users.
La solicitud se envía al servidor con xhr.send().

Manejo de la respuesta:
Cuando el servidor responde, se dispara el evento onload.
Si el estado de la respuesta (xhr.status) es 200, significa que la solicitud fue exitosa. Entonces:
Se llama a resolve con los datos de la respuesta, convertidos de texto JSON a un objeto JavaScript utilizando JSON.parse.
Si el estado no es 200, se llama a reject con el texto del estado del error (xhr.statusText).
Uso de la promesa:

then: Este bloque se ejecuta cuando la promesa es resuelta exitosamente. Los datos de los usuarios (array de objetos) se imprimen en la consola.
catch: Este bloque se ejecuta si la promesa es rechazada. Muestra el error en la consola.

Orden de ejecución:
1. La función obtenerUsuarios es llamada, iniciando la solicitud HTTP asincrónica.
2. Mientras la solicitud se procesa, el programa continúa ejecutándose.
3. Una vez que el servidor responde, se ejecuta el bloque resolve o reject según el estado de la respuesta.
4. Si la solicitud fue exitosa (resolve), los datos de los usuarios se imprimen en el bloque then.
5. Si ocurrió un error (reject), el mensaje de error se imprime en el bloque catch.

Conceptos clave

Promesas:
Encapsulan la lógica asincrónica para facilitar su manejo y mejorar la legibilidad del código. Permiten encadenar acciones (usando then y catch). 

XMLHttpRequest: Es una API nativa de JavaScript para realizar solicitudes HTTP. Aunque funcional, actualmente suele ser reemplazada por fetch debido a su sintaxis más sencilla.
*/