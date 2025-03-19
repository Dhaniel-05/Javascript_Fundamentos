// Función `avanzarFila` que simula el avance de una fila y ejecuta un callback después de 10 segundos.
function avanzarFila(callback) {
    // `setTimeout` retrasa la ejecución de la función proporcionada (callback) por 10 segundos.
    setTimeout(function () {
        console.log(`Tu turno ha llegado`); // Este mensaje se imprime después de que pasen los 10 segundos.
        callback(); // Se ejecuta la función pasada como argumento (callback).
    }, 10000 /* Tiempo de espera en milisegundos, equivalente a 10 segundos */);
}

// Función `llamada` que muestra un mensaje indicando que el pedido está listo.
function llamada() {
    console.log(`Reclama tu pedido`); // Este mensaje se imprime cuando `llamada` es ejecutada por el callback.
}

// Mensaje inicial que se ejecuta de manera síncrona, indicando que el usuario ha tomado un turno.
console.log(`Toma tu turno`);

// Llama a la función `avanzarFila` y le pasa la función `llamada` como argumento.
// Esto inicia el temporizador de 10 segundos y, cuando termina, ejecuta `llamada`.
avanzarFila(llamada);

// Este mensaje se ejecuta de manera inmediata después de `avanzarFila`, ya que `setTimeout` no bloquea el flujo de ejecución.
console.log(`Compraste un café`);
