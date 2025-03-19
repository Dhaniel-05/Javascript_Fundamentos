/* Funciones con return 
la palabra reservada return se utiliza para devolver un valor, este valor es devuelto por la función que puede ser de cualquier tipo de dato, bien sea un número entero, decimal o un string, un objeto, un array, entre otros. 
*/

function suma() {
    let a = parseInt(prompt(`Ingrese el primer número:`)); // Solicita el primer número
    let b = parseInt(prompt(`Ingrese el segundo número:`)); // Solicita el segundo número
    return a + b; // Devuelve la suma de los números ingresados
}
// Llamada a la función y muestra del resultado
document.write(`El resultado de la suma es: ${suma()} <br>`); 
document.write(`<br>`);

//Función saludar con return
function saludar() {
    // La función `saludar` devuelve un mensaje de saludo como una cadena de texto.
    return `¡Hola a todo el mundo!`; 
}
// Se declara una variable `mensaje` que almacenará el valor devuelto por la función `saludar`.
var mensaje = saludar(); 
//Se imprime el contenido de la variable mensaje
document.write(mensaje); 
document.write(`<br>`);
document.write(`<br>`);

// Función que retornará un color dependiendo del valor que elija el usuario.
function verColor(valor) {
    // Solicita al usuario ingresar un número entre 1 y 3 mediante un prompt.
    // El valor ingresado se convierte a entero con `parseInt`.
    valor = parseInt(prompt(`Ingrese un número entre 1 y 3 para activar el semáforo:`));
    
    // Estructura de control `switch` que evalúa el valor ingresado.
    switch (valor) {
        case 1:
            // Si el valor es 1, devuelve "Rojo".
            return `Rojo`;
        case 2:
            // Si el valor es 2, devuelve "Verde".
            return `Verde`;
        case 3:
            // Si el valor es 3, devuelve "Amarillo".
            return `Amarillo`;
        default:
            // Si el valor no coincide con ninguno de los casos anteriores, devuelve un mensaje de error.
            return `Ha ingresado un número incorrecto`;
    }
}
// Invoca la función `verColor` e imprime el resultado.
document.write(verColor());
document.write(`<br>`);
