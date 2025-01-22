/*Funciones asíncronas con Async/Await y manejo de errores

Las funciones declaradas con la palabra clave async son funciones asíncronas. 
Estas funciones: Devuelven una promesa automáticamente y Permiten usar la palabra clave await dentro de ellas para pausar la ejecución hasta que una promesa sea resuelta o rechazada.

El manejo de errores en funciones asíncronas se realiza utilizando un bloque try...catch.
try contiene el código que puede lanzar un error. catch captura cualquier error que ocurra, permitiendo manejarlo de manera controlada.

async function sumar(num1, num2) {
    if (typeof num1 != `number` || typeof num2 != `number`){
        throw new Error(`Alguno de los argumentos es un número`);
    }
    return num1 + num2;
}
async function manejoErrores() {
    try{
        let resultado = await sumar (`November`, 24);
        console.log(resultado);
    }catch(error){
        console.log(error.message);
    }
}
manejoErrores();
*/

// Declaración de una función asíncrona llamada `sumar`.
async function sumar(num1, num2) {
    /* Verifica si ambos argumentos son números. Si no lo son, lanza un error. */
    if (typeof num1 != `number` || typeof num2 != `number`) {
        /* `throw` se utiliza para lanzar una excepción. Aquí crea un objeto `Error` con un mensaje descriptivo. */
        throw new Error(`Alguno de los argumentos no es un número`);
    }
    // Si los argumentos son válidos, retorna la suma. La función devuelve una promesa resuelta automáticamente.
    return num1 + num2;
}

// Declaración de una función asíncrona para manejar los errores.
async function manejoErrores() {
    try {
        /* Intenta ejecutar la función `sumar` y espera su resultado con `await`. */
        let resultado = await sumar(`November`, 24); 
        /* El uso de `await` detiene la ejecución de esta línea hasta que `sumar` resuelva o rechace. */
        console.log(resultado); 
        /* Esta línea no se ejecutará porque `sumar` lanzará un error al recibir un argumento inválido. */
    } catch (error) {
        /* Captura el error lanzado por `sumar` y lo maneja en este bloque. */
        console.log(error.message); 
        /* Imprime el mensaje del error en la consola: "Alguno de los argumentos no es un número". */
    }
}

// Llamada a la función `manejoErrores`.
manejoErrores();
