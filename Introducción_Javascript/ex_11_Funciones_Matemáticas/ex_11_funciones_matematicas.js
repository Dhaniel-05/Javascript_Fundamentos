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
document.write('El valor aleatorio o random calculado es: ', aleatorio);
document.write('<br>');

//Se declara e inicializa la variable para calcular un valor aleatorio colocando un rango específico
var aleatorio = Math.floor(Math.random()*(15 - 5 + 1) + 5);
document.writeln('El valor aleatorio calculado entre el 15 y 5 es: ', aleatorio);
document.writeln('<br>');

/* Para este caso a traves de este esquema de fórmula sucede lo siguiente:
Math.floor(Math.random() * (Max - Min + 1) + Min);

1. Math.random()genera un número decimal entre 0y 1(incluye 0, pero nunca 1). Puede generar valores como 0.0, 0.5, 0.9999999, pero nunca exactamente 1.

2. Se multiplica el random generado por (Max - Min + 1), lo que da el tamaño del rango de números posibles. En este caso: 15 - 5 + 1 = 11, lo que significa que Math.random()se escalará a un valor entre 0 y 10.9999999.

3. Se suma Min para desplazar el rango. Antes de sumar Min, los valores estan entre 0y 10.9999999. Posteriormente, al sumar 5, ahora los valores estarán entre 5y 15.9999999. 

4. Math.floor()redondea hacia abajo para asegurar de obtener solo números enteros. Sin Math.floor(), se obtendrían decimales. Con Math.floor(), cualquier valor entre 5.000000 y 5.999999 se convierte en 5, entre 6.000000 y 6.999999 se convierte en 6, y así sucesivamente hasta 15. 

5. El + 1 en (Max - Min + 1) se utiliza para incluir el límite superior (Max). Sin el + 1, Math.random() solo podría generar números hasta Max - 1. El + 1 permite que Math.random() * (Max - Min + 1) llegue hasta Max, garantizando que Max sea una posibilidad al hacer Math.floor().

Ejemplo:

Si Math.random() genera 0.999999, el cálculo es: 
Math.floor(0.999999 * (15 - 5 + 1) + 5);
1. 0.999999 * 11 = 10.99999
2. 10.99999 + 5 = 15.99999
3. Math.floor(15.99999) = 15✅
Esto confirma que 15 puede ser generado.

Si Math.random()se genera 0, el cálculo es:
Math.floor(0 * (15 - 5 + 1) + 5);
1. 0 * 11 = 0
2. 0 + 5 = 5
3. Math.floor(5) = 5✅
Esto confirma que 5 puede ser generado.
*/

var aleatorio = Math.floor(Math.random() * 6); // Genera valores entre 0 y 5, de manera uniforme
document.write('El valor aleatorio entero calculado entre 0 y 5 es: ', aleatorio);
document.write('<br>');

//Se declara e inicializa la variable para calcular la raíz cuadrado de un número.
var raiz = Math.sqrt(81);
document.write('La raíz cuadrada del valor calculado es: ', raiz);
document.write('<br>');

