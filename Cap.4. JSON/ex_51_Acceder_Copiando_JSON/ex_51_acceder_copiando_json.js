/*Acceder al archivo JSON*/

//Copiar el contenido del archivo JSON para almarcenarlo en una variable
let miPersona = {
    "nombre":"Dhaniel",
    "edad":40,
    "estudiante": "true",
    "residencia":{
        "direccion":"Calle 32 #17-26",
        "ciudad":"Palmira"
    },
    "telefonos":["3107406038","3188688008"]
}

let elementoTexto = document.getElementById(`nombre`);
elementoTexto.textContent = miPersona.nombre;