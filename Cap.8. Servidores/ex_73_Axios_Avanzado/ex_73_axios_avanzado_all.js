/* Axios: axios.get().then().catch()

Es una biblioteca basada en promesas que se utiliza para realizar solicitudes HTTP.
Compatible con navegadores y Node.js.
Simplifica el trabajo con APIs RESTful.

JSON Placeholder:
Es una API pública gratuita que proporciona datos de prueba como posts, comments, users, etc.
Es ideal para proyectos de ejemplo o pruebas.

Múltiples peticiones simultáneas con axios.all:
Permite ejecutar varias solicitudes al mismo tiempo.
Devuelve todas las respuestas juntas para procesarlas.

Interceptors en Axios:
Request Interceptor: Modifica o configura cada solicitud antes de que se envíe al servidor (por ejemplo, para agregar tokens de autenticación).
Response Interceptor: Permite procesar o modificar la respuesta recibida del servidor antes de que sea accesible

Ejemplo de Múltiples peticiones con Axios:

let pedido1 = axios.get('https://jsonplaceholder.typicode.com/posts/1');
let pedido2 = axios.get('https://jsonplaceholder.typicode.com/posts/2');
let pedido3 = axios.get('https://jsonplaceholder.typicode.com/posts/3');

axios.all([pedido1, pedido2, pedido3])
.then(axios.spread((respuesta1, respuesta2, respuesta3) =>{
    //Código o programa a diseñar
    }))
.catch(error => {
    //Manejo de errores 
});

let miToken = `Este es mi token`;

axios.interceptors.request.use(
    (config)=>{
        config.headers.Authorization = `Bearer ${miToken}`;
        return config;
    },(error)=>{
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    (respuesta)=>{
        respuesta.data.customField = 'Nuevo Campo';
        return respuesta;
    },(error)=>{
        return Promise.reject(error);
    }
)

Incorporación de Axios:
Se incluye Axios desde un CDN (unpkg.com) para no tener que instalar dependencias.

Peticiones HTTP:
Tres solicitudes GET apuntan a JSON Placeholder.
Los datos simulados devueltos por la API se procesan juntos utilizando axios.all.

Manejo de resultados:
Con axios.spread, se accede a cada respuesta de manera independiente (respuesta1, respuesta2, respuesta3).
Los resultados se imprimen dinámicamente en el DOM.

Manejo de errores:
Los errores se capturan con catch y se muestran tanto en la consola como en el DOM.

Interceptors.
Request Interceptor: Agrega un token de autenticación a las solicitudes.
Response Interceptor: Modifica las respuestas agregando un campo personalizado.
*/




// Función para realizar múltiples peticiones
document.getElementById('cargarDatos').addEventListener('click', () => {
    // URLs de prueba de JSON Placeholder 
    let pedido1 = axios.get('https://jsonplaceholder.typicode.com/posts/1');
    let pedido2 = axios.get('https://jsonplaceholder.typicode.com/posts/2');
    let pedido3 = axios.get('https://jsonplaceholder.typicode.com/posts/3');

    // Ejecutar todas las peticiones al mismo tiempo con axios.all
    axios.all([pedido1, pedido2, pedido3])
        // Usamos axios.spread para descomponer las respuestas individuales
        .then(axios.spread((respuesta1, respuesta2, respuesta3) => {
            // Mostrar los resultados en la página
            document.getElementById('resultado').innerHTML = `
                <h2>Resultados:</h2>
                <p><strong>Post 1:</strong> ${respuesta1.data.title}</p>
                <p><strong>Post 2:</strong> ${respuesta2.data.title}</p>
                <p><strong>Post 3:</strong> ${respuesta3.data.title}</p>
            `;
        }))
        // Manejo de errores: mostramos un mensaje de error en la consola y el DOM
        .catch(error => {
            console.error('Error en las solicitudes:', error);
            document.getElementById('resultado').innerText = 'Ocurrió un error al cargar los datos.';
        });
});

// Variable con un token de autenticación ficticio
let miToken = 'Este es mi token';

// Interceptor de solicitudes: agrega el token a los encabezados de cada solicitud 
axios.interceptors.request.use(
    (config) => {
        // Modificamos la configuración de la solicitud para incluir el token
        config.headers.Authorization = `Bearer ${miToken}`;
        return config;
    },
    // Manejo de errores antes de enviar la solicitud 
    (error) => {
        return Promise.reject(error);
    }
);

 // Interceptor de respuestas: modifica los datos recibidos antes de que lleguen al código 
axios.interceptors.response.use(
    (respuesta) => {
        // Agregamos un nuevo campo a la respuesta para mostrar que fue interceptada 
        respuesta.data.customField = 'Nuevo Campo';
        return respuesta;
    },
    (error) => {
        // Manejo de errores que puedan ocurrir durante la respuesta 
        return Promise.reject(error);
    }
);