/*Onblur

El atributo onblur en HTML se utiliza para detectar cuándo un elemento pierde el foco. Esto ocurre cuando el usuario interactúa con un elemento (como un campo de texto) y luego hace clic o tabula hacia otro elemento en la página, dejando el primero.

¿Qué es "perder el foco"?
Un elemento tiene el foco cuando está activo y listo para recibir entradas del usuario, como escribir en un campo de texto o interactuar con él. Cuando el usuario mueve el foco a otro elemento (por ejemplo, al hacer clic fuera del campo de texto), el evento onblur se dispara.

¿Para qué sirve onblur?
El evento onblur es útil para:

Validación de datos:

Comprobar si el usuario dejó un campo obligatorio vacío.
Verificar el formato del contenido (por ejemplo, un correo electrónico válido).
Mostrar advertencias o correcciones en el momento en que el usuario termine de interactuar con el campo.
Interacciones visuales:

Cambiar el color del campo o mostrar mensajes si algo está mal.
Restablecer el estilo del campo si cumple con los requisitos.
Ejecutar lógica al salir de un elemento:

Guardar cambios automáticamente.
Realizar cálculos o actualizaciones en otros elementos relacionados.
*/

// Función que se ejecuta cuando el usuario hace clic en el campo de texto (evento onfocus)
function focalizar() {
    // Limpia el contenido del campo de texto, eliminando cualquier valor previo
    document.getElementById(`nombre`).value = ``;
    // Restablece el color de fondo del campo de texto a su estado original (sin color)
    document.getElementById(`nombre`).style.border = ``;
    // Bordes redondeados
    document.getElementById(`nombre`).style.borderRadius = `8px`; 

}

// Función que se ejecuta cuando el usuario hace clic fuera del campo de texto (evento onblur)
// y el campo se queda vacío.
function validarVacios() {
    // Verifica si el campo de texto está vacío
    if (document.getElementById(`nombre`).value == ``) {
        // Si el campo está vacío, cambia el color de fondo a rojo para señalar un error
        document.getElementById(`nombre`).style.border = `2px solid red`;
        // Bordes redondeados
        document.getElementById(`nombre`).style.borderRadius = `8px`; 
        // Muestra un mensaje de alerta usando SweetAlert indicando que el campo es obligatorio
        swal(`¡Debe ingresar el nombre!`);
    }
}
