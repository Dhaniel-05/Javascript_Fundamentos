/* Método POST y Fetch con Async/Await

Método POST: El POST se utiliza cuando se necesita enviar datos al servidor, a diferencia del GET, que se utiliza para obtener datos. En este caso, estamos enviando un objeto con propiedades como el título, el cuerpo y el identificador del usuario.

Fetch: fetch() es una API moderna para hacer solicitudes HTTP en JavaScript, y devuelve una promesa. Esta promesa se resuelve con el objeto de respuesta de la solicitud, desde el cual podemos obtener los datos.

Async/Await: async marca la función como asincrónica, y dentro de ella se puede utilizar await para esperar a que una promesa se resuelva antes de continuar con la ejecución del código. Esto facilita la lectura del código y evita los callbacks.

Error Handling: Dentro del bloque try, tratamos de realizar la solicitud y procesar la respuesta. Si algo sale mal (por ejemplo, si la respuesta no es exitosa), se lanza un error en el bloque catch.

/////

En este ejemplo se utiliza el método `POST` para enviar datos al servidor. Con la ayuda de `async` y `await`, se puede manejar de manera asíncrona la solicitud, esperando la respuesta del servidor de manera más clara y legible.

- POST: El método POST se utiliza para enviar datos al servidor. En este caso, estamos enviando un objeto con un título, contenido y un identificador de usuario.
- fetch(): La función `fetch` es una API para realizar solicitudes HTTP en JavaScript. En este caso, estamos enviando la solicitud POST al servidor.
- async/await: La palabra clave `async` se usa para declarar una función asíncrona. Dentro de una función asíncrona, se puede usar `await` para esperar la resolución de una promesa antes de continuar con la ejecución del código. Esto hace que el código sea más legible y parecido al código síncrono.

async function crearPost(titulo, contenido) {
    try {
        let respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
            method: `POST`,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titulo,
                body: contenido,
                userId: 1,
            }),
        })
        if(!respuesta.ok){
            throw new Error(`Error en la solicitud: `, respuesta.statusText)
        }
        let data = await (respuesta.json());
        console.log(`Registro Creado: `, data);
    } catch (error) {
        console.error(`Algo salio mal al crear el registro: `, error);
    }
}
crearPost(`Esto es un título`, `Esto es un contenido`);
*/

async function crearPost(titulo, contenido) {
    try {
        // Se hace la solicitud HTTP POST utilizando fetch() para enviar datos al servidor.
        let respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
            method: `POST`, // Indicamos que el método HTTP es POST.
            headers: {
                "Content-Type": "application/json", // Se especifica que el cuerpo de la solicitud será en formato JSON.
            },
            body: JSON.stringify({ // Convertimos los datos del cuerpo en formato JSON.
                title: titulo, // Título del post.
                body: contenido, // Contenido del post.
                userId: 1, // Identificador de usuario.
            }),
        })
        
        // Si la respuesta no es satisfactoria, lanzamos un error.
        if(!respuesta.ok){
            throw new Error(`Error en la solicitud: `, respuesta.statusText) // Mostramos el mensaje de error en caso de fallo.
        }

        // Esperamos la conversión de la respuesta a JSON.
        let data = await (respuesta.json());
        
        // Mostramos la información del post recién creado.
        console.log(`Registro Creado: `, data);
    } catch (error) {
        // Si ocurre algún error durante el proceso, lo mostramos en la consola.
        console.error(`Algo salió mal al crear el registro: `, error);
    }
}

// Llamamos a la función `crearPost` con un título y contenido.
crearPost(`Esto es un título`, `Esto es un contenido`);
