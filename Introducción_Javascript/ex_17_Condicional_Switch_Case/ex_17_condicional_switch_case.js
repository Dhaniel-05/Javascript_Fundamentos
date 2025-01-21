/* Condicional Switch - Case

El switch es una estructura de control utilizada para tomar decisiones basadas en el valor de una expresión.
Es útil cuando se desea comparar un mismo valor con múltiples casos posibles y ejecutar un bloque de código
según el caso que coincida.

Es una alternativa al uso de múltiples declaraciones if-else, lo que puede hacer el código más legible y
fácil de mantener cuando se tienen varias opciones a evaluar.

Cada caso dentro de un switch debe finalizar con una instrucción 'break' para evitar que el flujo de
ejecución continúe en los siguientes casos, a menos que se desee un comportamiento de ejecución continua (fall-through).

El fall-through en un switch se refiere a cuando, al no incluir una instrucción break al final de un caso, el flujo de ejecución continúa automáticamente hacia el siguiente caso, sin importar si las condiciones de los siguientes casos se cumplen o no. Esto significa que todos los bloques de código debajo del caso coincidente se ejecutarán hasta encontrar un break o hasta que finalice el switch.

Según la sintáxis

switch (key) {
    case value:

        break;

    default:
        break;
}

* switch (key) evalúa el valor de key.
* case value: se ejecuta si key coincide con value.
* break; evita que el código caiga en los siguientes case (fall-through).
* default: se ejecuta si ningún case coincide con key.

*/

let valor;
valor = parseInt(prompt(`Ingrese valor entre 1 y 3`));

switch (valor) {
    case 1:
        document.write(`Ingresó el número uno `, valor);
        break;
    case 2:
        document.write(`Ingresó el número dos `, valor);
        break;
    case 3:
        document.write(`Ingresó el número tres `, valor);
        break;
    default:
        document.write(`El número está fuera del rango o no es un número válido`);
        break;
}

document.write(`<br>`)

let color;
color = prompt(`Ingrese uno de estos colores: Rojo, Verde o Azul`);

switch (color) {
    case `Rojo`: //Tener en cuenta de que si no se ingresa el color como está escrito el switch irá al default
        document.write(`Ingresó el color Rojo `, color);
        break;
    case `Verde`:
        document.write(`Ingresó el color Verde `, color);
        break;
    case `Azul`:
        document.write(`Ingresó el color Azul `, color);
        break;
    default:
        document.write(`El color ingresado no es el que debío ingresar`);
        break;
}
