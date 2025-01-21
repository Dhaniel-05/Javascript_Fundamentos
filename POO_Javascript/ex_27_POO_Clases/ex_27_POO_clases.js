/* Clases
Las clases son una forma de definir objetos y Estructura de datos con un conjunto de propiedades y métodos; proporcionan una sintaxis más clara y legible al momento de trabajar con nuestros objetos. (Las clases son como un molde para manejar Objetos).

Definición: Las clases son plantillas o estructuras que se utilizan para crear objetos. Definen un conjunto de propiedades (atributos) y métodos (funciones) que los objetos instanciados a partir de la clase compartirán.

Propósito: Proporcionan una manera organizada, clara y legible de modelar datos y comportamientos relacionados, facilitando el uso y la reutilización del código.

Ventaja: Permiten trabajar con un enfoque orientado a objetos, proporcionando soporte para encapsulación, herencia y polimorfismo.

Ejemplo: Pensar en una clase como el plano de un auto. Define sus propiedades (como marca, modelo, color) y sus comportamientos (acelerar, frenar), pero necesitas construir un auto real (crear un objeto) para usarlo.


Sintaxis moderna:
En lenguajes como JavaScript (ES6 en adelante), las clases ofrecen una sintaxis más intuitiva y estructurada para definir y trabajar con objetos en comparación con los métodos tradicionales basados en prototipos.
*/

// Definición de la clase Vehiculos
class Vehiculos {
    // Atributos de clase: representan las propiedades de cada vehículo
    marca = `Ferrari`;
    modelo = `Spider`;
    color = `Rojo`;
    tipoCombustible = `Gasolina`;
    velocidadMaxima = `330 km/h`;
    precio = `$61,280,000`;

    // Métodos de clase: representan acciones o comportamientos del vehículo
    acelerar() {
        return `El ${this.marca} acelera de 0 a 100 km/h en solo 3 segundos.`;
    }
    frenar() {
        return `El ${this.marca} ${this.modelo} puede frenar de 100 a 0 km/h en tan solo 2.5 segundos.`;
    }
}

//Crear Objeto basado en la Clase.
const ferrari = new Vehiculos(); /*Se declara una constante, luego la palabra reservada new significa que se está creando una nueva instancia de tipo objeto y al colocar el nombre de la clase, significa que para este nuevo objeto, van a estar disponibles los atributos y métodos de la clase previamente creada. */


// Mostrar propiedades y métodos del objeto Ferrari
document.write(`Marca: ${ferrari.marca}<br>`);
document.write(`Modelo: ${ferrari.modelo}<br>`);
document.write(`Color: ${ferrari.color}<br>`);
document.write(`Precio: ${ferrari.precio}<br>`);
document.write(ferrari.acelerar(), `<br>`);
document.write(ferrari.frenar(), `<br>`);
document.write(`<br>`); // Salto de línea

//Este nuevo objeto puede utilizar todos lo métodos y atributos de la clase.
const lamborghini = new Vehiculos();
//Se sobreescriben los atributos
lamborghini.marca = `Lamborghini`;
lamborghini.modelo = `Huracán EVO`;
lamborghini.color = `Amarillo`;
lamborghini.precio = `$82,350,000`;

// Mostrar propiedades y métodos del objeto Lamborghini
document.write(`Marca: ${lamborghini.marca}<br>`);
document.write(`Modelo: ${lamborghini.modelo}<br>`);
document.write(`Color: ${lamborghini.color}<br>`);
document.write(`Precio: ${lamborghini.precio}<br>`);
document.write(lamborghini.acelerar(), `<br>`);
document.write(lamborghini.frenar(), `<br>`);
document.write(`<br>`); // Salto de línea

//Este nuevo objeto puede utilizar todos lo métodos y atributos de la clase.
const bugatti = new Vehiculos();
bugatti.marca = `Bugatti`;
bugatti.modelo = `Fuzze`;
bugatti.color = `Azul`;
bugatti.precio = `$63,000,000`;

