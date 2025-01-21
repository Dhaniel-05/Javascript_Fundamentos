/*Función vaciar(control):

Esta función toma un parámetro control, que se espera que sea un elemento HTML, y le asigna un valor vacío ('') al atributo value.
El uso del evento onfocus en los campos de texto permite que esta función se ejecute cuando el usuario haga clic o enfoque el campo, eliminando automáticamente el contenido predeterminado.
El argumento this pasado en el HTML representa el elemento que activa el evento, lo que corresponde al campo de texto enfocado.
Función verificar():

Esta función utiliza la biblioteca SweetAlert para mostrar un cuadro de diálogo emergente con el mensaje "Datos confirmados".
El propósito es proporcionar una confirmación visual al usuario cuando hace clic en el botón "Ingresar".
HTML con Eventos:

Cada campo de entrada tiene el evento onfocus asociado, que invoca la función vaciar(this). Esto asegura que el contenido predeterminado del campo (como "nombre" o "edad") se borre automáticamente cuando el usuario haga clic en él.
El botón "Ingresar" utiliza el evento onclick para ejecutar la función verificar(), mostrando un cuadro de diálogo de confirmación.
Uso de SweetAlert:

La biblioteca SweetAlert se incluye mediante un enlace a un CDN y proporciona una experiencia de usuario más atractiva para los mensajes emergentes en comparación con el método nativo alert.*/

function vaciar(control){
    control.value = ``; /*Esta función toma el parámetro control y le da el valor de vacío, el this del html hace referencia a control y por lo tanto se vaciará el contenido de donde se utilice este evento*/
}

function verificar(){
    swal(`Datos confirmados`)
}