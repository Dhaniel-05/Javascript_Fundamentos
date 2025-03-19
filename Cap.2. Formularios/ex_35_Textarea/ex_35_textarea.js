//La variable tiene la propiedad de estilo resize y se deshabilita.
let area = document.getElementById(`comentarios`);
area.style.resize=`none`; 

function comentar() {
    // Obtener el valor del textarea con el id 'comentarios', eliminando espacios al inicio y al final
    const comentario = document.getElementById('comentarios').value.trim();

    // Verificar si no se ingresó texto
    if (comentario.length === 0) { 
        swal('No ha digitado ninguna letra, por favor escriba antes de enviar.'); // Mostrar mensaje de error
    } 
    // Verificar si el texto es demasiado largo
    else if (comentario.length > 100) { 
        swal('El comentario es muy largo, sintetice la idea y vuelva a escribir.'); // Mostrar mensaje de advertencia
    } 
    // Caso contrario, si el texto es válido
    else { 
        swal('¡Gracias!'); // Mostrar mensaje de agradecimiento
    }
}

