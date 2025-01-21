function seleccion(){
    let cantidad=0;
    if(document.getElementById(`check1`).checked)/*Si el elemento con Id: check1 es seleccionado a la variable cantidad sume 1*/{
        cantidad++;
    }
    if(document.getElementById(`check2`).checked){
        cantidad++;
    }
    if(document.getElementById(`check3`).checked){
        cantidad++;
    }
    if(document.getElementById(`check4`).checked){
        cantidad++;
    }
    if(document.getElementById(`check5`).checked){
        cantidad++;
    }

    // swal(`Conoces: ${cantidad} lenguajes de programación`);
    
    if (cantidad === 1) {
            /* Mostrar mensaje con singular o plural según el valor de cantidad*/
        swal(`Conoces ${cantidad} lenguaje de programación`);
    } else {
        swal(`Conoces ${cantidad} lenguajes de programación`);
    }
}