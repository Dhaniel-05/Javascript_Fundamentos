/*Asincronía Async Await

Async se usa para declarar funciones asíncronas, lo que permite pausar la ejecución con 'await' mientras se espera la resolución de una operación asíncrona. Esto facilita la lectura y mantenimiento del código, haciéndolo parecer más síncrono. 

Await viene siendo algo como esperar cuando se usa await dentro de una función asíncrona, la ejecución se detiene hasta que la operación asíncrona se haya completado y su resultado esté disponible. 

La utilidad de Async y Await permite escribir código javascript más claro y más legible además de no tener que recurrir a soluciones más complicadas como el callback o las promesas. Además permite escribir código que parece síncrono lo que hace más fácil la lectura y el mantenimiento de la codificación.*/

/* Sin utilizar el método Async */
function obtenDatos() {
    // Devuelve una promesa al usar `fetch` para obtener datos de una URL.
    return fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico`)
        .then(function (respuesta) {
            // Convierte la respuesta del servidor a un objeto JSON y devuelve otra promesa.
            return respuesta.json();
        })
        .then(function (datos) {
            // Este bloque se ejecuta cuando la conversión a JSON se completa exitosamente.
            // Imprime los datos obtenidos desde el servidor en la consola.
            console.log(datos);
        })
        .catch(function (error) {
            // Este bloque se ejecuta si ocurre un error durante el proceso.
            // Muestra el error en la consola.
            console.error(error);
        });
}
// Llama a la función `obtenDatos` para iniciar la solicitud y manejar la respuesta.
obtenDatos();
// Este mensaje se imprime inmediatamente, ya que la función `fetch` es asíncrona y no bloquea la ejecución del código.
console.log(`El código continua`);


/* Utilizando el método Async */

//función asíncrona que se llama obtener datos
async function obtenerDatos() {
    // `await` detiene temporalmente la ejecución hasta que la promesa de `fetch` se resuelva. Es decir: la variable que se llama respuesta para recibir su valor va a esperar a que la promesa fetch consiga toda la información desde este servidor
    let respuesta = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico`);
    
    // La variable datos también va a esperar a que la promesa se complete para que luego se le asigne un valor y así procesar el método JSON a la respuesta conviertiendolo en formato JSON.
    let datos = await respuesta.json();

    // Imprime los datos obtenidos en la consola.
    console.log(datos);
}
// Llama a la función `obtenerDatos` que se ejecuta de forma asíncrona.
obtenerDatos();
// Este mensaje se imprime inmediatamente, al igual que en el ejemplo anterior, porque `await` solo afecta a la función asíncrona, no al código externo.
console.log(`El código seguirá`);

/* Explicación de la función `obtenerDatos` con `async/await`:
1. La función es declarada como asíncrona utilizando `async`, lo que permite usar `await` dentro de ella.
2. Cuando la función es llamada, crea una variable `respuesta` que usa `await` para esperar a que la promesa de `fetch` se resuelva (descargando los datos del servidor).
3. Una vez que la promesa de `fetch` se resuelve, `respuesta` contiene los datos obtenidos del servidor.
4. La función luego crea otra variable `datos` que usa `await` para esperar la conversión de la respuesta a un objeto JSON.
5. Finalmente, los datos son impresos en la consola.
6. A diferencia de las promesas con `.then` y `.catch`, `async/await` hace que el código sea más legible y más fácil de seguir, ya que parece un código síncrono.*/


/* Función asincrónica obtenerContenido */
async function obtenerContenido() {
    console.log(`Código al Inicio`);
    let resGasolina = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico`); 
    /* Crea la variable resGasolina que va a contener el resultado de este fetch, 
       que extrae datos desde la URL de precios públicos de gasolina. */

    let datosGasolina = await resGasolina.json(); 
    /* El Await detiene la ejecución hasta que la promesa de `resGasolina.json()` se resuelva, 
       transformando los datos obtenidos en formato JSON y almacenándolos en datosGasolina. */

    console.log(`Código al Intermedio`);
    let resDollar = await fetch(`https://open.er-api.com/v6/latest/usd`); 
    /* Crea la variable resDollar que va a contener el resultado de este segundo fetch, 
       que extrae datos sobre el dólar desde la URL especificada. */

    let datosDollar = await resDollar.json(); 
    /* El Await espera a que se complete la conversión de los datos obtenidos por `resDollar` 
       en formato JSON y los guarda en la variable datosDollar. */
    
    console.log(`Código al Final`);
    console.log(datosGasolina, datosDollar); 
    /* Imprime en la consola ambos conjuntos de datos: Esto ocurre después de que ambas operaciones asíncronas se hayan completado. */
}
/* Llama a la función asíncrona obtenerContenido para iniciar la extracción y procesamiento de datos. */
obtenerContenido(); 
