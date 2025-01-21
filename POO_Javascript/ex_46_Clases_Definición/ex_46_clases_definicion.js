/* Clases en JavaScript

En JavaScript, una clase es una plantilla o modelo que permite crear objetos con propiedades y métodos predefinidos. Es una forma moderna y estructurada de trabajar con objetos y herencia, introducida en ECMAScript 2015 (ES6). Aunque las clases son una forma diferente de definir objetos, internamente funcionan sobre el sistema de prototipos, que es la base de la herencia en JavaScript.

Existen tres maneras principales de crear una clase:
1. Declaración de clase
2. Expresión de clase anónima
3. Expresión de clase nombrada
*/

/* 1. Declaración de una Clase */
class Papel {
    constructor(alto, ancho, gramos) {
        this.alto = alto; // Altura del papel
        this.ancho = ancho; // Ancho del papel
        this.gramos = gramos; // Peso en gramos
    }
}
// Ejemplo:
let papel_A4 = new Papel(29.7, 21, 80); // Crea una instancia de la clase Papel

/* 2. Expresión de una Clase */

/* 2.1. Expresión de una Clase Anónima */
let PapelCard = class {
    constructor(alto, ancho, gramos) {
        this.alto = alto;
        this.ancho = ancho;
        this.gramos = gramos;
    }
};
// Ejemplo:
let papel_Carta = new PapelCard(27.9, 21.6, 75); // Crea una instancia de la clase anónima

/* 2.2. Expresión de una Clase Nombrada */
let PapelBond = class PapelBond {
    constructor(alto, ancho, gramos) {
        this.alto = alto;
        this.ancho = ancho;
        this.gramos = gramos;
    }
};
// Ejemplo:
let papel_Oficio = new PapelBond(33, 21.6, 90); // Crea una instancia de la clase nombrada

/*Constructor
El constructor es un método especial de las clases que se utiliza para inicializar las propiedades de un objeto cuando se crea una nueva instancia de la clase. Se ejecuta automáticamente al usar new. */

class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
}
let perro = new Animal("Max", "Canino"); 

/*Herencia
La herencia permite crear clases que extienden otras clases, reutilizando y ampliando su funcionalidad. Esto se logra con la palabra clave extends.*/

class Perro extends Animal {
    sonido() {
        return `${this.nombre} ladra.`;
    }
}

let perroMax = new Perro("Max");
console.log(perroMax.sonido()); // Max ladra.

/*Encapsulación
Las clases en JavaScript soportan encapsulación usando propiedades y métodos públicos o privados.

Públicos: Son accesibles desde cualquier lugar.
Privados: Se definen usando el prefijo # y solo se pueden usar dentro de la clase. */

class CuentaBancaria {
    #saldo; // Propiedad privada

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(cantidad) {
        this.#saldo += cantidad;
    }

    obtenerSaldo() {
        return this.#saldo;
    }
}

let cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo()); // 1500
// console.log(cuenta.#saldo); // Error: No se puede acceder a una propiedad privada

/*Fundamentos Clave Importantes

constructor: Método especial para inicializar las propiedades.
extends: Define una clase como hija de otra clase.
super: Llama al constructor o métodos de la clase padre.
static: Define métodos que pertenecen a la clase y no a las instancias. */

class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }

    arrancar() {
        return `${this.marca} está arrancando.`;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca); // Llama al constructor de Vehiculo
        this.modelo = modelo;
    }

    detalles() {
        return `Coche: ${this.marca} ${this.modelo}`;
    }
}

let coche = new Coche("Toyota", "Corolla");
console.log(coche.arrancar()); // Toyota está arrancando.
console.log(coche.detalles()); // Coche: Toyota Corolla

/*Ventajas de las Clases

Legibilidad: Proporcionan una forma más clara y estructurada de definir objetos.
Modularidad: Facilitan la reutilización de código mediante la herencia.
Encapsulación: Permiten proteger datos sensibles con propiedades privadas.
Facilidad de uso: Hacen que la programación orientada a objetos sea más accesible en JavaScript. */ 

/*Constructor
Toda clase obligatoriamente debe tener un constructor, si tiene más de uno va a arrojar un error si no lo
tiene el sistema asigna un constructor vacío por defecto y la sintaxis del constructor es: la palabra clave constructor luego entre paréntesis los argumentos que va a recibir y finalmente las llaves donde
se va a a implementar el código. 

constructor(parametro1, parametro2, parametro3){
    this.parametro1=parametro1;
    this.parametro2=parametro2;
    this.parametro3=parametro3;
} 

El constructor es propiamente de las clases, es un método especial que sirve para crear e inicializar un objeto que es creado a partir de una clase. El constructor permite proporcionar cualquier inicialización
personalizada que se necesite y esto debe hacerse antes de que cualquier otro método sea llamado en un objeto instanciado. */