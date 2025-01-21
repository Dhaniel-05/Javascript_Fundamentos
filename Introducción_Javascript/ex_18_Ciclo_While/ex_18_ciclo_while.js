/* Condicional While.
Es una estructura de control de bucle, es decir, que realiza procesos uno tras otro mientras una condición específica se cumple. Cuando esa condición deja de cumplirse, el bucle deja de ejecutarse y el código continúa su curso.
*/
document.write(`Ciclo While`);
document.write(`<br>`);
let x; //Declarar variable
x = 1; //Inicializar variable

// while (condition) {
    
// } //En la condición parametrizamos que mientras la variable sea menor que 10 estará dentro del ciclo o bucle. 

while (x < 10) {
    document.write(`Vuelta número `, x);
    document.write(`<br>`);
    x++;
    //x+=1;
    //x=x+1;
}
document.write(`Fin del ciclo`);
document.write(`<br>`);

let r = 10;
while (r>=0) {
    document.write(`Vuelta número `, r);
    document.write(`<br>`);
    r--;
}
document.write(`Fin del ciclo`);
document.write(`<br>`);

// Ejercicio de análisis: Se le pide a un usuario que digite unos valores. 
let a = 1;
let suma = 0;
let valor;
//En la condición se asigna que la variable 
while(a <= 5){
    valor = parseInt(prompt(`Ingrese un valor`));
    suma = suma + valor;
    a++;
}
document.write(`La suma es: `, suma, `<br>`);

/* 
El valor ingresado por el usuario (por ejemplo, 200) no afecta directamente la condición del ciclo. La condición a <= 5 únicamente depende del valor de a, no del valor que ingresa el usuario. Veamos el proceso detalladamente:

El ciclo está controlado por a:
La condición a <= 5 evalúa si el contador a sigue siendo menor o igual a 5. Mientras esta condición sea verdadera, el ciclo continuará ejecutándose.
Por ejemplo:
Iteración 1: a = 1, la condición a <= 5 es verdadera → El ciclo se ejecuta.
Iteración 2: a = 2, la condición a <= 5 es verdadera → El ciclo se ejecuta.
Esto continúa hasta que a = 6, momento en el cual a <= 5 es falsa y el ciclo termina.
El valor ingresado por el usuario (valor):

Este valor (valor) no tiene ningún impacto en la condición a <= 5. El ciclo no verifica ni limita el rango del número que el usuario puede ingresar.
En cada iteración, lo único que pasa con valor es que se suma a suma. Por ejemplo:
Si ingresas 200, el programa simplemente calcula suma = suma + 200.
Si ingresas un número negativo, el programa también lo suma.
¿Por qué el ciclo continúa si ingresas 200?

El ciclo no está condicionado por el valor de valor, solo está controlado por el contador a. Ingresar 200, o cualquier otro valor, no modifica la lógica de control del ciclo porque el programa no verifica si ese valor cumple alguna regla. 
*/