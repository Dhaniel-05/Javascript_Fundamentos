/* Ciclo For In.
A diferencia del ciclo for, este ciclo utiliza un rango de vaLores específicos para realizar el bucle, tomando como condición un objeto o algún elemento con un tamaño predefinido tales como: valores enteros, strings, arrays, entre otros.
Es decir, este ciclo For In, solo funciona para variables u objetos que contienen una cantidad de elementos, no para valores enteros o únicos.
*/

let palabra = `Javascript`;
//Para la variable de control X en la variable declarada el ciclo For In va a dar una vuelta por elemento que está instanciada en la variable.
for(let x in palabra){
    //Aquí el sistema en cada vuelta del ciclo, analiza cual es la posición del elemento en la posición correspondiente.
    document.write(`${palabra[x]}`,`<br>`);
}
document.write(`<br>`);

//Saber cuantas vocales tiene la palabra murciélago.
let Palabra = `Murcielagos`;
let vocal = 0; //Aquí se guardarán la cantidad de vocales que se encuentren en la palabra. 
for (let p in Palabra){
    if(Palabra[p]==`a` || Palabra[p]==`e` || Palabra[p]==`i` || Palabra[p]==`o` || Palabra[p]==`u`) /*El ciclo analiza en cada vuelta si la letra es igual a una de las vocales definidas en la búsqueda*/
        {
        vocal++;
    }
}
document.write(`Cantidad de vocales: ${vocal} <br>`);
