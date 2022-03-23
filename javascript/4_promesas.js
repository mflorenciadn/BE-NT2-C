//////////////////
//** Promesas **//
//////////////////

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = () => {
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => {
            resultado.forEach( comentario => {
                console.log(comentario);
            })
        })
}

consultarAPI();
