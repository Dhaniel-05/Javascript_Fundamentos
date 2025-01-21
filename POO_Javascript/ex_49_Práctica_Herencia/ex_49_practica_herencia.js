//Clase Principal
class Animal {
    constructor(nombre, peso, edad){
        this.nombre=nombre;
        this.peso=peso;
        this.edad=edad;
    }

    //Método
    informacion(){
        return `${this.nombre} - ${this.peso} kg.- ${this.edad} años`;
    }
}

//Subclase Heredada de la Principal
class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, edad, peso);
        this.raza=raza;
    }

    //Método
    informacion(){
        return `${this.nombre} - ${this.peso} kg.- ${this.edad} años - ${this.raza}`;
    }
}

//Subclase Heredada de la Principal
class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, edad, peso);
        this.sexo=sexo;
    }

    //Método
    informacion(){
        return `${this.nombre} - ${this.peso} kg.- ${this.edad} años - ${this.sexo}`;
    }
}

//Subclase Heredada de la Principal
class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, edad, peso);
        this.color=color;
    }

    //Método
    informacion(){
        return `${this.nombre} - ${this.peso} kg.- ${this.edad} años - ${this.color}`;
    }
}

//Creación de instancias
let perro1 = new Perro(`Firulais`, 12, 3, `Doberman`);
let gato1 = new Perro(`Michi`, 5, 2, `Macho`);
let conejo1 = new Perro(`Bugs`, 3, 1, `Blanco`);

//Mostra animales
let animales = [perro1,gato1,conejo1];

//Creación de funciones
function mostrarAnimales(){
    let lista = document.getElementById(`listaAnimales`);

    for(let animal of animales){
        let item = document.createElement(`li`);
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}