/**
 *Ejemplos de diferencia con Fecht y axios usando en ambos el metodo get
 * Ambas fetch y axios son bibliotecas de JavaScript que se utilizan para realizar solicitudes HTTP.
 * La principal diferencia entre ellas es la forma en que manejan las respuestas y los errores, así como la forma en que se usan en el código.
 * Aquí hay algunos ejemplos que ilustran las diferencias entre fetch y axios cuando se utilizan para realizar solicitudes HTTP utilizando el método GET:
 */
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
/**
 * En este ejemplo, utilizamos fetch para realizar una solicitud GET a la URL "https://jsonplaceholder.typicode.com/posts".
 * Luego, utilizamos .then() para manejar la respuesta y convertirla
 * en un objeto JSON utilizando el método .json(). Después, hacemos algo con los datos.
 * Si ocurre algún error, lo manejamos en el bloque catch.
 */

/**Usando axios */
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
/**
 * En este ejemplo, utilizamos axios para realizar una solicitud GET a la URL "https://jsonplaceholder.typicode.com/posts". 
 * Luego, utilizamos .then() para manejar la respuesta y acceder a los datos utilizando response.data. Si ocurre algún error,
 * lo manejamos en el bloque catch.
Como puedes ver, la sintaxis de fetch y axios es ligeramente diferente, pero ambas se utilizan para realizar
 solicitudes HTTP y manejar las respuestas y los errores. La principal diferencia es que fetch utiliza la API de Promises nativa de JavaScript, mientras que axios utiliza su propia implementación de Promises. También puedes notar que axios proporciona una forma más clara y directa de acceder a los datos de la respuesta,
 mientras que fetch requiere una llamada adicional al método .json() para convertir la respuesta a un objeto JSON.
 */

/**Ahora usando async/await para ambos métodos */
async function obtenerPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    //Opcionar
    /*if (data.code == 200) {
      console.log("Todo ok");
    } else {
      console.log("Error al intentar mover consignación ");
    } */
  } catch (error) {
    console.error(error);
  }
}

obtenerPosts();
/**
 * En este ejemplo, hemos definido una función asincrónica llamada obtenerPosts que utiliza await para esperar a que se resuelva la promesa devuelta por fetch.
 * Luego, en el bloque try, asignamos la respuesta a la variable response y convertimos los datos
 * en un objeto JSON utilizando el método response.json(). Después, hacemos algo con los datos. Si ocurre algún error, lo manejamos en el bloque catch.
 */
async function obtenerPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("peticion finalizada");
  }
}

obtenerPosts();
/**
 * En este ejemplo, hemos definido una función asincrónica llamada obtenerPosts que utiliza await para esperar 
 * a que se resuelva la promesa devuelta por axios.get. Luego, en el bloque try, 
 * asignamos la respuesta a la variable response y accedemos a los datos utilizando response.data.
 *  Después, hacemos algo con los datos. Si ocurre algún error, lo manejamos en el bloque catch.

En ambos ejemplos, utilizamos async/await para hacer que nuestro código sea más legible y fácil de entender.
 Al utilizar async/await, evitamos el anidamiento de promesas y manejamos los errores de manera más clara.
 */

/**
  *     "¿Fetch o Axios? Descubre cuál es la mejor opción para tus proyectos"
    "Fetch vs Axios: ¿Cuál es la mejor manera de hacer solicitudes HTTP en JavaScript?"
    "Fetch y Axios: ¿Cuáles son las principales diferencias y cuál deberías elegir?"
    "Diferencias entre Fetch y Axios: Cómo elegir la mejor opción para tu proyecto"
    "¿Cuál es la mejor manera de hacer solicitudes HTTP en 2023? Fetch o Axios"
    "Fetch o Axios: Descubre cuál es la mejor opción para hacer solicitudes en tiempo real"
    "Fetch vs Axios: ¿Cuál es más fácil de usar y más poderoso?"
    "Fetch vs Axios: Ventajas y desventajas de ambos métodos para solicitudes HTTP"
    "Fetch y Axios: ¿Qué método es más rápido y escalable para solicitudes HTTP?"
    "Fetch o Axios: Comparación en profundidad de las características y beneficios de ambos métodos"
  */
