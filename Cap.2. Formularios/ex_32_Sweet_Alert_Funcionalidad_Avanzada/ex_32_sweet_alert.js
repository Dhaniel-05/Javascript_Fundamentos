/* 
Sweet Alert 
Introducción a las bibliotecas SweetAlert.

SweetAlert es una biblioteca que mejora los cuadros de diálogo emergentes (alertas) 
que normalmente usamos con la función 'alert()' en JavaScript. SweetAlert ofrece un diseño más atractivo 
y opciones avanzadas para personalizar las alertas.

Ejemplo con la función 'alert()':
function saludo() {
    alert('¡Hola Mundanos!');
}

Al reemplazar 'alert()' con 'swal()', obtenemos un cuadro de diálogo mejorado.
Ejemplo con SweetAlert:
function saludo() {
    swal('¡Hola Mundanos!');
}
*/

function saludo() {
    swal('¡Hola Mundanos!');
}

function saludoPersonalizado() {
    swal({
        title: '¡Hola Mundanos!',
        text: 'Bienvenidos a desarrollo con JS.',
        icon: 'success',
        button: '¡Entendido!',
    });
}

