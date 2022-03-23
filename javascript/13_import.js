import CODIGO_CLIENTE_VIP, { esClienteConDescuento, variableExcursionista } from './12_export.js';

const generarDescuento = (codigoCliente) => esClienteConDescuento(codigoCliente)
    ? `Aplica descuento (código de cliente: ${CODIGO_CLIENTE_VIP})`
    : 'No aplica descuento';


console.log(generarDescuento(29));
console.log(generarDescuento(35));
