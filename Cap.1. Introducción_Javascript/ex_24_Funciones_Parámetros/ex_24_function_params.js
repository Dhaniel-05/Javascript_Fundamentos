// Funciones con parámetros

let resultado;

function suma(valor1, valor2) {
    valor1 = parseInt(prompt("Ingrese el primer número:")); // Solicita el primer número y se convierte a número
    valor2 = parseInt(prompt("Ingrese el segundo número:")); // Solicita el segundo número y se convierte a número
    resultado = valor1 + valor2; // Realiza la suma
    document.write(`El resultado es ${resultado} <br>`); // Muestra el resultado
}
// Se invoca la función.
suma();

