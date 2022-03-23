/////////////////
//** Exports **//
/////////////////

const CODIGO_CLIENTE_VIP = 35;

const esClienteConDescuento = codigoCliente => codigoCliente === CODIGO_CLIENTE_VIP && metodoDePago === 'DEBITO'

const variableExcursionista = 'Hola, no sirvo para nada';

export default CODIGO_CLIENTE_VIP;
//o directamente: export default CODIGO_CLIENTE_VIP = 35;

export { esClienteConDescuento, variableExcursionista };
