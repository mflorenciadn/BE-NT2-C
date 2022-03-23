/////////////////////////
//** Template string **//
/////////////////////////

const producto = "Tablet de 12 pulgadas";
const precio = 400;
const marca = "Samsung";

function textoDesdeFuncion() {
    return "Este texto proviene de la función"
};

console.log( producto + " $" + precio + ", Marca: " + marca );

console.log(`${producto} $${precio}, Marca: ${marca}, ${textoDesdeFuncion()}`);
