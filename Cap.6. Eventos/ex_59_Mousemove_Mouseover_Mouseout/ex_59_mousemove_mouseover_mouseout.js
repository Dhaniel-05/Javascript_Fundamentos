/*Eventos del Mouse*/

/*Variables que capturan lo que sucede en los elementos html según sus Id´s.*/
let menu = document.getElementById(`mimenu`);
let boton = document.getElementById(`miboton`);

/*Se crea el evento vigilante sobre los elementos del html*/
boton.addEventListener(`click`, function(){
    menu.style.display = `block`;
    /*Se crea un escuchador de eventos para el botón que va a capturarla actividad que suceda en el botón y verificará que cuando se haga clic se ejecute una función la cuál va a tomar el objeto menú que aquí tiene el ID mimenu que es de la lista de html y luego va a buscar su propiedad Style donde posteriormente, buscará la Sub propiedad display y la va a bloquear. Evitando así que la propiedad se ejecute y bloqueando su función de tal manera que al dar clic en el botón será visible para el usuario.*/
});

/*Ahora se crean variables para manipular cuando el mouse pasa por encima de un elemento y se aleja de este mismo para otorgar funcionalidad*/
let Menu = document.getElementById(`menu`);
let btn = document.getElementById(`btn`);
btn.addEventListener(`mouseover`, function(){
    Menu.style.display = `block`;
    /*Se inactiva la subpropiedad none y se activa block mostrando así el contenido*/
});
btn.addEventListener(`mouseout`, function(){
    Menu.style.display = `none`;
    /*Se activa la subpropiedad none ocultando el contenido*/
});

/*Ahora se utilizará el evento Mousemove para visualizar con coordenadas y a través de la consola la trayectoria del mouse*/
document.addEventListener(`mousemove`, function(event){
    console.log(`Posición X: `, event.clientX, `-Posición Y: `, event.clientY);
});