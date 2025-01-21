//Programa que controla la contraseña de un usuario en un inicio de sesión.

//Declarar tres variables
let usuario, clave, control;

control = 0; //La variable control se inicializa con el valor de 0. 
usuario = prompt(`Ingrese Usuario...`); //Valor digitado por el usuario.
clave = prompt(`Ingrese su contraseña...`); //Valor digitado por el usuario. 

do {
    //Se controla que si la clave ingresada por el usuario es diferente de la clave establecida dentro del sistema, envía al usuario una alerta de Contraseña Incorrecta.
    if(clave != `SantaMadre666*`){
        clave = prompt(`Contraseña Incorrecta?\n` + `Inténtelo de nuevo...`);
        control = 0; //Aquí control seguirá valiendo 0 mientras la clave digitada sea diferente a la establecida en el sistema.
    }else{
        control = 1; //Control valdrá 1 cuando la contraseña ingresada sea la correcta.
    }
    
} while (control != 1); //La contraseña ingresada es verificad por control, si esta vale 1, el acceso será concedido, en caso contrario si es diferente de 1, el sistema continuará con el bucle o el ciclo hasta que se cumpla la condición. 
document.write(`Acceso Concedido!, Bienvenido ${usuario}`);
