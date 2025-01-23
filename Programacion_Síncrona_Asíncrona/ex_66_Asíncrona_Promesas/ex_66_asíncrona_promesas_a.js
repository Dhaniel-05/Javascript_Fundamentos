/* Promesas
Una promesa puede tener tres estados:
- Pendiente: La operación aún no ha terminado.
- Cumplida: La operación terminó exitosamente (llama a `resolve`).
- Fallida: La operación terminó con error (llama a `reject`).
*/

// Creación de una nueva promesa.
let miPromesa = new Promise(function (resolve, reject) {
    // Simulación de una operación asincrónica con setTimeout.
    setTimeout(function () {
        let error = false; /*Este booleando puede ser cambiado para probar diferentes casos.*/
        if (error) {
            reject(`Promesa Fallida`); // Si hay un error, se llama a `reject` para manejar el caso fallido.
        } else {
            resolve(`Promesa Cumplida`); // Si no hay error, se llama a `resolve` para indicar éxito.
        }
    }, 2000 /* Tiempo de espera de 2 segundos para simular asincronía */);
});

// Uso de la promesa.
miPromesa
    .then(function (resultado) {
        // `then` se ejecuta si la promesa se cumple exitosamente.
        console.log(resultado); // Imprime "Promesa Cumplida" si no hubo error.
    })
    .catch(function (error) {
        // `catch` se ejecuta si la promesa falla.
        console.log(error); // Imprime "Promesa Fallida" si hubo un error.
    });


// Creación de una nueva promesa con un error forzado.
let miPromesaError = new Promise(function (resolve, reject) {
    // Simulación de una operación asincrónica con setTimeout.
    setTimeout(function () {
        let error = true; /*Este booleando puede ser cambiado para probar diferentes casos.*/
        if (error) {
            reject(`Promesa Fallida`); // Si hay un error, se llama a `reject`.
        } else {
            resolve(`Promesa Cumplida`); // Si no hay error, se llama a `resolve`.
        }
    }, 4000 /* Tiempo de espera de 4 segundos para simular asincronía */);
});

// Uso de la promesa.
miPromesaError
    .then(function (resultado) {
        // `then` se ejecuta si la promesa se cumple exitosamente.
        console.log(resultado); // No se ejecuta en este caso porque `error` es `true`.
    })
    .catch(function (error) {
        // `catch` se ejecuta si la promesa falla.
        console.log(error); // Imprime "Promesa Fallida" porque `error` es `true`.
    });

/*Explicación:

Creación de la promesa:
Una promesa es un objeto que representa una operación asincrónica.
La función constructora Promise recibe dos argumentos: resolve: Se llama cuando la operación es exitosa. reject: Se llama cuando la operación falla.

Simulación de asincronía:
En ambos ejemplos, se utiliza setTimeout para simular una operación que tarda 2 segundos.
Dependiendo del valor de la variable error, se decide si la promesa se cumple (resolve) o falla (reject).

Uso de then y catch:
then: Maneja el caso exitoso. Recibe como argumento una función que se ejecuta con el resultado de la promesa.
catch: Maneja el caso fallido. Recibe como argumento una función que se ejecuta con el error de la promesa.*/