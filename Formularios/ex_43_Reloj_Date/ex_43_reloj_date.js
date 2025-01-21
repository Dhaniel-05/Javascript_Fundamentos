let elementoSegundos = document.getElementById('tiempoelegido');
let elementotextoAlarma = document.getElementById('textoalarma');
let elementoSonidoAlarma = document.getElementById('audioAlarma');

function comenzarTiempo() {
    // Verificar que el valor del tiempo sea mayor a 0 antes de iniciar el temporizador
    let tiempoEnSegundos = elementoSegundos.value;
    if (tiempoEnSegundos <= 0) {
        alert("Por favor ingresa un tiempo válido.");
        return;
    }

    // Iniciar el temporizador con el valor ingresado por el usuario
    setTimeout(tiempocumplido, 1000 * tiempoEnSegundos); // Tiempo multiplicado por 1000 para convertir a milisegundos
}

function tiempocumplido() {
    elementotextoAlarma.style.color = "green"; // Cambiar color al texto de la alarma
    elementoSonidoAlarma.play(); // Reproducir el sonido de la alarma
    // Borrar el contenido del input cuando suene la alarma
    elementoSegundos.value = ''; // Vaciar el campo de texto del tiempo a elegir del usuario
}

function comenzarReloj() {
    setInterval(tictac, 1000);
}

function tictac() {
    let tiempoActual = new Date();
    let hora = tiempoActual.getHours();
    let minutos = String(tiempoActual.getMinutes()).padStart(2,'0'); // Cambio de formato para que los minutos estén en dos dígitos
    let segundos = String(tiempoActual.getSeconds()).padStart(2, '0'); // Cambio de formato para que los segundos estén en dos dígitos
    
    // Convertir a formato de 12 horas
    let formato12 = hora % 12 || 12; // Si la hora es 0, se pone 12 (para AM)
    let ampm = hora >= 12 ? 'PM' : 'AM'; // Si la hora es mayor o igual a 12, es PM, si no, AM
    
    // Formato de la hora
    let textoHora = formato12 + ':' + minutos + ':' + segundos + ' ' + ampm;

    elementotextoAlarma.textContent = textoHora; // Actualizar la hora en el <h1>
}
