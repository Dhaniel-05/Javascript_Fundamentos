// document.getElementById(`texto`).addEventListener(`keyup`, caracteres);

// function caracteres(){
//     let cant = document.getElementById(`texto`).value.length;
//     let disponibles = 20 - parseInt(cant);
//     document.getElementById(`cantidad`).innerHTML = disponibles;
//     if(disponibles==0){
//         swal(`¡Cantidad de carácteres agotados!`);
//     }
// }


// Selecciona el elemento con ID 'texto' y añade un evento que escucha cada vez que el usuario suelta una tecla
document.getElementById('texto').addEventListener('keyup', caracteres);

// Función que calcula y actualiza el número de caracteres restantes
function caracteres() {
    // Obtiene el valor actual del textarea y mide su longitud (cantidad de caracteres ingresados)
    let cant = document.getElementById('texto').value.length;
    // Calcula cuántos caracteres quedan disponibles restando la longitud actual del límite máximo
    let disponibles = 20 - parseInt(cant);
    // Actualiza el contenido del elemento con ID 'cantidad' para mostrar los caracteres restantes
    document.getElementById('cantidad').innerHTML = disponibles;
    // Si no quedan caracteres disponibles (disponibles es igual a 0)
    if (disponibles == 0) {
        // Muestra una alerta estilizada utilizando la librería SweetAlert en vez de Alert
        swal('¡Cantidad de carácteres agotados!');
    }
}
