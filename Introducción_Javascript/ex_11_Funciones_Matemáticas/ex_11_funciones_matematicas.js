/* Funciones Matemáticas Utilizando la clase Math. Esta clase contiene funciones matemáticas que permiten permiten realizar operaciones dentro del código.

Al ser una clase si utilizamos la palabra servada Math. El punto traerá las operaciones matemáticas dispobibles.

Funciones de redondeo.
Math.round es la función y/o método para el redondeo de cifras dependiendo del decimal
Math.ceil es la función y/o método para el redondeo de cifras sin depender del decimal
Math.floor es la función y/o método para el redondeo de cifras sin depender del decimal manteniendo el valor

Funciones trigonométricas esenciales en la geometría y el cálculo de ángulos y triángulos.
Math.sin es la función y/o método para el cálculo del Seno de un ángulo.
Math.cos es la función y/o método para el cálculo del Coseno de un ángulo.
Math.tan es la función y/o método para el cálculo de la Tangente de un ángulo.

Funciones exponenciales.
Math.exp es la función y/o método para el cálculo del exponencial de un número.
Math.pow es la función y/o método para el cálculo del exponente de un número.
Math.log es la función y/o método para simplificar operaciones con números muy grandes o muy pequeños. Por ejemplo, en la escala logarítmica, como la escala Richter para medir terremotos o el pH en química.

Funciones de cálculo absoluto, máximo y mínimo.
Math.abs es la función y/o método para calcular el valor absoluto de un número dado.
Math.max es la función y/o método para calcular el valor máximo de una secuencia numérica.
Math.min es la función y/o método para calcular el valor mínimo de una secuencia numérica.
Math.random es la función y/o método para calcular un valor aleatorio con rango o sin rango estipulado.

Funciones de raíz.
Math.sqrt es la función y/o método para calcular la raíz cuadrada de un número.

*/

//Se declara e inicializa la variable con un valor decimal y el round la vuelve entero
var precio = Math.round(399.53);
document.write('Precio redondeado: ', precio);
document.write('<br>');
//Tener en cuenta que el redondeo se da así: luego del .5 incrementa y por debajo del .5 decrementa
var precio = Math.round(399.43);
document.write('Precio redondeado: ', precio);
document.write('<br>');

//Se declara e inicializa la variable con un valor decimal y el ceil la vuelve entero
var precio = Math.ceil(299.83);
document.write('Precio redondeado: ', precio);
document.write('<br>');
//Tener en cuenta que el redondeo se da al entero más cercano sin importar el decimal
var precio = Math.ceil(299.28);
document.write('Precio redondeado: ', precio);
document.write('<br>');

//Se declara e inicializa la variable con un valor decimal y el floor la vuelve entero
var precio = Math.floor(540.93);
document.write('Precio redondeado: ', precio);
document.write('<br>');
//Tener en cuenta que el redondeo se da sin importar el decimal y mantiene el valor declarado
var precio = Math.floor(540.28);
document.write('Precio redondeado: ', precio);
document.write('<br>');

//Se declara e inicializa la variable con un valor para calcular el seno de un ángulo
var seno = Math.sin(45);
document.write('El valor del seno calculado es: ', seno);
document.write('<br>');

//Se declara e inicializa la variable con un valor para calcular el coseno de un ángulo en un triángulo rectángulo
var coseno = Math.cos(45);
document.write('El valor del coseno calculado es: ', coseno);
document.write('<br>');

//Se declara e inicializa la variable con un valor para calcular la tangente entre el cateto opuesto y el cateto adyacente en un triángulo rectángulo
var tangente = Math.tan(45);
document.write('El valor del tangente calculado es: ', tangente);
document.write('<br>');

//Se declara e inicializa la variable con un valor para calcular el exponencial de un número
var expo = Math.exp(2);
document.write('El exponencial calculado es: ', expo);
document.write('<br>');

//Se declara e inicializa la variable con un valor para calcular el exponente de un número dentro de un rango estipulado
var expont = Math.pow(4,2); // Esto sería 4 elevado a la 2.
document.write('El exponente calculado es: ', expont);
document.write('<br>');

//Se declara e inicializa la variable con un valor para calcular el logaritmo de un número
var logaritmo = Math.log(10);
document.write('El logaritmo calculado es: ', logaritmo);
document.write('<br>');

//Se declara e inicializa la variable con un valor para calcular el valor absoluto de un número
var absoluto = Math.abs(-10);
document.write('El valor absoluto calculado es: ', absoluto);
document.write('<br>');

//Se declara e inicializa la variable para calcular el valor máximo de una secuencia numérica
var maximo = Math.max(10, 50, 600, 1, 8);
document.write('El valor máximo de la secuencia numérica es: ', maximo);
document.write('<br>');

//Se declara e inicializa la variable para calcular el valor mínimo de una secuencia numérica
var minimo = Math.min(10, 50, 600, 1, 8);
document.write('El valor mínimo de la secuencia numérica es: ', minimo);
document.write('<br>');

//Se declara e inicializa la variable para calcular un valor aleatorio dejando vacío para que lo realice sin especificar un rango
var aleatorio = Math.random();
document.write('El valor aleatorio calculado es: ', aleatorio);
document.write('<br>');

//Se declara e inicializa la variable para calcular un valor aleatorio colocando un rango específico
var aleatorio = Math.random(5,6);
document.write('El valor aleatorio calculado entre el rango es: ', aleatorio);
document.write('<br>');

//Se declara e inicializa la variable para calcular un valor aleatorio colocando un rango específico y redondeando el valor
var aleatorio = Math.round(Math.random()*5); //Significa que el valor aleatorio estará en el rango que va de cero hasta cinco.
document.write('El valor aleatorio entero calculado entre el rango es: ', aleatorio);
document.write('<br>');

//Se declara e inicializa la variable para calcular la raíz cuadrado de un número.
var raiz = Math.sqrt(81);
document.write('La raíz cuadrada del valor calculado es: ', raiz);
document.write('<br>');

