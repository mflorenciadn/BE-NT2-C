///////////////////
//** Variables **//
///////////////////

/////////////
//** let **//
/////////////
let cliente = 'Pedro';
let precioConDescuento = 220;

// Se puede reasignar
cliente = 'Pedra';
cliente = true;

// Se pueden declarar sin inicializar
let precio;
// Puedo reasignarle un valor (sin usar let antes del nombre de la variable)
precio = 100;

console.log(precio);
console.log(cliente);
console.log(precioConDescuento);


/////////////
//** var **//
/////////////
var alumno = 'Carlos';

// Se puede reasignar
alumno = 'Pedra';
alumno = true;

// Se puede declarar más de una vez
var alumno = 'Cristian';

console.log(alumno);

// Hoisting
nombre = 'Florencia';

function saludar (){
    console.log(nombre)
}

saludar();

var nombre;


///////////////
//** const **//
///////////////

const mascota = 'Buddy';

//NO se puede reasignar
mascota = 'Luna'; //arroja error en la consola por más que no se vea en el IDE
