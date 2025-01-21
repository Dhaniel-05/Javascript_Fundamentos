/*Herencia Subclases*/

class Deportistas{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Futbolista extends Deportistas {
    constructor(nombre, apellido, goles){
        super(nombre, apellido);
        this.goles = goles;
    }
}

/*En consola se puede apreciar lo siguiente instanciando objetos:

let deportista1 = new Deportistas('Andres','Escobar');
undefined

deportista1.apellido;
'Escobar'

let futbolista1 = new Futbolista('Adrían', 'Valencia', 30);
undefined

futbolista1.nombre;
'Adrían'
*/