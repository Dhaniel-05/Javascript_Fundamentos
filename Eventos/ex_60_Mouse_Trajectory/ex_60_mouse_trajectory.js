// Seleccionar el canvas y configurar el contexto 2D
const canvas = document.getElementById('mouseCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables para almacenar la posición anterior del mouse
let prevX = null;
let prevY = null;

// Escuchar el evento 'mousemove'
document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (prevX == null || prevY == null) {
        // Si no hay posición previa, inicializarla
        prevX = mouseX;
        prevY = mouseY;
        return;
    }

    // Dibujar una línea desde la posición anterior a la actual
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(mouseX, mouseY);
    ctx.strokeStyle = 'blue'; // Color de la línea
    ctx.lineWidth = 2; // Grosor de la línea
    ctx.stroke();

    // Actualizar las posiciones previas
    prevX = mouseX;
    prevY = mouseY;
});

// Opcional: Ajustar el tamaño del canvas si la ventana cambia de tamaño
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    prevX = null;
    prevY = null; // Reiniciar para evitar líneas interrumpidas
});

/*Explicación:

Elemento <canvas>: Se usa un elemento <canvas> para dibujar gráficos. En este caso, se utiliza para trazar la trayectoria del mouse.

Contexto 2D (ctx): ctx es el contexto de dibujo 2D del canvas, que permite dibujar líneas, formas, colores, etc.

Evento mousemove: Cada vez que el mouse se mueve, se traza una línea desde la posición anterior del mouse (prevX, prevY) hasta la posición actual (mouseX, mouseY).

Ajuste dinámico del tamaño del canvas: El canvas se ajusta automáticamente al tamaño de la ventana y se reinicia la trayectoria si cambia el tamaño de la ventana.

Propiedades de dibujo: strokeStyle: Color de la línea (azul).

lineWidth: Grosor de la línea (2px).*/