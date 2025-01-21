
// Creación de la primera promesa (promesa1).
let promesa1 = new Promise(function (resolve, reject) {
    // Simulación de una operación asincrónica con un temporizador de 5 segundos.
    setTimeout(resolve, 5000, `El Anfitrión llega y realiza un saludo a todos.`);
    // El tercer argumento de setTimeout (`El Anfitrión llega y realiza un saludo a todos.`) 
    // se pasa como argumento a la función `resolve` cuando se cumple la promesa.
});

// Creación de la segunda promesa (promesa2).
let promesa2 = new Promise(function (resolve, reject) {
    // Simulación de una operación asincrónica con un temporizador de 10 segundos.
    setTimeout(resolve, 10000, `El Anfitrión da unas palabras de bienvenida y se despide.`);
    // Similar a promesa1, pero se resuelve después de 10 segundos con un mensaje.
});

// Uso de Promise.all para esperar a que ambas promesas se cumplan.
Promise.all([promesa1, promesa2]).then(function (valores) {
    // `Promise.all` recibe un array de promesas. Se resuelve solo cuando TODAS las promesas
    // del array se cumplen. Si alguna falla, el método `catch` manejará el error.
    
    // `valores` es un array que contiene los resultados de las promesas en el mismo orden
    // en que aparecen en el array original ([promesa1, promesa2]).
    console.log(valores[0], valores[1]);
    // Imprime:
    // "El Anfitrión llega y realiza un saludo a todos."
    // "El Anfitrión da unas palabras de bienvenida y se despide."
    // Esto se ejecutará después de que ambas promesas hayan terminado (10 segundos como máximo).
});

// Mensaje síncrono que se ejecuta inmediatamente.
console.log(`Los invitados han llegado`);
// Este mensaje se imprime primero porque es síncrono y no depende de ninguna promesa.