// Mostrar propiedades y métodos del objeto Bugatti
document.write(`Marca: ${bugatti.marca}<br>`);
document.write(`Modelo: ${bugatti.modelo}<br>`);
document.write(`Color: ${bugatti.color}<br>`);
document.write(`Precio: ${bugatti.precio}<br>`);
document.write(bugatti.acelerar(), `<br>`);
document.write(bugatti.frenar(), `<br>`);
document.write(`<br>`); // Salto de línea


//Clase Animales depredadores felinos
class Animales {
    // Atributos de la clase
    nombre = "Animal";
    especie = "Desconocida";
    habitat = "Desconocido";
    velocidad = "Desconocida";
    sonido = "Silencio";

    // Métodos de la clase
    cazar() {
        return `${this.nombre}, un ${this.especie}, caza en su hábitat de ${this.habitat}.`;
    }

    correr() {
        return `${this.nombre} puede alcanzar velocidades de ${this.velocidad}.`;
    }

    rugir() {
        return `${this.nombre} emite un sonido característico: "${this.sonido}".`;
    }
}

// Objeto Pantera
const pantera = new Animales();
pantera.nombre = "Pantera";
pantera.especie = "Panthera onca";
pantera.habitat = "Selvas y bosques tropicales";
pantera.velocidad = "50 km/h";
pantera.sonido = "Gruñido grave";

document.write(`<h2>${pantera.nombre}</h2>`);
document.write(`Especie: ${pantera.especie}<br>`);
document.write(`Hábitat: ${pantera.habitat}<br>`);
document.write(`Velocidad máxima: ${pantera.velocidad}<br>`);
document.write(pantera.cazar(), `<br>`);
document.write(pantera.correr(), `<br>`);
document.write(pantera.rugir(), `<br>`);
document.write(`<br>`);

// Objeto León
const leon = new Animales();
leon.nombre = "León";
leon.especie = "León";
leon.habitat = "Sabanas y praderas";
leon.velocidad = "80 km/h";
leon.sonido = "Rugido poderoso";

document.write(`<h2>${leon.nombre}</h2>`);
document.write(`Especie: ${leon.especie}<br>`);
document.write(`Hábitat: ${leon.habitat}<br>`);
document.write(`Velocidad máxima: ${leon.velocidad}<br>`);
document.write(leon.cazar(), `<br>`);
document.write(leon.correr(), `<br>`);
document.write(leon.rugir(), `<br>`);
document.write(`<br>`);

// Objeto Guepardo
const guepardo = new Animales();
guepardo.nombre = "Guepardo";
guepardo.especie = "Acinonyx jubatus";
guepardo.habitat = "Sabanas africanas";
guepardo.velocidad = "120 km/h";
guepardo.sonido = "Aullido agudo";

document.write(`<h2>${guepardo.nombre}</h2>`);
document.write(`Especie: ${guepardo.especie}<br>`);
document.write(`Hábitat: ${guepardo.habitat}<br>`);
document.write(`Velocidad máxima: ${guepardo.velocidad}<br>`);
document.write(guepardo.cazar(), `<br>`);
document.write(guepardo.correr(), `<br>`);
document.write(guepardo.rugir(), `<br>`);
document.write(`<br>`);

// Objeto Tigre
const tigre = new Animales();
tigre.nombre = "Tigre";
tigre.especie = "Tigris";
tigre.habitat = "Bosques y selvas asiáticas";
tigre.velocidad = "65 km/h";
tigre.sonido = "Rugido fuerte";

document.write(`<h2>${tigre.nombre}</h2>`);
document.write(`Especie: ${tigre.especie}<br>`);
document.write(`Hábitat: ${tigre.habitat}<br>`);
document.write(`Velocidad máxima: ${tigre.velocidad}<br>`);
document.write(tigre.cazar(), `<br>`);
document.write(tigre.correr(), `<br>`);
document.write(tigre.rugir(), `<br>`);
