////////////////////////
//** Tipos de datos **//
////////////////////////

// Undefined
// let cliente;
// console.log(cliente);
// console.log(typeof cliente);

// Boolean
// const tieneDescuento = false;
// console.log(tieneDescuento);
// console.log(typeof tieneDescuento);

// Number
// const numero1 = 20.20;
// console.log(typeof numero1);
// const numero2 = 30;
// console.log(typeof numero2);
// const numero3 = -100;
// console.log(typeof numero3);

// Strings o Cadenas de Texto
// const cliente2 = "Pedro";
// let producto = 'Monitor 20 pulgadas';

// const numero = "30";
// console.log(typeof numero);

// const numero2 = 30;
// console.log(typeof numero2);

// BigInt
// const numeroGrande = BigInt(918298193891887139831091038173813);
// console.log(typeof numeroGrande);
// const numero = 10;
// const numero2 = 20;
// console.log( numero + Number(numeroGrande));

// Symbol
// const primerSymbol = Symbol(30);
// const segundoSymbol = Symbol(30);
// console.log( primerSymbol === segundoSymbol );
// console.log( primerSymbol.valueOf() );
// console.log( segundoSymbol.valueOf() );

// Null
// const descuento = null;
// console.log(typeof descuento);


// Comparación y Operador Estricto
const numero1 = 20
const numero2 = "20"

/*
    ==  ( Comparación valor, no tipo)
    === (Comparación estricta - Revisa valor y tipo de dato)
*/

if(numero1 === numero2 ) {
    console.log('¡Sí, son iguales!')
} else {
    console.log('No, no son iguales')
};

if(numero1 == numero2 ) {
    console.log('¡Sí, son iguales!')
} else {
    console.log('No, no son iguales')
};
