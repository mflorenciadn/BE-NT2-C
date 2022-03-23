////////////////////
//** Funciones **//
///////////////////

// Funciones declarativas //

// Admiten hoisting
sumar(5,2);

function sumar(numero1, numero2) {
    return numero1 + numero2;
}
const resultado = sumar(6,4);

const totalAPagar = sumar (289,327832);
console.log('Resultado función sumar', resultado);



// Expresión de función - con valores por defecto //
const multiplicar = function(numero1 = 2, numero2 = 2) {
    return numero1 * numero2
}
console.log('Resultado función multiplicar', multiplicar());



// Función flecha //

//con dos o más parámetros
const restar = (numero1, numero2) => numero1 - numero2;
console.log('Resultado función restar', restar(5,3));

//con un solo parámetro
const saludar = nombre => console.log(`Hola ${nombre}`);
saludar('Florencia');

//sin parámetros
const saludar2 = () => console.log(`Hola`);
saludar2();

//con más de una línea  - void
const saludarConNombreYApellidoVoid = (nombre, apellido) => {
     console.log(`Hola! Tu nombre es: ${nombre}`);
     console.log(`y tu apellido es: ${apellido}`);
};
saludarConNombreYApellidoVoid('Florencia', 'Do Nascimento')

//con más de una línea y return
const retornarApellido = (nombre, apellido) => {
    console.log(`Hola! Tu nombre es: ${nombre}`);
    apellido && console.log(`y tu apellido es: ${apellido}`);
    return apellido;
};
retornarApellido('Florencia', 'Do Nascimento')
retornarApellido('Pepe')



// Código limpio

// Evitar "números mágicos"
const CODIGO_CLIENTE_VIP = 35;

// Extraer condicionales
const esClienteConDescuento = codigoCliente === CODIGO_CLIENTE_VIP && metodoDePago === 'DEBITO'

// const generarDescuento = () => {
//     if(esClienteConDescuento){
//         return 'Aplica descuento'
//     } else {
//         return 'No aplica descuento'
//     }
// }

// Usar operadores ternarios
const generarDescuento = () => esClienteConDescuento ? 'Aplica descuento' : 'No aplica descuento'
