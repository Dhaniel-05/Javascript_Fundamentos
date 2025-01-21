/*Sincronía y Asincronía en JavaScript

En JavaScript, la ejecución del código puede ser sincrónica o asincrónica, lo que afecta el orden en que las instrucciones se ejecutan, especialmente cuando se involucran operaciones que pueden tomar tiempo, como el acceso a bases de datos, la manipulación del DOM o la lectura de archivos. */

/*Sincronía

La sincronía implica que las instrucciones de código se ejecutan en un orden secuencial, una después de la otra. En otras palabras, el código espera a que cada tarea se termine antes de pasar a la siguiente.*/

//Ejemplo de Sincronía:
//Acción 1 Síncrona
console.log(`Inicio del código síncrono`);

//Acción 2
for (let f = 0; f <10; f++){
    console.log(f);
}

//Acción 3 Síncrona
console.log(`Fin del código síncrono`);
//El flujo de ejecución sigue el orden secuencial del código. El programa no avanzará hasta que cada acción haya terminado. Si una de estas acciones tomara mucho tiempo, bloquearía la ejecución de las siguientes acciones.


/*Asincronía

La asincronía, por otro lado, permite que las operaciones de larga duración (como los temporizadores, la lectura de archivos o las solicitudes HTTP) se ejecuten en segundo plano, sin bloquear la ejecución del resto del código. Esto se logra mediante callbacks, promesas o async/await. */

//Ejemplo de Asincronía:
//Acción 4 Síncrona
console.log(`Inicio del código síncrono`);

//Acción 5 Asincrónica se debe al setTimeout pues es una función asíncrona
setTimeout(function(){
    for (let f = 0; f <10; f++){
        console.log(f);
    }
},0);

//Acción 6 Síncrona
console.log(`Fin del código síncrono`);
//En este ejemplo, aunque el setTimeout tiene un tiempo de espera de 0, JavaScript lo coloca en la cola de eventos, y el código síncrono sigue ejecutándose (imprimiendo "Fin del código síncrono") antes de ejecutar la función asincrónica. Este es el principio detrás de la event loop (bucle de eventos) de JavaScript, que garantiza que las tareas de larga duración no bloqueen el hilo principal del programa.

/*Observaciones:

Sincrónico: Las tareas se ejecutan de manera secuencial, una tras otra.
Asincrónico: Las tareas pueden ejecutarse en segundo plano, permitiendo que el código continúe ejecutándose mientras se completan tareas de larga duración.*/