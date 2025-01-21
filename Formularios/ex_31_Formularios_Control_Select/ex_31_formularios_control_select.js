/*Mostrar valores de un Select en Javascript */
// function cambiarColor(){
//     let seleccion = document.getElementById(`select`);
//     document.getElementById(`text1`).value = seleccion.selectedIndex;
//     document.getElementById(`text2`).value = seleccion.options[seleccion.selectedIndex].text;
//     document.getElementById(`text3`).value = seleccion.options[seleccion.selectedIndex].value;
// }

/* Mostrar valores de un Select en Javascript */
function cambiarColor() { 
    // Función que se ejecuta cuando el usuario selecciona un valor en el select
    let seleccion = document.getElementById(`select`); /* Captura el elemento select con el id "select" */

    document.getElementById(`text1`).value = seleccion.selectedIndex; /* Muestra en el input con id "text1" el índice de la opción seleccionada */

    document.getElementById(`text2`).value = seleccion.options[seleccion.selectedIndex].text; /* Muestra en el input con id "text2" el texto de la opción seleccionada */

    document.getElementById(`text3`).value = seleccion.options[seleccion.selectedIndex].value; /* Muestra en el input con id "text3" el valor asociado a la opción seleccionada */
}
