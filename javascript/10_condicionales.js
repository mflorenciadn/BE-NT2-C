///////////////////////////
//** Condicionales JS **//
//////////////////////////

const estaAutenticado = true;

estaAutenticado ?
    console.log('El usuario está autenticado') :
    console.log('El usuario no está autenticado')


// Doble ternario
const saldoEnCuenta = 600;
const montoAPagar = 800;
const tieneTarjeta = false;

saldoEnCuenta > montoAPagar ?
    console.log('Puede pagar con saldo') :
    tieneTarjeta ?
        console.log('Puede pagar con tarjeta') :
        console.log('No puede pagar')


// && : realizar una acción sí y sólo si se cumple con la condición
const esClienteVip = true;

esClienteVip && console.log('El usuario es cliente VIP')

// Es lo mismo que esto:
// const esClienteVip = true
// if(esClienteVip) {
//     console.log('El usuario es cliente VIP')
// }



// || : se usa para setear valores por defecto
const TIPO_CLIENTE_DEFAULT= 'CLASSIC';

const cliente1 = {
    id: 1234,
    nombre: 'Pepe',
    tipo: '',
}

const getDescripcionTipoCliente = (cliente) => cliente.tipo || TIPO_CLIENTE_DEFAULT;

// Es lo mismo que esto:
// function getDescripcionTipoCliente (cliente) {
//     if(cliente.tipo !== ''){
//         return cliente.tipo
//     }
//     else {
//          return 'CLASSIC';
//     }
//}

const tipoDeCliente1= getDescripcionTipoCliente(cliente1);

console.log('El cliente 1 es de tipo: ',tipoDeCliente1);
