////////////////
//** Arrays **//
////////////////

const arrayDiferentesTiposDeDatos = [20, 30, true, 'React', 'JavaScript', '', undefined, 43.4343]

console.log(arrayDiferentesTiposDeDatos[10])
console.table(arrayDiferentesTiposDeDatos)
console.log(arrayDiferentesTiposDeDatos.length)
console.log(arrayDiferentesTiposDeDatos.toString())

const arrayVacio = [];

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

const numeros = [10, 20, 30]


// Operaciones en los arreglos

// Añadir elementos al array
// tecnologias.push('GraphQL') // Añade al final del array
// tecnologias.unshift('GraphQL') // Añade al inicio del array

// const nuevoArreglo = [...tecnologias, 'GraphQL'] // Añade todos los elementos de "tecnologias" al final de nuevoArreglo
// const nuevoArreglo = ['GraphQL', ...tecnologias] // Añade todos los elementos de "tecnologias" al inicio de nuevoArreglo

// Eliminar elementos del array
// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elimina del inicio
// tecnologias.splice(2, 3) // Elimina de una posición en especifica

// Obtener un nuevo array con todos los elementos que cumplan la condición
// const nuevoArray = tecnologias.filter(function(tecnologia) {
//     return tecnologia === 'React'
// })

// Reemplazar elemento del array
// tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map(tecnologia => {
    if(tecnologia === 'HTML') {
        return 'GraphQL'
    } else {
        return tecnologia
    }
})

//que es igual a:
// const nuevoArray = tecnologias.map(tecnologia => tecnologia === 'HTML' ? 'GraphQL' : tecnologia

console.table(tecnologias)
console.table(nuevoArray)


// Array functions

// Includes - Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('GraphQL')

// Some - Devuelve si al menos uno cumple la condición
// const resultado = numeros.some( numero => numero > 15)

// Find - Devuelve el primer elemento que cumpla la condicion
// const resultado = numeros.find( numero => numero > 5)

// Every - Retorna true o false si todos cumplen la condición
// const resultado = numeros.every( numero => numero > 9)

// Reduce - Acumulando en el total
// const resultado = numeros.reduce( (total, numero) => numero + total, 0)

// Filter - Crea un nuevo array en base a una condición
// const resultado = tecnologias.filter( tecnologia => tecnologia === 'Node.js')
// const resultado = numeros.filter( numero => numero !== 10)

// ForEach - Sólo se debe usar cuando no aplico ninguna cambio de estado sobre los elementos que recorro (porque muta al array)
// tecnologias.forEach((tecnologia, index) => console.table(index, tecnologia))

// Crear un nuevo array
const arrayMap = tecnologias.map( tecnologia => tecnologia)

//Ejemplo find
const alumnos = [{id: 1, nombre: 'Pepe'},{id: 2, nombre: 'Fulano'}];
const notas = [{idAlumno: 1,  nota: 9},{idAlumno: 2, nota: 5}];

const idPepe = alumnos.find(alumno => alumno.nombre === 'Pepe').id;

const notaPepe = notas.find(nota => nota.idAlumno === idPepe).nota;

console.log('Nota de alumno Pepe: ', notaPepe)
