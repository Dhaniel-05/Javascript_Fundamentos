/*Prototipos
Los prototipos son mecanismos mediante los cuales los objetos en javascript pueden heredar características unos de otros, es decir, que un objeto puede asumir propiedades o métodos de otro objeto que ya existe gracias a los prototipos. Por ejemplo si se crea un constructor llamado perro, como es bien sabido, un constructor es como como una matriz a partir de la cual se pueden crear todas las instancias necesarias eso mismo es un prototipo un objeto que funciona como plantilla que tiene sus propias características y que cuando se crean nuevas instancias de ese objeto estas van a recibir o a heredar esas características eso es un prototipo.

Las cadenas de prototipos son un objeto que contiene propiedades y que otro objeto creado a partir de él va a heredar esas propiedades además de permitir que otro objeto herede sus características también puede recibir como herencia sus propias características desde otro objeto anterior; es decir, que los objetos prototipo También tienen sus propios objetos prototipo y así sucesivamente a este mecanismo en javascript a través del cual los objetos están Encadenados entre sí para heredar sus elementos unos de los otros lo llamamos cadena de prototipos. */

/*Prototipos en JavaScript

Los prototipos son un mecanismo mediante el cual los objetos en JavaScript pueden heredar propiedades y métodos de otros objetos. Es decir, un objeto puede basarse en otro objeto ya existente para obtener características adicionales sin necesidad de duplicar el código.

¿Qué es un prototipo?
Un prototipo es un objeto que actúa como plantilla o modelo para otros objetos. Cuando se crea un objeto utilizando un constructor, este nuevo objeto tiene un enlace (llamado [[Prototype]]) que lo conecta al prototipo del constructor.

Por ejemplo, si definimos un constructor llamado Auto, todas las instancias creadas a partir de este constructor compartirán propiedades y métodos definidos en su prototipo. Esto permite que los objetos hereden características sin necesidad de copiarlas a cada instancia.

Ejemplo: Imagina que estamos modelando autos en un programa:

function Auto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

El constructor Auto define las propiedades marca y modelo, que son específicas para cada auto. Sin embargo, los métodos que son comunes a todos los autos, como encender o apagar, pueden ser definidos en su prototipo:

Auto.prototype.encender = function() {
    console.log(`${this.marca} ${this.modelo} está encendido.`);
};

Auto.prototype.apagar = function() {
    console.log(`${this.marca} ${this.modelo} está apagado.`);
};

Ahora, cuando creamos nuevas instancias de Auto, estas tendrán acceso a los métodos del prototipo:

const auto1 = new Auto("Toyota", "Corolla");
const auto2 = new Auto("Ford", "Focus");

auto1.encender(); // "Toyota Corolla está encendido."
auto2.apagar();   // "Ford Focus está apagado."
Aunque los métodos encender y apagar no están directamente en las propiedades de auto1 o auto2, JavaScript los encuentra recorriendo la cadena de prototipos.

Cadena de Prototipos: 
La cadena de prototipos es el mecanismo por el cual JavaScript permite que un objeto herede propiedades y métodos de otro. Cuando se accede a una propiedad o método de un objeto:

Primero, JavaScript busca directamente en el objeto. Si no lo encuentra, busca en el prototipo del objeto.
Este proceso continúa en la cadena de prototipos hasta llegar al prototipo final, que es null.
Por ejemplo:

console.log(auto1.toString()); 
Aquí, el método toString no está definido en el constructor Auto ni en su prototipo, pero JavaScript lo encuentra en Object.prototype, que es el prototipo base de todos los objetos.

Métodos Relacionados con Prototipos
Object.create(prototype)
Crea un nuevo objeto con el prototipo especificado.

const autoBase = {
    arrancar() {
        console.log("El auto está arrancando...");
    }
};

const autoNuevo = Object.create(autoBase);
autoNuevo.arrancar(); // "El auto está arrancando..."
Object.getPrototypeOf(obj)
Obtiene el prototipo de un objeto.

console.log(Object.getPrototypeOf(auto1) === Auto.prototype); // true
Object.setPrototypeOf(obj, prototype)
Cambia el prototipo de un objeto.

const prototipoElectric = {
    cargarBateria() {
        console.log("Cargando batería...");
    }
};

Object.setPrototypeOf(auto1, prototipoElectric);
auto1.cargarBateria(); // "Cargando batería..."

Nota: 
Los prototipos son un mecanismo para compartir propiedades y métodos entre objetos en JavaScript.
Los objetos creados con un constructor comparten el prototipo definido en la propiedad prototype de ese constructor.
JavaScript utiliza la cadena de prototipos para buscar propiedades o métodos en un objeto y sus prototipos ascendentes.
Este sistema permite herencia eficiente y es la base del modelo de objetos en JavaScript.*/

let perro = {nombre:`Matt`}; /*Objeto vacío*/
let perro1 = Object.create(perro); /*Instancia del objeto prototipo perro*/

/*
perro1.__proto__
trae esto:
{nombre: 'Matt'}

perro.__proto__ 

trae esto:
{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

*/