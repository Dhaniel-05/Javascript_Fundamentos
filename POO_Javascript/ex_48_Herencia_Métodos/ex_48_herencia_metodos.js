/*Herencia Subclases y Métodos*/

class Deportistas{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Futbolista extends Deportistas {
    constructor(nombre, apellido, goles){
        super(nombre, apellido);
        this._goles = goles;
    }

    get goles(){
        return this._goles;
    }
    set goles(newGoals){
        this._goles = newGoals;
    }
}

/*En consola se puede apreciar lo siguiente creando un objeto:

let futbolista2 = new Futbolista('Wlater', 'Ramirez', 5);
undefined
futbolista2.goles;
5
futbolista2.goles=3; //Aquí se modificó el valor de goles por medio del método set.
3
futbolista2.goles;
3
*/