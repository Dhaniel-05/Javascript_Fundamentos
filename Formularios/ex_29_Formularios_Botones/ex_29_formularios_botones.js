/*Formularios HTML y su Interacción con JavaScript

Los formularios HTML son elementos específicos del lenguaje HTML diseñados para permitir a los usuarios ingresar datos, como texto, números, selecciones, casillas de verificación, botones de opción, entre otros. Una vez que estos datos son recopilados, se envían a un servidor web para su procesamiento.

En este contexto, JavaScript juega un papel fundamental al manejar la funcionalidad e interacción de los formularios. Este lenguaje permite realizar tareas como la validación de datos, la manipulación dinámica de elementos del formulario y la gestión de eventos asociados.

Validación de Datos
JavaScript se utiliza para validar los datos ingresados por el usuario antes de enviarlos al servidor. Esto incluye:

Comprobar si los campos obligatorios han sido completados.
Verificar que los datos proporcionados cumplan con los formatos esperados, como correos electrónicos o números.
Implementar reglas de validación personalizadas definidas por el desarrollador.
Esta validación previa al envío ayuda a reducir errores y mejorar la experiencia del usuario.

Manipulación de Elementos del Formulario
JavaScript permite acceder a los elementos del formulario y modificar sus contenidos o propiedades según sea necesario. Entre las acciones comunes se encuentran:

Cambiar el valor de los campos de entrada.
Ocultar o mostrar elementos dinámicamente.
Agregar o eliminar opciones de listas desplegables.
Estas capacidades hacen que los formularios sean más dinámicos y adaptables a las necesidades del usuario.

Gestión de Eventos
La gestión de eventos en formularios es otro aspecto clave de JavaScript. Permite responder a eventos como:

El envío del formulario.
Clics en botones específicos.
Selecciones realizadas en listas desplegables o casillas de verificación.
Esto asegura que las interacciones del usuario con el formulario sean manejadas de manera eficiente y fluida.

Envío de Datos al Servidor
Cuando un usuario envía un formulario, JavaScript puede procesar los datos y enviarlos al servidor de diversas maneras:

Recarga de la página: El formulario envía los datos y actualiza la página actual.
Solicitudes AJAX: Permite enviar los datos al servidor sin necesidad de recargar la página, mejorando la experiencia del usuario al mantener la aplicación interactiva y responsiva 

Se utiliza el DOM (Modelo de Objeto de Documento), una interfaz que permite acceder y manipular los elementos de un documento HTML a través de JavaScript. Con el DOM, es posible obtener referencias a elementos específicos de la página utilizando métodos como getElementById, que selecciona un elemento por su atributo id, así como el getElementsByTagName, que devuelve una colección de elementos que comparten el mismo nombre de etiqueta o el querySelector el cuál permite seleccionar el primer elemento que coincide con un selector CSS especificado. Es versátil y puede usarse para seleccionar por clases, identificadores, atributos, y más.

Estas referencias facilitan la manipulación dinámica de los elementos, como cambiar el contenido, agregar o eliminar clases, modificar atributos, o incluso añadir o eliminar elementos en tiempo real. Estas capacidades son esenciales para construir aplicaciones web interactivas y dinámicas. */ 

//Función para incrementar el contador
let contador = 0; /*declarar una variable contador e inicializando en cero*/
function incrementar() /*Crear función incrementar: esta va a darle un valor de uno en uno a una variable contador cada vez que se ejecute*/{
    contador++;
    alert(`Valor: ${contador}`); /*Alert: Muestra el valor en pantalla.*/
}

// Función para decrementar el contador
function decrementar() {
    contador--; // Decrementa el valor del contador
    alert(`Valor: ${contador}`); // Muestra el nuevo valor
}