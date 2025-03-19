/*Prototipos y Objetos
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor*/

function Libro(autor, titulo, pag){
    this.autor = autor;
    this.titulo = titulo;
    this.pag = pag;
}

let libro1 = new Libro(`Gabriel García Márquez`, `Cien años de soledad`, 500);

/*En Consola se verá lo siguiente:

libro1.__proto__
constructor: ƒ Libro(autor, titulo, pag)
[[Prototype]]: Object

Propiedades que pueden heredarse:

Object.prototype

{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
constructor:ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

valueOf(); 
Cuando se llama a `libro1.valueOf()`, JavaScript sube por la cadena de prototipos hasta encontrar el método `valueOf` en `Object.prototype`. Este método está definido de forma predeterminada y devuelve el objeto mismo. En este caso, el método `valueOf` devuelve el objeto `libro1` con sus propiedades y valores así:

libro1.valueOf(); 
Libro {autor: 'Gabriel García Márquez', titulo: 'Cien años de soledad', pag: 500}
autor: "Gabriel García Márquez"
pag: 500
titulo: "Cien años de soledad"
[[Prototype]]: Object */

/*Ejemplo con Array*/
let arrays = [1,2,3];

/* arrays.pop
ƒ pop() { [native code] } 
El método pop es nativo del Javascript*/

/*Ejemplo con String*/
let palabra = `Javascript`;
/*palabra.fixed
ƒ fixed() { [native code] }
El método fixed es nativo del Javascript*/