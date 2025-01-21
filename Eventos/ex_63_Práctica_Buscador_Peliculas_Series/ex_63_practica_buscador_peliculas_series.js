let selector = document.getElementById(`miSelector`);
let input = document.getElementById(`miInput`);
let boton = document.getElementById(`miBoton`);
let lista = document.getElementById(`miListado`);

let archivo = `peliculas.json`;

selector.addEventListener(`change`, cambiarArchivo);
selector.addEventListener(`Cambiomodo`, mensajemodo);
input.addEventListener(`keydown`, verificarInput);
boton.addEventListener(`click`, buscar);

function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent(`Cambiomodo`);
    selector.dispatchEvent(evento);
}

function mensajemodo(){
    swal.fire(`El archivo de búsqueda ahora es `, selector.value);
}

// function verificarInput(evento){
//     if((evento.keyCode < 65 || evento.keyCode > 90 && evento.keyCode != 32 && evento.keyCode != 8)){
//         evento.preventDefault(); /*KeyCode debe ir bien escrito de lo contrario no funciona la validación*/
//     };
// }

/*Función con event.code o event.key para mayor claridad y compatibilidad en los navegadores. De igual manera verificará que solo se escriban números además de permitir las teclas de borrado, subir, bajar y la tecla tabulador*/
function verificarInput(event) {
    const teclasPermitidas = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!/^[A-Za-z\s]$/.test(event.key) && !teclasPermitidas.includes(event.key)) {
    // if ((event.key < 48 || event.key > 57) && !teclasPermitidas.includes(event.key)) {
        event.preventDefault();
    }
}

function buscar(){
    lista.innerHTML = ``;
    let encontrado = false; /*Variable para verificar si se encuentra la película*/
    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida){
        for(let item of salida.data){
            /*Búsqueda tipo %LIKE%*/ 
            if (item.nombre.toUpperCase().includes(input.value.toUpperCase())) {
            /*// if(item.nombre.startsWith(input.value.toUpperCase())){ */
                encontrado = true; /*Se encontró la película*/
                let p = document.createElement(`p`);
                p.id = item.nombre;
                p.innerHTML = item.sinopsis;
                p.style.display = `none`;

                let li = document.createElement(`li`);
                li.innerHTML = item.nombre;
                li.addEventListener(`mouseover`, function(){
                    let p = document.getElementById(item.nombre);
                    p.style.display = `block`;
                });

                li.addEventListener(`mouseout`, function(){
                    let p = document.getElementById(item.nombre);
                    p.style.display = `none`;
                });
                li.appendChild(p);
                lista.appendChild(li);
            }
        }
        /*Si no se encontró ninguna película, muestra la alerta*/
        if (!encontrado) {
            swal.fire({
                icon: 'error',
                title: 'No encontrado',
                text: 'La película buscada no está en el registro.'
            });
        }
    })
        .catch(function(error){
            console.log(error);
        });
    }
