const fechaActual = new Date();
document.write(fechaActual, `<br>`);

let fecha = new Date();
document.write(`Día ${fecha.getDate()} Mes ${fecha.getMonth()+1} Año ${fecha.getFullYear()} <br>`);
document.write(`Hora: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} <br>`);
document.write(`<br>`);

// Crear un nuevo objeto tipo fecha
document.write(`Tratamiento para la fecha y hora en letras <br>`,`<br>`)
const dateNow = new Date();

// Obtener hora
const horas = dateNow.getHours();
const minutos = dateNow.getMinutes();
const segundos = dateNow.getSeconds();

// Determinar si es AM o PM
const periodo = horas < 12 ? "a.m" : "p.m"; /* Ternario ?: Evalúa si horas es menor que 12. Si es verdadero, asigna "a.m" de lo contrario, asigna "p.m" */

// Formatear la hora al formato de 12 horas
const horas12 = horas % 12 || 12; /* horas % 12: Calcula el resto de dividir horas entre 12. Esto convierte las horas en formato de 24 horas al formato de 12 horas.
|| 12: Si el resultado es 0 (medianoche o mediodía), usa 12 en lugar de 0. */

/* Array de meses en letras: Contiene los nombres de los meses en orden, del índice 0 (Enero) al 11 (Diciembre). */
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

/* Obtener el mes actual en letras: dateNow.getMonth(): Devuelve el mes actual como un número (0-11).
meses[dateNow.getMonth()]: Usa el número devuelto como índice para obtener el nombre del mes. */
const mesEnLetras = meses[dateNow.getMonth()];

// Obtener día y año
const dia = dateNow.getDate();
const año = dateNow.getFullYear();

// Mostrar resultados
document.write(`Fecha: ${dia} de ${mesEnLetras} del ${año}<br>`);
document.write(`Hora: ${horas12}:${minutos}:${segundos} ${periodo}<br>`);
document.write(`<br>`);