/* Temporizador y Audio
    SetTimeout()
*/

function tiempoFinalizado() {
    /* Muestra una alerta indicando que el tiempo personalizado ingresado por el usuario se ha agotado */
    alert(`¡Se ha agotado el tiempo!`);
}

/* Función para cuenta regresiva dinámica */
function cuentaRegresiva() {
    let elegirSegundos = document.getElementById("tiempoCronometro").value;
    let contador = document.getElementById("contador");
    let textoTiempo = document.getElementById("txtTiempo");
    let sonidoAlarma = document.getElementById("audioAlarma");
    textoTiempo.style.color = "blueviolet";

    textoTiempo.style.display = "none"; // No mostrar el texto de inicio

    if (!elegirSegundos || elegirSegundos <= 0) {
        alert("Por favor, ingrese un tiempo válido.");
        return;
    }

    // Cambiar texto indicando que el temporizador ha iniciado
    textoTiempo.style.display = "block"; // Mostrar el texto
    textoTiempo.textContent = "¡Tiempo Inicializado!";
    textoTiempo.style.color = "green";

    // Inicia la cuenta regresiva
    function actualizarContador(segundosRestantes) {
        contador.textContent = segundosRestantes;

        if (segundosRestantes > 0) {
            setTimeout(() => actualizarContador(segundosRestantes - 1), 1000);
        } else {
            // Vaciar el campo de entrada
            document.getElementById("tiempoCronometro").value = "";

            // Reproducir el sonido de la alarma
            sonidoAlarma.play();

            // Cambiar el texto a "Tiempo Finalizado"
            textoTiempo.textContent = "¡Tiempo Finalizado!";
            textoTiempo.style.color = "blueviolet";

            // Mostrar alerta después de reproducir el sonido
            setTimeout(() => alert("¡Se ha agotado el tiempo!"), 1000); 
            /*Para mostrar la alerta se retrasa 1 segundo que es lo equivalente a los 1000 miliseguntos parametrizados.
            
            El setTimeout se utiliza para posponer la ejecución de la alerta. Esto se hace para que el sonido de la alarma pueda reproducirse primero, dándole tiempo al usuario para escuchar la alarma antes de que aparezca la alerta en pantalla. De esta manera, la alerta solo aparece 1 segundo después de que se haya reproducido el sonido, lo que hace que la experiencia sea más fluida y natural para el usuario.*/
        }
    }
    actualizarContador(elegirSegundos);
}
