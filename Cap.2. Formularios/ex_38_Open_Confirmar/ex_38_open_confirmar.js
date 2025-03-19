/*Open Confirm 

El método window.open() se utiliza para abrir una nueva ventana o pestaña en el navegador. Este método es muy versátil y permite personalizar tanto el contenido como las características de la nueva ventana.

window.open(url, target, features);
Parámetros:
url (opcional): Especifica la URL de la página que se debe cargar en la nueva ventana o pestaña. Si se deja vacío (''), se abrirá una ventana o pestaña en blanco. 

target (opcional): Determina cómo se abrirá la nueva página.
Valores comunes: _blank: Abre en una nueva pestaña (predeterminado si el navegador no permite ventanas emergentes).
_self: Carga la URL en la misma ventana o pestaña. Comillas vacías (''): Abre una nueva ventana independiente.

features (opcional): Define las características de la nueva ventana, como tamaño, posición y si tendrá barras de desplazamiento. Ejemplo: "width=400,height=250": Especifica el tamaño de la ventana. "resizable=no,scrollbars=no": Desactiva el redimensionamiento y las barras de desplazamiento.

El método window.confirm() muestra un cuadro de diálogo modal con un mensaje y dos opciones: "Aceptar" y "Cancelar". Se utiliza principalmente para pedir al usuario que confirme o cancele una acción.
let respuesta = window.confirm(mensaje);

Parámetros:
mensaje (opcional): Texto que se muestra en el cuadro de diálogo. Si se omite, el cuadro aparece vacío.

Valor de retorno:
Devuelve un valor booleano: true: Si el usuario hace clic en "Aceptar". false: Si el usuario hace clic en "Cancelar".

El método window.close() puede no funcionar si la ventana fue abierta directamente por el navegador (y no mediante un script). Es más confiable cuando las ventanas o pestañas se crean usando window.open()*/

// Función para abrir una nueva pestaña en el navegador
function pestaña(){
    let pestaña = open();
    pestaña.document.write(`Soy otra página web que abrió como nueva pestaña`);
}

// Función para abrir una nueva ventana independiente del navegador actual
function ventana(){
    let ventana = open('','', 'width=400, height=250'); /*Las comillas vacías indican que no se carga un URL específica además de que debe desanclarse del navegador actual y crear una nueva ventana con las dimensiones especificadas */
    ventana.document.write(`Soy otra página web que abrió como nueva ventana`);
}

// Función para confirmar si el usuario desea salir de la página web
function confirmar() {
    // Muestra un cuadro de diálogo de confirmación y almacena la respuesta (true o false) en la variable `respuesta`
    let respuesta = confirm(`¿Desea salir de la página web?`);
    // Si el usuario confirma (respuesta es true), se cierra la ventana actual
    if (respuesta == true) {
        window.close();
    }
}