let control = 0;
let contraseña = `SantaMadre@`;

function verificar(){
    let clave = document.getElementById(`clave`).value;  /*La variable 'clave' se declara dentro de la función 'verificar' y obtiene su valor a través del método 'document.getElementById'. Este método se utiliza para acceder a un elemento del DOM utilizando su atributo 'id'. En este caso, se busca el elemento HTML con el 'id' 'clave', y se extrae su valor actual utilizando la propiedad '.value'.
    Esto permite capturar la información que el usuario ha ingresado en el campo correspondiente del formulario.
    */
    if(clave != contraseña || clave ==``){
        alert(`Contraseña incorrecta o vacía, inténtelo de nuevo`);
        control++;/*Cada vez que el usuario ingrese una contraseña incorrecta la variable control se va a incrementar si supera la condición o el número de intentos saldra el alert.*/
        if(control>=3){
            alert(`Agotó el número de intentos, acceso bloqueado, contacte a soporte técnico.`);
        }
    } else{
        window.open(`http://www.google.com`); /*Con esto Javascript abre una nueva ventana en el navegador*/
    }
}
