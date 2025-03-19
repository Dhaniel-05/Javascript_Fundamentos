/* Redireccionamiento Location
*/
function redireccionar() {
    /* Muestra un cuadro de confirmación con el mensaje especificado. Si el usuario selecciona "Aceptar", el valor será `true`. Si el usuario selecciona "Cancelar", no ocurre ninguna acción y permanece en la página actual. */
    if (window.confirm(`¿Desea salir de la página actual?`)) {
        /* Si la respuesta es `true`, se redirecciona al usuario al enlace proporcionado.*/
        window.location = `https://github.com/`;
        /* `window.location` se utiliza para cambiar la URL de la página actual. En este caso, redirige al usuario al sitio web de GitHub.
        */
    }
}
