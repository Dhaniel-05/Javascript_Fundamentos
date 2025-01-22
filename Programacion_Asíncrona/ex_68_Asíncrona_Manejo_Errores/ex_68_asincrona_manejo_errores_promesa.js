/*Promesas y manejo de errores

Las promesas son una abstracción utilizada para manejar operaciones asincrónicas, proporcionando un enfoque más limpio que los callbacks. Una promesa puede estar en uno de tres estados:

Pendiente (Pending): Inicialmente, cuando la operación asincrónica no ha finalizado.
Cumplida (Fulfilled): Cuando la operación asincrónica se completa con éxito y se devuelve un resultado.
Rechazada (Rejected): Cuando ocurre un error durante la operación y se proporciona una razón (un objeto de error).

El manejo de errores con promesas se realiza mediante el método .catch(), que captura cualquier error que ocurra durante la ejecución de la promesa

function sumar(num1, num2){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(typeof num1!=`number` ||
            typeof num2 != `number`){
                reject(new Error(`Ambos argumentos deben ser números`));
            }else{
                resolve(num1+num2);
            }
        }, 2000)
    })
}
sumar(30,`JS`)
    .then(function(resultado){
        console.log(resultado);
    }).catch(function(error){
        console.log(error);
    });
*/

// Definición de la función `sumar` que devuelve una promesa.
function sumar(num1, num2) {
    return new Promise(function(resolve, reject) {
        /* La función interna recibe dos parámetros: `resolve` y `reject`.
        - `resolve`: Se utiliza para completar exitosamente la promesa.
        - `reject`: Se utiliza para rechazar la promesa con un motivo o error. */

        setTimeout(function() { 
            /* Simula una operación asincrónica con un retraso de 2 segundos. */
            
            // Comprueba si alguno de los argumentos no es un número.
            if (typeof num1 != `number` || typeof num2 != `number`) { 
                /* Si uno o ambos argumentos no son de tipo `number`, rechaza la promesa. */
                reject(new Error(`Ambos argumentos deben ser números`));
                /* `reject` finaliza la promesa con un objeto de error que describe el problema. */
            } else {
                // Si ambos argumentos son números, resuelve la promesa con la suma de los dos valores.
                resolve(num1 + num2); 
                /* `resolve` finaliza la promesa exitosamente y devuelve el resultado de la operación. */
            }
        }, 2000); 
        /* El retraso de 2000 milisegundos representa la duración de la operación asincrónica. */
    });
}

// Llamada a la función `sumar` con un número y una cadena, lo que causará un error.
sumar(30, `JS`)
    .then(function(resultado) { 
        /* `.then()` se ejecuta si la promesa es resuelta exitosamente.
           El parámetro `resultado` contiene el valor devuelto por `resolve`. */
        console.log(resultado); 
        /* Este código no se ejecutará en este caso porque la promesa será rechazada. */
    })
    .catch(function(error) { 
        /* `.catch()` captura cualquier error producido durante la ejecución de la promesa. */
        console.log(error); 
        /* Imprime el mensaje de error devuelto por `reject`. En este caso: 
           "Error: Ambos argumentos deben ser números". */
    });
