let audio = document.getElementById(`audio`);
let listacanciones = document.getElementById(`listaCanciones`);

/*Agregar un evento que detecta cuando el usuario cambia la canción en la lista*/
listacanciones.addEventListener(`change`, cambiarCancion);

/*Función que se ejecuta cuando se selecciona una nueva canción en la lista desplegable*/
function cambiarCancion(){
    let cancionElegida = listacanciones.value; /*La variable cancionElegida contendrá lo que hay en listacanciones pero en su propiedad value, Capturando el valor (ruta de la canción) de la opción seleccionada*/
    audio.src = cancionElegida; /*El objeto audio junto con su propiedad src, recibe el valor de la canción elegida y de esta manera cambia la fuente del audio a la canción elegida*/
    audio.play(); /*Inicia la reproducción de la canción seleccionada*/

    /*Crear y despachar un evento personalizado llamado 'CambiarCancion'*/
    let evento = new CustomEvent(`CambiarCancion`);
    audio.dispatchEvent(evento); /*Notifica a los demás componentes que la canción ha cambiado*/
}

/*Función para mostrar el nombre de la canción actual en la consola*/
function mostrarCancionConsola(){
    console.log(`Canción Actual: `, listacanciones.value); /*Muestra la ruta o valor de la canción seleccionada*/
}
audio.addEventListener(`CambiarCancion`, mostrarCancionConsola); /*Escucha el evento 'CambiarCancion' y ejecuta la función para mostrar la canción en la consola*/

/*Función que muestra el título de la canción actual en el DOM (En la pantalla del navegador)*/
function mostrarCancion() {
    let tituloCancion = listacanciones.options[listacanciones.selectedIndex].text; /*Obtiene el texto de la opción seleccionada*/
    document.getElementById('tituloCancion').textContent = `Estás escuchando: ${tituloCancion}`; /*Actualiza el contenido del elemento 'tituloCancion' con el título actual*/
}
audio.addEventListener(`CambiarCancion`, mostrarCancion); /*Escucha el evento 'CambiarCancion' y actualiza el título de la canción en la página*/
