/**
 * Tanto fetch como axios son bibliotecas de JavaScript que se utilizan para realizar
 * solicitudes HTTP (Métodos =[GET, POST, PUT, PATCH, DELETE, etc..]).
 * La principal diferencia entre ellas es la forma en que manejan las respuestas y los errores,
 * así como la forma en que se usan en el código.
 */

//usando Método Fetch
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("peticion finalizada");
  });
/**
 * En este ejemplo, utilizamos el método fetch para realizar una solicitud GET a la URL "https://jsonplaceholder.typicode.com/posts".
 * Luego, utilizamos .then() para manejar la respuesta y convertirla
 * en un objeto JSON utilizando el método .json().
 * Después, mostramos la data en la consola. Si ocurre algún error, lo manejamos en el bloque catch.
 */

//Usando la libreria axios
let URL_API = "https://fakestoreapi.com/products";
axios
  .get(URL_API)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
/**
 * En este ejemplo, utilizamos axios para realizar una solicitud GET a la URL "https://fakestoreapi.com/products". 
 * Luego, utilizamos .then() para manejar la respuesta y acceder a los datos utilizando response.data. 
 * Si ocurre algún error, lo manejamos en el bloque catch.
 * NOTA:
    La sintaxis de fetch y axios es ligeramente diferente, pero ambas se utilizan para realizar solicitudes HTTP
    y manejar las respuestas y los errores. La principal diferencia es que fetch utiliza la API de Promises nativa de JavaScript,
    mientras que axios utiliza su propia implementación de Promises.
    También puedes notar que axios proporciona una forma más clara y directa de acceder a los datos de la respuesta,
    mientras que fetch requiere una llamada adicional al método .json() para convertir la respuesta a un objeto JSON.
 */

//Usando async/await con el método fetch */
async function obtenerPostsConFetch() {
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

obtenerPostsConFetch();
/**
 * En este ejemplo, hemos definido una función asincrónica llamada obtenerPostsConFetch que utiliza await
 * para esperar a que se resuelva la promesa devuelta por fetch.
 * Luego, en el bloque try, asignamos la respuesta a la variable response y convertimos los datos
 * en un objeto JSON utilizando el método response.json().
 * Después, hacemos un console de la data obtenida. Si ocurre algún error, lo manejamos en el bloque catch.
 */

//Usando async/await con Axios
let URL = "https://fakestoreapi.com/users";
async function obtenerUsersConAxios() {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("peticion finalizada OK");
  }
}

obtenerUsersConAxios();
/**
 * Para este ejemplo, hemos definido una función asincrónica llamada obtenerUsersConAxios que utiliza await
 * para esperar a que se resuelva la promesa devuelta por axios.get. Luego, en el bloque try,
 * asignamos la respuesta a la variable response y accedemos a los datos utilizando response.data.
 *  Después, hacemos un console de la data obtenida. Si ocurre algún error, lo manejamos en el bloque catch.
 */
