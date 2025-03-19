/* Temporizador
    SetTimeout()
*/

function comenzarTiempo() {
    /* La función comenzarTiempo utiliza la función interna setTimeout para esperar 5 segundos antes de ejecutar la función tiempoCumplido */
    setTimeout(tiempoCumplido, 5000);
}

function tiempoCumplido() {
    /* Muestra una alerta indicando que el tiempo fijo de 5 segundos se ha agotado */
    alert(`¡Se ha agotado el tiempo!`);
}

/* En este ejemplo, damos al usuario la opción de elegir el número de segundos */
function iniciarTiempo() {
    /* La variable elegirSegundos busca el ID tiempoElegido en el HTML y obtiene el valor que esté ahí para luego almacenarlo en la variable elegirSegundos */
    let elegirSegundos = document.getElementById(`tiempoElegido`).value;

    /* Inicia un temporizador utilizando el valor ingresado por el usuario El valor del input (en segundos) se multiplica por 1000 para convertirlo a milisegundos */
    setTimeout(tiempoFinalizado, 1000 * elegirSegundos);
}

function tiempoFinalizado() {
    /* Muestra una alerta indicando que el tiempo personalizado ingresado por el usuario se ha agotado */
    alert(`¡Se ha agotado el tiempo!`);
}

/* Función para cuenta regresiva dinámica */
function cuentaRegresiva() {
    let elegirSegundos = document.getElementById("tiempoCronometro").value;
    let contador = document.getElementById("contador");
    let textoTiempo = document.getElementById("txtTiempo");
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
            textoTiempo.textContent = "¡Tiempo Finalizado!";
            textoTiempo.style.color = "blueviolet";
            alert("¡Se ha agotado el tiempo!");

            // Vaciar el campo de entrada
            document.getElementById("tiempoCronometro").value = "";
        }
    }
    actualizarContador(elegirSegundos);
}