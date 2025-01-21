/*Funciones String en Javascript

Las funciones de cadena (string), son funciones integradas en el lenguaje de programación que permiten manipular y modificar texto de acuerdo con las necesidades del programador.

Para invocar o llamar a una función se antepone el punto a la variable y luego se despliega el listado de opciones de las cuales a continuación están a disposición las siguientes funciones:

.length: Esta propiedad permite obtener la cantidad total de caracteres almacenados en una variable o en una cadena de texto.

.slice: Esta función permite extraer una parte de una cadena de texto especificando un rango, siendo el primer parámetro el que indica la posición inicial (índice) desde donde se comenzará a extraer, y el segundo parámetro define el índice hasta el cual se tomará la cadena (sin incluirlo). Por ejemplo, .slice(0, 4); extraerá los caracteres desde la posición 0 hasta la 3, mostrando las letras que están dentro de ese rango.
Por otra parte .slice() permite el uso de índices negativos. Un índice negativo cuenta desde el final de la cadena. Por ejemplo, .slice(-3) devolverá los 3 últimos caracteres.
Ejemplo: "Hello World".slice(-5);      // Resultado: "World"
Es importante el orden de los parámetros con .slice(); si el segundo parámetro (fin) es menor que el primero (inicio), devolverá una cadena vacía.
Ejemplo: "Hello World".slice(7, 5);        // Resultado: "" (cadena vacía)

.substring: Esta función permite extraer una parte de una cadena de texto especificando un rango, siendo el primer parámetro el que indica la posición inicial (índice) desde donde se comenzará a extraer, y el segundo parámetro define el índice hasta el cual se tomará la cadena (sin incluirlo). Por ejemplo, .slice(0, 4); extraerá los caracteres desde la posición 0 hasta la 3, mostrando las letras que están dentro de ese rango.
Sin embargo, .substring() No permite el uso de índices negativos, así pues si se proporciona un valor negativo, este lo convertira a 0 y no realizará ningun tipo de operación.
Ejemplo: "Hello World".substring(-5);  // Resultado: "Hello World" (convierte -5 en 0)
Es importante el orden de los parámetros con .substring(); Si el segundo parámetro es menor que el primero, intercambiará automáticamente los valores y funcionará como si estuvieran en orden.
Ejemplo: "Hello World".substring(7, 5);    // Resultado: "Wo" (intercambia los valores)

Uso típico:
Ambas funciones son bastante similares en la mayoría de los casos y pueden ser usadas indistintamente, pero .slice() tiende a ser más flexible debido a su capacidad para manejar índices negativos.

Que hacer?
Utiliza .slice() si necesitas trabajar con índices negativos o prefieres más flexibilidad.
Utiliza .substring() si prefieres intercambios automáticos de índices en caso de error, pero ten en cuenta que no soporta negativos.

.replace: Esta función permite sustituir una parte de una cadena de texto por otra especificada. Este método toma dos parámetros: El valor a buscar que puede ser una cadena de texto o una expresión regular que identifique la parte del texto que se quiere reemplazar y el el valor de reemplazo con lo que la nueva cadena sustituirá la parte encontrada.

.toUpperCase: convierte todos los caracteres de una cadena de texto a mayúsculas y devuelve una nueva cadena con el texto modificado. No altera el valor original de la cadena, sino que crea una nueva versión en mayúsculas.

.toLowerCase: convierte todos los caracteres de una cadena de texto a minúsculas y devuelve una nueva cadena con el texto modificado. No altera el valor original, sino que crea una nueva versión de la cadena en minúsculas.

.concat: se utiliza para unir dos o más cadenas de texto y devolver una nueva cadena resultante de la concatenación. No modifica ninguna de las cadenas originales, sino que crea una nueva cadena con los textos combinados.

.trim: elimina los espacios en blanco al principio y al final de una cadena de texto. No modifica la cadena original, sino que devuelve una nueva cadena sin los espacios extra en los extremos.

.trimStart: elimina los espacios en blanco únicamente al inicio de una cadena de texto. Devuelve una nueva cadena con los espacios al principio eliminados, pero no modifica la cadena original.

.split: este método divide una cadena de texto en partes, separándola en función de un delimitador especificado, y devuelve un array con las secciones resultantes. El delimitador puede ser una cadena de texto o una expresión regular, sin embargo, lo que se desea dividir debe de escribirse igual al declarado en la variable.
*/

let palabra = "Javascript";
document.write("El texto es: ", palabra);
document.write("<br>");

// Tamaño de un texto
document.write("Cantidad de letras: ", palabra.length);
document.write("<br>");

// Extracción de caracteres usando slice (primeros 4 caracteres)
document.write("Extracción de caracteres: ", palabra.slice(0, 4));
document.write("<br>");

// Extracción de los últimos 3 caracteres usando slice con índice negativo
document.write("Extracción de caracteres: ", palabra.slice(-3));
document.write("<br>");

// Extracción de caracteres usando substring (primeros 4 caracteres)
document.write("Extracción de caracteres: ", palabra.substring(0, 4));
document.write("<br>");

// Intento de extracción con índice negativo usando substring (convierte el índice negativo a 0, No realiza operación alguna devolviendo todo el texto completo)
document.write("Extracción de caracteres: ", palabra.substring(-3));
document.write("<br>");

/*Cambiar valores en un texto.
Primero, se declara la variable saludo con el valor "Hola Mundo", y este valor se imprime en la página web.
Luego, se utiliza el método .replace() para cambiar una parte del texto. En este caso, se reemplaza "Hola" por "Chao".
El resultado del cambio se asigna de nuevo a la variable saludo, y el nuevo valor "Chao Mundo" se imprime en la página web.*/
let saludo = `Hola Mundo`;
document.write(saludo);
document.write("<br>");

saludo = saludo.replace(`Hola`,`Chao`);
document.write(saludo);
document.write("<br>");

//Convertir un texto en mayúscula sostenida
document.write(palabra.toUpperCase());
document.write("<br>");

//Convertir un texto en minúsculas
document.write(palabra.toLowerCase());
document.write("<br>");

//Unir o concatenar texto
let texto = `Curso de `;
document.write(texto.concat(palabra));
document.write("<br>");

let texto2 = `     Hola     saludos     cordiales     `;
document.write(texto2);
document.write("<br>");

//Elimina espacios en blanco al inicio de una cadena de texto
document.write(texto2.trimStart());
document.write("<br>");

//Elimina espacios en blanco al final de una cadena de texto
document.write(texto2.trimEnd());
document.write("<br>");

//Elimina espacios en blanco de una cadena de texto
document.write(texto2.trim());
document.write("<br>");

//Cortar cantidad de carácteres de una palabra
document.write(palabra.split(`script`));
document.write("<br>");
document.write(palabra.split(`Java`));
document.write("<br>");

