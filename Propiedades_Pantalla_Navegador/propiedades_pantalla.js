/*Propiedades de Pantalla y Navegador*/

//Propiedades de Pantalla
document.write(`Propiedades de Pantalla <br><br>`); 

// Muestra la altura disponible de la pantalla (excluyendo elementos como la barra de tareas)
document.write(`availHeight: ${screen.availHeight} <br>`); 

// Muestra el ancho disponible de la pantalla en píxeles
document.write(`availWidth: ${screen.availWidth} <br>`); 

// Muestra la profundidad de color de la pantalla en bits (generalmente 24 o 32)
document.write(`colorDepth: ${screen.colorDepth} <br>`); 
document.write(`<br>`); 

//Propiedades del Navegador
document.write(`Propiedades del Navegador <br><br>`); 

// Muestra el nombre del navegador (en navegadores modernos utiliza userAgentData si está disponible, o userAgent como respaldo)
document.write(`Nombre del navegador: ${navigator.userAgentData?.brands[0]?.brand || navigator.userAgent} <br>`); 

// Muestra la versión del navegador (utilizando userAgentData para navegadores modernos o "Desconocida" si no está disponible)
document.write(`Versión del navegador: ${navigator.userAgentData?.brands[0]?.version || "Desconocida"} <br>`); 

// Indica si las cookies están habilitadas en el navegador
document.write(`Cookies habilitadas: ${navigator.cookieEnabled ? "Sí" : "No"} <br>`); 

// Muestra el número de núcleos del procesador disponible en el dispositivo (útil para optimizar rendimiento)
document.write(`Número de núcleos de CPU: ${navigator.hardwareConcurrency || "No disponible"} <br>`); 
document.write(`<br>`); 

//Propiedades en desuso
document.write(`Propiedades en Desuso <br><br>`); 

// Muestra el nombre del navegador, pero esta propiedad está en desuso porque todos los navegadores modernos devuelven "Netscape".
document.write(`appName: ${navigator.appName} <br>`);

// Muestra una cadena con información sobre el navegador y sistema operativo, pero es poco confiable y fácil de manipular.
document.write(`appVersion: ${navigator.appVersion} <br>`); 
// Muestra el número de plugins instalados en el navegador. Está en desuso porque los plugins como Flash o Java ya no se utilizan.
document.write(`plugins: ${navigator.plugins.length} <br>`);
