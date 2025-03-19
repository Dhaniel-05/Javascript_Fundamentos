// var en JavaScript, se utiliza para declarar variables y su alcance puede ser global o dentro de una función, dependiendo de dónde se declare. Las variables declaradas con var se elevan (hoisting), lo que significa que su declaración se mueve al inicio del contexto en el que se encuentran (global o de función). Una variable declarada con var puede ser re-declarada y re-inicializada sin causar errores, pero esto puede generar comportamientos inesperados. Además, var permite el acceso a la variable antes de su declaración, pero su valor será undefined hasta que se inicialice

var nombre; // se declara una variable
nombre = "Dhaniel"; // se inicializa la variable
var apellido = "Martínez"; // declarar e inicializar la variable

//// En Javascript las instrucciones son case sensitive y esto significa que son sensibles a mayúsculas y minúsculas.

var Nombre; // Declarar variable
Nombre = "Alfonso"; // Inicializar variable
var Apellido = "Payán"; // Declarar e inicializar la variable

var _nombre = "Sebasthian"; // Otra forma de declarar una variable
var NOMBRE = "Chistina"; //Otra forma en upper case
var $_NoMbRe = "Splinter"; // Con esto quiere decirse que no existen limitaciones al declarar una variable

document.write(nombre); //Se le dice al sistema: colocame en mi página web el valor de la variable nombre
document.write(Nombre);
document.write(apellido);
document.write(Apellido);
document.write(_nombre);
document.write(NOMBRE);
document.write($_NoMbRe);

// let en JavaScript, es otra forma de declarar variables. A diferencia de var, las variables declaradas con let tienen alcance de bloque, lo que significa que solo son accesibles dentro del bloque de código donde se declaran (por ejemplo, dentro de un if, for, etc.). Además, let no permite la re-declaración de la misma variable dentro del mismo bloque. Si intentas acceder a una variable declarada con let antes de su inicialización, obtendrás un error.

let saludo = "hola";
let Saludo = "Hola";
let _saludo = "_hola";
let SALUDO = "HOLA";
let $_SaLuDo = "SaLuDo";
document.write(saludo);
document.write(Saludo);
document.write(_saludo);
document.write(SALUDO);
document.write(saludo);
document.write($_SaLuDo);

