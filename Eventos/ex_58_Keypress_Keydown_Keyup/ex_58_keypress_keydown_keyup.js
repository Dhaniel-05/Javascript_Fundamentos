/*Eventos de Teclado Keypress, Keydown, Keyup

Cada tecla en el teclado tiene asignado un código ASCII 
*/

let texto1 = document.getElementById(`mitexto`); /*Se captura el campo con el Id Correspondiente*/

function verNumero(event){
    if(event.keyCode < 48 || event.keyCode > 57) /*Propiedad keyCode (obsoleto en algunos navegadores): Obtiene el código ASCII de la tecla presionada. Condición: Si el código es menor a 48 (tecla 0) o mayor a 57 (tecla 9), la función bloquea la entrada.*/ {
        event.preventDefault(); /*Detiene la acción predeterminada del evento, evitando que se escriban caracteres no permitidos.*/
    };
};
/*Ahora bien, en el addEventListener que va a vigilar y escuchar lo que suceda en la variable junto al evento keydown que es el de presionar las teclas y se llama a la función parametrizada para que sólo se digiten números.*/
texto1.addEventListener(`keydown`, verNumero);


/*Expresiones regulares (RegEx)
Las expresiones regulares son patrones utilizados para buscar o manipular texto. En JavaScript, se pueden utilizar con los métodos test(), match(), replace(), entre otros. Son muy útiles para validar datos, como correos electrónicos, números, etc.

/* Validación con Expresiones Regulares.
Este método verifica que el carácter presionado sea un número (0-9).

1. Se utiliza una expresión regular (/^[0-9]$/) para validar que la tecla sea un número del 0 al 9:
- ^ y $ aseguran que solo se valide un carácter numérico único.
- [0-9] permite números del 0 al 9.

2. Se filtran las teclas especiales como "Backspace", "Tab", etc.:
- Estas teclas no generan caracteres imprimibles, por lo que su longitud (event.key.length) no es igual a 1.
- Esto evita que se bloqueen teclas necesarias para editar el campo.

3. Si el carácter no es un número y es imprimible, se previene su entrada con event.preventDefault().*/
let numeros = document.getElementById(`mynumber`);
function verificarNumero(event) {
    const regex = /^[0-9]$/;
    if (!regex.test(event.key) && event.key.length === 1) {
        event.preventDefault();
    }
}
numeros.addEventListener('keydown', verificarNumero);


/*Función para validar campos numéricos en el input documento*/
let documentoNUIP = document.getElementById('identificacion');
/*Función con event.code o event.key para mayor claridad y compatibilidad en los navegadores. De igual manera verificará que solo se escriban números además de permitir las teclas de borrado, subir, bajar y la tecla tabulador*/
function validarNUIP(event) {
    const teclasPermitidas = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if ((event.key < '0' || event.key > '9') && !teclasPermitidas.includes(event.key)) {
        event.preventDefault();
    }
}
// Asociar la función al evento keydown
documentoNUIP.addEventListener('keydown', validarNUIP); 

/*Función para verificar que teclas oprimió el usuario*/
documentoNUIP.addEventListener(`keyup`, function(event){
    console.log(`Entrada del usuario: `, event.target.value);
}); /*Con esto se obtiene el valor del campo*/

documentoNUIP.addEventListener(`keypress`, function(event){
    console.log(`Carácter ingresado por el usuario: `, event.key);
}); /*Con esto se obtiene la tecla presionada*/


/*Función para capturar las teclas pulsadas por el usuario*/
let textArea = document.getElementById(`catchKey`);
let textUser =""; /*Variable que almacena lo digitado por el usuario*/
let readOnlyArea = document.getElementById('readKey'); /*En esta variable se mostrará lo digitado por el usuario*/

/* Validar que solo se escriban letras y espacios */
function validarTexto(event) {
    const regex = /^[a-zA-Z\s]$/; /*Letras (mayúsculas y minúsculas) y espacios*/
    const teclasPermitidas = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];

    // Bloquear si no es una letra o espacio y no está en teclas permitidas
    if (!regex.test(event.key) && !teclasPermitidas.includes(event.key)) {
        event.preventDefault();
    }
}
// Escuchar el evento keydown para validar la entrada
textArea.addEventListener('keydown', validarTexto);

/* Obtener la entrada completa después de cada tecla */
textArea.addEventListener('keyup', function (event) {
    textUser = event.target.value; /*Almacena las entradas de teclas del usuario*/
    console.log('Entrada actual del usuario:', event.target.value);
    readOnlyArea.value = textUser; /*Actualiza el contenido del textarea con lo digitado por el usuario*/
});

/* Mostrar la tecla presionada */
textArea.addEventListener('keypress', function (event) {
    console.log('Tecla ingresada:', event.key);
});

