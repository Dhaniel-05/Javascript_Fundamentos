/*Manejo de Errores en Programación Asincrónica

El manejo de errores en programación asincrónica es fundamental para garantizar que el código pueda manejar situaciones inesperadas, como entradas inválidas, fallos en solicitudes externas, o errores en el procesamiento de datos. Los callbacks son una de las primeras técnicas utilizadas para manejar errores en operaciones asincrónicas.

En este enfoque, la función callback recibe como primer argumento el error (si lo hay), y como segundo argumento, el resultado en caso de éxito. Si ocurre un error, este se pasa al callback para que pueda ser manejado por el desarrollador.

function sumar(num1,num2,callback){
    setTimeout(function(){
        if(typeof num1 != `number`||
            typeof num2 != `number`){
                return callback(new Error(`Algún argumento no es un número`));
        }
        callback(null, num1 + num2);
    }, 2000);
}
sumar(`a`, 50, function(error, resultado){
    if(error){
        console.log(error);
    }else{
        console.log(resultado);
    }
});
*/

// Definición de la función `sumar` que utiliza un callback para manejar errores.
function sumar(num1, num2, callback) {
    setTimeout(function() { 
        /* Simula una operación asincrónica con un retraso de 2 segundos. 
           Esto podría representar, por ejemplo, un cálculo complejo o una consulta a una base de datos. */
        
        // Verifica si alguno de los argumentos no es un número.
        if (typeof num1 != `number` || typeof num2 != `number`) { 
            /* Comprueba los tipos de `num1` y `num2`. Si cualquiera de ellos no es de tipo `number`, 
               se considera un error y se invoca el callback con un objeto `Error`. */
            return callback(new Error(`Algún argumento no es un número`)); 
            /* Llama al callback con un error personalizado. `return` se utiliza para detener la ejecución 
               de la función y evitar continuar con el cálculo. */
        }
        
        // Si no hay errores, llama al callback con `null` como primer argumento (indicando éxito)
        // y con la suma de `num1` y `num2` como segundo argumento.
        callback(null, num1 + num2); 
    }, 2000); 
    /* El retraso de 2000 milisegundos (2 segundos) representa el tiempo de la operación asincrónica. */
}

// Llama a la función `sumar` pasando argumentos y una función callback para manejar el resultado.
sumar(`a`, 50, function(error, resultado) {
    /* En este caso, el primer argumento (`error`) es donde se espera recibir cualquier posible error, 
       mientras que el segundo argumento (`resultado`) contiene el valor calculado si no hubo errores. */

    if (error) { 
        /* Comprueba si hay un error. Si `error` no es nulo, significa que ocurrió un problema durante 
           la ejecución de la función `sumar`. */
        console.log(error); 
        /* Muestra el mensaje del error en la consola, que en este caso sería: 
           "Algún argumento no es un número". */
    } else {
        console.log(resultado); 
        /* Si no hay errores, muestra el resultado de la suma en la consola. Este bloque de código no se 
           ejecutará en este ejemplo porque el primer argumento no es un número. */
    }
});
