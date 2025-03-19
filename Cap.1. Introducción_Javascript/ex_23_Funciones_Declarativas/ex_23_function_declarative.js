/*
Funciones. 

Las funciones son bloques de código que realizan tareas específicas. Permiten encapsular lógica en una unidad reutilizable, lo que ayuda a:

Modularizar el código : Dividir programas grandes en piezas más pequeñas y manejables.
Mejorar la legibilidad : Facilitar la comprensión y mantenimiento del código.
Reutilizar código : Evitar la repetición al usar una función en diferentes partes del programa.
Además, las funciones en JavaScript pueden aceptar parámetros (datos de entrada) y devolver un resultado . Esto las hace muy versátiles para resolver problemas de forma dinámica 

Tipos de funciones en JavaScript

Funciones declarativas : Se definen con la palabra clave functiony tienen un nombre.
function saludar() {
    console.log("Hola, mundo!");
}
saludar(); // Llama a la función y muestra: Hola, mundo!

Funciones anónimas : Son funciones sin nombre que suelen asignarse a una variable.
const despedir = function() {
    console.log("Adiós, mundo!");
};
despedir(); // Llama a la función y muestra: Adiós, mundo!

Funciones flecha (Arrow Functions) : Introducidas en ES6, son una forma más concisa de escribir funciones.
const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // Muestra: 5

Funciones como métodos : Cuando una función se define dentro de un objeto, se llama método.
const persona = {
    nombre: "Daniel",
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
persona.saludar(); // Muestra: Hola, soy Daniel

Se debe tener en cuenta que las funciones se invocan .
La diferencia entre definir una función y ejecutarla es que, si se llama a una función sin paréntesis , simplemente se está haciendo referencia a la función. Esto es útil cuando se desea asignarla a una variable o pasarla como argumento a otra función.

Para invocar la función y ejecutar el código dentro de ella, es necesario colocar los paréntesis ()al final del nombre de la función.

También es importante tener en cuenta que dentro de una función se puede invocar otra función. 
------------------------------------
Funciones:
Las funciones son bloques de código que realizan tareas específicas o calculan valores.
Para calificar como una función en sentido estricto, deben:
Tomar alguna entrada (opcional, a través de parámetros).
Devolver una salida (aunque no es obligatorio en todos los lenguajes o casos prácticos).

Métodos:
Un método es una función que está asociada a un objeto específico.
Los métodos están ligados al contexto del objeto y se llaman como parte de ese objeto, utilizando la notación de punto (por ejemplo, objeto.metodo()).
Operan sobre las propiedades o comportamientos del objeto al que pertenecen, es decir, tienen acceso al estado interno del objeto mediante la palabra clave this (en JavaScript).

Conclusión: Un método es esencialmente una función que:
Está vinculada a un objeto.
Interactúa con las propiedades o atributos de ese objeto para realizar su tarea.
*/

//Funciones declarativas.

function saludo(){
    document.write(`Hola Mundo`);
    document.write(`<br>`);
    texto();
}
saludo();
document.write(`<br>`);

function despedida(){
    document.write(`Chao Mundo`);
}
despedida();
document.write(`<br>`);

function texto(){
    document.write(`¡Hoy es un grandioso día!`)
}