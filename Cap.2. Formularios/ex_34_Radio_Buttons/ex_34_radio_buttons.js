function seleccion(){
    /* Se verifica si el botón de radio con su respectivo Id está seleccionado, si es así, se muestra una alerta SweetAlert con el horario correspondiente */
    if(document.getElementById(`radio1`).checked){
        swal(`Horario de 08:00 a.m. a 12:00 m.d.`);
    }
    if(document.getElementById(`radio2`).checked){
        swal(`Horario de 02:00 p.m. a 06:00 p.m.`);
    }
    if(document.getElementById(`radio3`).checked){
        swal(`Horario de 07:00 p.m. a 10:00 p.m.`);
    }
}