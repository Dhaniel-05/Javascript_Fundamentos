/* Condicioneales

Las condicionales son funcionalidades que permiten manejar la toma de decisiones en la ejecución del código, Estas decisiones se basan en evaluar si una o más condiciones son verdaderas o falsas, es decir, si se cumplen ciertas situaciones, parámetros o condiciones específicas. Ahora bien, dependiendo del resultado de esta evaluación, el programa ejecutará un conjunto específico de instrucciones.

Por ejemplo, se puede verificar si se cumple una condición determinada (como si una variable tiene un valor específico) y, según el resultado, el programa ejecutará un conjunto de instrucciones u otro.
*/

//Condicional If(){}else{}
let nombre, edad;
nombre = prompt(`Ingrese su nombre...`);
edad = prompt(`Ingrese su edad`);
edad = parseInt(edad);

//La condición if evaluá si la edad del usuario es mayor o igual a 18.
    if (edad >=18) {
        //Si esta condición se cumple el sistema puede responder de la siguiente manera
        document.write(nombre, ` eres es mayor de edad`);
    } else {
//La condición else evalúa en este caso que el usuario no sea mayor ni igual a 18. También evalúa que el usuario no coloque ningún dato.
        document.write(nombre, ` eres es menor de edad`);
    }
document.write(`<br>`);

// OTra forma de hacerlo y controlar de mejor forma el flujo es el siguiente
//Condicional If(){}else{}
let Nombre, Edad;
Nombre = prompt(`Ingrese su nombre...`);
Edad = prompt(`Ingrese su edad`);
Edad = parseInt(Edad); //Convertimos el tipo de dato a entero para que la validación de la condición funcione correctamente

//La condición if evaluá si la edad del usuario es mayor o igual a 18.
    if (Edad >=18) {
        //Si esta condición se cumple el sistema puede responder de la siguiente manera
        document.write(Nombre, ` eres es mayor de edad`);
    } else {
        if(Edad < 18){
            //La condición if en este caso, evalúa que usuario no sea mayor a 18.
        document.write(Nombre, ` eres es menor de edad`);
        }else{
        //La condición else evalúa si el usuario no ingresó ningún dato.
            document.write(`No ingresaste ni tu nombre ni tu edad`);
        }
    }