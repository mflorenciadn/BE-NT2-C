/////////////////////
//** Async/Await **//
////////////////////

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = async () => {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    console.log(resultado);
    return resultado;
};

const comentariosBlog = consultarAPI();

console.log(comentariosBlog);
