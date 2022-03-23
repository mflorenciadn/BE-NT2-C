/////////////////////////
//** Spread Operator **//
////////////////////////

// Spread operator con objetos //

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};
const cliente = {
    nombre: 'Pedro',
    premium : true
};

const nuevoObjeto = {
    producto: {...producto},
    cliente: {...cliente}
};

console.log(nuevoObjeto);
console.log(cliente);
console.log(producto);



// Spread operator con arrays //
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const nuevoArreglo1 = [...tecnologias, 'GraphQL']; // Añade todos los elementos de "tecnologias" al final de nuevoArreglo
const nuevoArreglo2 = ['GraphQL', ...tecnologias]; // Añade todos los elementos de "tecnologias" al inicio de nuevoArreglo

console.log(tecnologias);
console.log(nuevoArreglo1);
console.log(nuevoArreglo2);
