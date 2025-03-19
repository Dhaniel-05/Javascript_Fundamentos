/*Arrays o Arreglos

Un Array es una estructura de datos que se utiliza para almacenar una colección ordenada de elementos; estos elementos puedesn ser cadenas de texto, valores numéricos, valores booleanos, entre otros. Igualmente podrían ser un conjunto de funciones e inclusive otros arrays.

Características de los Arrays en Javascript:
1. Contienen índices numéricos. (Un array almacena elementos en posiciones numéricas llamadas índices, siendo el primer elemento la posición ó índice 0, el segundo elemento corresponde al índice 1, el tercer elemento corresponde al índice 2, y así sucesivamente).
2. Longitud dinámica. (Pueden crecer o reducirse dinámicamente en función de la cantidad de elementos que contengan).
3. Tienen heterogeneidad. (Contienen elementos de diferentes tipos de dato en la misma estructura; números, cadenas, entre otros).

*/

//Declaración de un array vacío
let numeros =[];
//Llenar array con elementos, cada elemento dentro de un array se separa con coma.
numeros =[15,80,650,50.30,-10];
document.write(`Elementos: `, numeros);
document.write(`<br>`);
//También un array puede crearse directamente sin declarar let es decir directamente
Numeros = [5,10,15,30,-3,84];
document.write(`Elementos: `, Numeros);
document.write(`<br>`);

//Visualizar uno o alguno de los elementos del array según parámetro o índice indicado
document.write(`Elemento discriminado: `, numeros[3]);
document.write(`<br>`);
document.write(`Elemento discriminado: `, Numeros[0]);
document.write(`<br>`);

//Cambiar un elemento del array indicando el índice de posición y/o ubicación existente y el valor del elemento a cambiar
numeros [3] = 84;
document.write(`Cambio de un elemento: `, numeros);
document.write(`<br>----------------------------`);
document.write(`<br>`);

//Array con valores de tipo texto o string
let frutas = [`Manzanas`,`Peras`,`Mandarinas`,`Naranjas`,`Kiwi`];
document.write(`Diversas frutas: `, frutas);
document.write(`<br>`);

//Métodos de los Arrays

//Ver cantidad de elementos
document.write(`Cantidad: `, frutas.length);
document.write(`<br>`);

//Conocer último elemento del array
/*El .length da la cantidad total de elementos del array, si se le antepone el menos uno, como resultado el sistema busca la cantidad completa de elementos y le resta uno yendo a la posición final de los elementos así:
Numeros = [5,10,15,30,-3,84];
La variable Numeros contiene 6 elementos donde sus índices van del 0 al 5, por lo tanto, al contar los elementos obtendremos 6 -1 = 5 obteniendo como resultado la posición 5 del índice que será igual a 84.
*/
document.write(`Último elemento: `, Numeros[Numeros.length-1]);
document.write(`<br>`);

//Formatear tipo de datos en un array de tipo entero a string o texto
document.write(`Convertir en cadenas de texto: `, numeros.toString());
document.write(`<br>`);

//Unir tipos de Arrays con la función .concat
let letras = [`a`,`b`,`c`,];
let numero =[1,3,5];
document.write(`Alafanumérico: `, letras.concat(numero))
document.write(`<br>`);

//Eliminar el último elemento de un array utilizando la función .pop
numeros.pop();
document.write(`Elementos: `, numeros);
document.write(`<br>`);

//Agregar un elemento al final de un array utilizando la función .push y el elemento a agregar al final del array.
numeros.push(-5);
document.write(`Elementos: `, numeros);
document.write(`<br>`);

//Eliminar el primer elemento de un array utilizando la función .shift
numeros.shift();
document.write(`Elementos: `, numeros);
document.write(`<br>`);

//Insertar un elemento al inicio de un array utilizando la función .unshift y el elemento a agregar al inicio del array. Obviamente cambia el orden de los índices del array.
numeros.unshift(12);
document.write(`Elementos: `, numeros);
document.write(`<br>`);

//Eliminar elementos a partir de un parámetro específico de ubicación o índice en un Array. El primer parámetro recibe la posición y el segúndo parámetro recibe la cantidad de elementos a eliminar. En este caso la variable numeros contiene los siguientes elementos: 12,80,650,84,-5 por lo tanto el resultado es 12,-5 dado que, elimina 3 elementos desde la posición 1.
numeros.splice(1,3);
document.write(`Elementos: `, numeros);
document.write(`<br>`);

//Copiar elementos de un Array con la función .slice recibe dos parámetros el primero el índice o ubicación del elemento y el segundo parámetro la cantidad de elementos a mostrar con excepción del último
let cantidades = [100,200,500,600,900];
let copia = cantidades.slice(1,4); //En este caso el resultado es 200,500,600 y el 900 que es el 4 elemento no se mostrará
document.write(`Copia de un array: `, copia);
document.write(`<br>`);

//Función .sort organiza los elementos de un array alfabéticamente
let abecedario = [`A`,`X`,`Z`,`C`,`D`,`B`,`R`,`S`,`W`,`K`,`T`,];
document.write(abecedario);
document.write(`<br>`);
document.write(abecedario.sort());
document.write(`<br>`);

//Función .reverse organiza los elementos de un array alfabéticamente pero en inversa; es decir, al revés del último al primero.
document.write(abecedario.reverse());
document.write(`<br>`);

//Crear un array con valores inalterables, para ello se utiliza la palabra reservada const que sería constante y esta no puede ser alterada en sus elementos definidos
const autos=[`BMW`,`Audi`,`Chevrolet`,`Mazda`,`Ferrari`,`Ford`,];
document.write(`Automóviles: `, autos);
document.write(`<br>`);

//Intentar reeplazar un valor del array autos
// autos = [0]=`Campero`;
// document.write(`Automóviles: `, autos);
// document.write(`<br>`);