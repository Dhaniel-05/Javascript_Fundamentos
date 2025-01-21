/* Ciclo For. 

El ciclo For, es un bucle dinámico y se utiliza cuando se conoce la cantidad de veces que se debe ejecutar el bloque de instrucciones. 

Por ejemplo hacer 10 procesos simultaneamente en el programa.

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
*/

for (let f = 0; /*La variable declarada controla el número de vueltas que va a trabajar el ciclo*/ f<5; /*En esta parte mientras la variable sea menor que la condición establecida, continuará el ciclo hasta que la condición deje de cumplirse. */ f++/*Al colocarle a la variable el operador de incremento ++, se le aumenta el valor a la variable para que en cada vuelta del ciclo se vaya incrementando*/) {
    document.write(`Vuelta No. ${f} `, `<br>`); /*Se imprime el valor de la variable con un salto de línea*/
}
document.write(`Fin del Ciclo For `, `<br>`);
document.write(`<br>`);

//Ciclo para los números pares
document.write(`Ciclo de números pares del 1 al 20.`, `<br>`);
for (let x = 2; x <=20; x+=2) {
    document.write(`Valor de x= ${x}`,`<br>`);
}
document.write(`Fin del Ciclo de los Números Pares `, `<br>`);
document.write(`<br>`);

//Ciclo viendo un valor específico
document.write(`Ver un valor específico del bucle.`, `<br>`);
for (let y = 1; y <=20; y+=2) {
    if(y===15){
        document.write(`El valor aquí es = ${y} `,`<br>`);
    }
}
document.write(`Fin del Ciclo mostrando el valor solicitado `, `<br>`);
document.write(`<br>`);

//Recorrer un Array con el Ciclo For
document.write(`Recorrer un Array con el Ciclo For.`, `<br>`);
const frutas = [`Manzanas`, `Peras`, `Mandarinas`, `Fresas`,`Moras`]; /*El ciclo va a ver que, mientras la variable declarada e inicializada valga menos que el tamaño completo del Array, mantendrá ejecutandose hasta que recorra todos los elementos del Array*/
for (a = 0; a < frutas.length; a++){
    document.write(`Posición de la Fruta en el Array; ${a} `,`= `, frutas[a],`<br>`);
}
document.write(`Fin del Ciclo que recorrió un Array de Frutas `, `<br>`);
document.write(`<br>`);
