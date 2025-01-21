//Ciclo Do While. Este ciclo garantiza que el bloque de código se ejecute al menos una vez.

// Declaración de la variable 'Numero' sin asignar o inicializarla con un valor inicial
let Numero;
do {
    // Solicitar al usuario que ingrese un número del 1 al 15. 
    // La entrada se convierte a un número entero usando parseInt para garantizar comparaciones numéricas correctas.
    Numero = parseInt(prompt(`Rifa Números de 1 al 15.`));
    // Comprueba si el número ingresado no es igual a 5
    if (Numero != 5) {
        // Si el valor ingresado no es igual al que se estableció en la condición, procede a escribir el número ingresado en el documento HTML
        document.write(`Usted digitó el número: ${Numero}<br>`);
    } else {
        // Si el valor ingresado es igual al que se estableció en la condición, obtendra el mensaje de que ha ganado la rifa. 
        document.write(`Perfecto el número correcto era: ${Numero}<br>`, `¡Has ganado la rifa! Puedes reclamar tu premio.<br>`);
    }
    // Continúa el ciclo mientras la variable Numero no sea igual al valor establecido en la condición.
} while (Numero != 5);