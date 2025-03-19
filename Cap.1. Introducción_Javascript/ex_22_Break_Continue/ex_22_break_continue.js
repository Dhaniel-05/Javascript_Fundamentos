/* Break y Continue Se pueden utilizar en cualquier Ciclo puede ser While, Do While, For, For In. 

La instrucción break se utiliza para salir de un bucle antes de que termine de forma natural. 
Cuando el programa encuentra una instrucción break, deja de ejecutar el bucle inmediatamente 
y continúa con el código que viene después del bucle.

El `break` se utiliza para detener el bucle una vez que se cumple una condición específica, 
evitando realizar iteraciones innecesarias.

La instrucción continue se utiliza para saltar la ejecución de la iteración actual del bucle y pasar a la siguiente. 
Es útil para omitir ciertas iteraciones basándose en condiciones específicas, 
ignorando valores no deseados y continuando con el resto.
*/

// Ejemplo: se necesita saber cuándo el bucle pasa por una vuelta específica.
for (let f = 0; f < 10; f++) {
    document.write(`${f} <br>`); // Se imprime la variable en cada vuelta.
    
    if (f == 5) { // Condición: si la vuelta actual es igual a 5.
        document.write(`Aquí es la vuelta: ${f} <br>`); // Se imprime el mensaje especial.
        break; // Detiene el ciclo y no se muestran más iteraciones.
    }
}
// Mensaje adicional para mostrar que el bucle ha terminado.
document.write(`Ciclo finalizado, se cumplió la condición específica para alcanzar el número 5.`);
document.write(`<br>`);
document.write(`<br>`);

// Ejemplo con la instrucción `continue` para omitir letras específicas en una palabra.
let palabra = `Javascript`; // Variable inicializada con una cadena de texto.
let resultado = ``; // Variable inicializada en vacío para almacenar el resultado.

// Se utiliza un bucle `for...in` para recorrer los índices de la cadena.
for (let x in palabra) /* La variable `x` actúa como un índice que recorre cada posición de la cadena `palabra`. En cada vuelta, se evalúa la letra en la posición `x`. */ {
    if (palabra[x]==`a`) /*Si se encuentra una 'a', se salta esa iteración.*/{
        continue; /*La instrucción continue, saltará esta vuelta del bucle y pasa a la siguiente.*/
    }else{ /*De lo contrario si no es una 'a', se agrega la letra actual a la variable `resultado`*/
        resultado+=palabra[x];
    }
}
document.write(resultado); /*Finalmente la variable resultado traerá todas las letras que acumuló en cada vuelta y se imprime el resultado, que contiene la palabra sin las letras 'a'. Salida: Jvscript*/
document.write(`<br>`);
document.write(`<br>`);

/* Ejemplo práctico para omitir vocales sin tílde*/
let Palabra = `Murcielago`;
let Resultado = ``;
for (let vocalOff in Palabra) {
    if (Palabra[vocalOff]== `a` ||
        Palabra[vocalOff]== `e` ||
        Palabra[vocalOff]== `i` ||
        Palabra[vocalOff]== `o` ||
        Palabra[vocalOff]== `u`) 
        {
        continue;        
    }else{
        Resultado += Palabra[vocalOff];
    }
}
document.write(Resultado);
document.write(`<br>`);

