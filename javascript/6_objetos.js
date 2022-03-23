/////////////////
//** Objetos **//
/////////////////

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);


// Object Literal Enhacement
const autenticado = true;
const usuario = "Pedro";

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)


// Manipulación de objetos
// const producto2 = {
//     nombre: "Tablet",
//     precio: 300,
//     disponible: true
// }

// Object.freeze(producto) - Freeze - No deja modificarlo, no permite añadir ni eliminar
// Object.seal(producto) - Modificar propiedades existentes, no permite añadir ni eliminar

// Reescribir un valor
// producto2.nombre = "Monitor Curvo"

// Si no existe, lo va a añadir
// producto2.imagen = "imagen.jpg"

// delete producto2.disponible

// console.table(producto2)
