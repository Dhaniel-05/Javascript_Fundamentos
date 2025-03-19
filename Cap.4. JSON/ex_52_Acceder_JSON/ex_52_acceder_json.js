/*Acceder al archivo JSON*/

let datosJson;
let xhr = new XMLHttpRequest(); /*Este objeto sirve para solicitar a un objeto JSON que nos de la información.*/

xhr.open(`GET`, '../ex_50_Persona/ex_50_persona.json', true);
xhr.responseType = `json`;
xhr.onload = function(){
    if(xhr.status === 200){
        /*El status === 200 significa que la solicitud se ha completado satisfactoriamente*/
        datosJson = xhr.response;
        let elementoTexto = document.getElementById(`nombre`);
        elementoTexto.textContent = datosJson.nombre;
    }else{
        //Manejo de errores
    }
}

xhr.send();/*Debe enviarse para que las instrucciones se muestren*/