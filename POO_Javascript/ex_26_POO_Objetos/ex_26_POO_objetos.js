/*Programación Orientada a Objetos (POO)

La POO es un paradigma de programación que organiza el software en clases y objetos para modelar conceptos del mundo real. Este enfoque promueve la reutilización del código, la modularidad y una mejor organización del software.

Clases: Plantillas o moldes para crear objetos, que definen atributos (propiedades) y métodos (comportamientos).
Objetos: Instancias de una clase que tienen sus propios datos y comportamientos basados en la clase de la que fueron creados.

Pilares Fundamentales de la POO

1. Abstracción
La abstracción se centra en ocultar los detalles complejos de implementación y mostrar solo las características esenciales de un objeto.

Ejemplo:

Un coche tiene atributos como color, modelo y métodos como arrancar() o frenar().
No necesitas saber cómo funciona el motor internamente para usar el coche; solo interactúas con los métodos y atributos relevantes.
Ventajas:

Reduce la complejidad.
Facilita el uso de objetos complejos sin necesidad de conocer su funcionamiento interno.

2. Encapsulamiento
El encapsulamiento consiste en proteger los datos de un objeto para que solo puedan ser manipulados a través de métodos específicos.

Principio clave: Restringir el acceso directo a los atributos y proporcionar métodos públicos (getters y setters) para interactuar con ellos.

Ventajas:

Evita modificaciones indebidas de datos.
Mejora la seguridad del software.
Promueve un diseño limpio y estructurado.

3. Herencia
La herencia permite que una clase (clase hija) derive de otra clase (clase padre) y reutilice sus atributos y métodos.

Concepto clave:

La clase hija puede heredar comportamientos y propiedades de la clase padre, y además, agregar o modificar sus propias características.

Ventajas:

Promueve la reutilización del código.
Permite extender funcionalidades de forma eficiente.

4. Polimorfismo
El polimorfismo permite que un mismo método o función se comporte de diferentes maneras según el contexto.

Tipos principales:

Sobreescritura: Una clase hija redefine un método heredado de la clase padre.
Sobrecarga: (No soportada en JavaScript, pero sí en otros lenguajes como Java o C#) Se define un método con el mismo nombre pero diferentes parámetros.

Ventajas:

Proporciona flexibilidad al diseño.
Permite usar una interfaz común para diferentes tipos de objetos.
*/

//Creación del Objero Auto.
document.write(`Creación de Objeto Auto <br>`)
var Auto = {
    marca: `Toyota`, /*Atributo marca*/
    modelo: `Corolla`, /*Atributo modelo*/
    color: `Rojo`, /*Atributo color*/
    año: `2024`, /*Atributo año*/
    combustible: `Diesel`, /*Atributo combustible*/
    tipo: `Sedán`, /*Atributo tipo*/
    radio: [`FM`,`MP4`,`USB`] /*Atributo radio: este contiene un arreglo (array) de opciones de radio disponibles.*/
}
/*Acceso a propiedades: Se utiliza la notación de punto (Auto.marca) para acceder a las propiedades del objeto. Auto.marca devuelve el valor asociado a la clave marca, que es 'Toyota'.
Auto.radio Contiene un arreglo (['FM', 'MP4', 'USB']). En este caso, toda la lista del arreglo será mostrada: "FM,MP4,USB". */
document.write(`Marca: ${Auto.marca}`,`<br>`);
document.write(`Radio: <br>`);

Auto.radio.forEach((opcion, index) => {
    document.write(`${index + 1}. ${opcion}<br>`);
});

/* Explicación del ciclo ForEach: 

Auto.radio: Accede al arreglo de opciones de radio dentro del objeto Auto.

forEach: Es un método de los arreglos que ejecuta una función para cada elemento del arreglo.

Callback (opcion, index):
- opcion: Representa el valor actual del elemento del arreglo. Por ejemplo, en la primera iteración será "FM", en la segunda "MP4", y así sucesivamente.
- index: Es la posición del elemento dentro del arreglo. En un arreglo como ["FM", "MP4", "USB"], los índices son 0, 1 y 2.

Dentro de la función callback:
- `${index + 1}`: Muestra el número de la opción (se suma 1 al índice para empezar desde 1 en lugar de 0).
- `${opcion}`: Muestra el valor de la opción actual (ejemplo: "FM", "MP4", "USB").
- `<br>`: Inserta un salto de línea en el HTML después de mostrar cada opción.

document.write:
- Utilizamos una plantilla de cadena (template literal) con la sintaxis `${}` para insertar variables.
- `index + 1`: Convierte el índice para que comience en 1 en lugar de 0, mejorando la presentación al usuario.
*/
