// Cadenas de Texto
/* Se puede traer texto en la página web con comillas simples o comillas dobles */

let txt1 ='Javascript'; //Forma uno con comillas simples
document.write(txt1);
document.write('<br>');

let txt2 ="Javascript"; //Forma dos con comillas dobles
document.write(txt2);
document.write('<br>');

/*Para resaltar un texto entre comillas en JavaScript, es importante entender cómo el lenguaje interpreta las comillas. La regla de programación de JavaScript analiza que cualquier contenido que se encuentre entre comillas se considera un string o cadena de texto, y por lo tanto, debe ser tratado como tal. Para incluir un texto que contenga comillas dentro de un string, se debe utilizar el tipo de comillas opuesto a las que se han utilizado inicialmente.*/

let txt3 = "Eso es la 'verdad' de todo"; // Primera forma: comillas dobles para el string y comillas simples para el texto interno
document.write(txt3);
document.write('<br>');

let txt4 = 'Eso es la "verdad" de todo'; // Segunda forma: comillas simples para el string y comillas dobles para el texto interno
document.write(txt4);
document.write('<br>');
document.write('<br>');

/*Para trabajar con textos de más de una línea en la página web*/

// Concatenación tradicional con el operador '+'.
let txt5 = 'Esto es una cadena de texto bastante larga'+ ' ' + 'que necesita ser dividida en varias líneas,' +' '+ 'de lo contrario, el código es ilegible'; //En este caso se están concatenando varias líneas de cadena de texto en una sola línea de código
document.write(txt5);
document.write('<br>');
document.write('<br>');

// Utilizar el backslash (\) para dividir líneas largas.
let txt6 = 'Esto es una cadena de texto bastante larga \ que necesita ser dividida en varias líneas, \ de lo contrario, el código es ilegible'; //Para hacer saltos de línea en el código es muchísimo más facil utilizar el backslash inverido (\) realmente útil y más rápido que concatenar
document.write(txt6);
document.write('<br>');
document.write('<br>');

/* También se puede usar el backslash (\) junto con la etiqueta <br> para hacer saltos de línea */
let txt7 = 'Esto es una cadena de texto bastante larga \ <br> que necesita ser dividida en varias líneas, \ <br> de lo contrario, el código es ilegible'; //Para hacer saltos de línea en el código es muchísimo más facil utilizar el backslash inverido (\) y también se puede utilizar la etiqueta br para los saltos de línea.
document.write(txt7);
document.write('<br>');
document.write('<br>');

// Otra opción mucho más actual es utilizar Template Literal que son las comillas invertidas o conocidas tambien como backticks (``), estas permiten colocar alguna palabra del texto interno entre comillas y además de facilitar la concatenación de variables y el uso de saltos de línea sin el backslash.
let txt8 = `Esto es una cadena de texto bastante "larga" <br>
que necesita ser dividida en varias líneas, <br>
de lo contrario, el código es ilegible.`; // Uso de la etiqueta <br> dentro del template literal y de las comillas para resaltar una palabra de la cadena de texto.
document.write(txt8);
document.write('<br>');

