# JavaScript - ES6+


JavaScript nació por la necesidad de generar dinamismo en las páginas web.

Fue creado por Brendan Heich en 1995 y se convirtió en un estándar oficial de la W3C en 1997.

Es un lenguaje de programación **dinámico, débilmente tipado, interpretado, basado en prototipos y multiparadigma.**

![](https://cdn.memegenerator.es/imagenes/memes/full/4/11/4112456.jpg)

<br/>

## Javascript es dinámico

Las variables no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variables se le puede asignar (y reasignar) valores de todos los tipos.

JavaScript permite declarar variables cuyo tipo se conocerá al momento de su ejecución en función de las condiciones dadas al momento de correrlo en un entorno real.

## Javascript es interpretado

El navegador lee línea por línea del código, que le indica lo que tiene que ir haciendo sin necesidad de compilar.

Cada navegador tiene su propio motor de Javascript, los cuales interpretan el código o usan algún tipo de lazy evaluation:

- V8: Chrome and Node.js
- SpiderMonkey: Firefox (hasta la versión 25)
- JavaScriptCore: Safari
- Chakra: Microsoft Edge/IE

Cada intérprete implementa el estándar EcmaScript de una forma particular.

## Javascript está basado en prototipos

En JavaScript todo los datos que no son primitivos son objetos.

Todos los objetos “heredan” de un prototipo que a su vez hereda de otro prototipo y así sucesivamente creando lo que se llama la prototype chain.

Todos los objetos tienen algunas propiedades y métodos asociados, heredadas de su prototipo, por ejemplo:

- Array.prototype.push()
- String.prototype.toUpperCase()

Las clases se agregaron en ES6 como azúcar sintáctico, pero la herencia sigue siendo prototípica.

No se debe confundir prototype con _proto_, que es sólo una propiedad en cada instancia que apunta al prototipo que hereda.

## Javascript es multiparadigma

Admite diferentes paradigmas de programación:

- **Imperativa**: centrada en el “cómo” se realiza cada paso del algoritmo.
  Por procedimientos
  Orientada a objetos

- **Declarativa**: centrada en que “qué” hace el algoritmo, prioriza la claridad del resultado por encima de la claridad del paso a paso.
  Funcional
  Reactiva

<br/>

# ES6, ES2015, ES7, ES2016

Estas siglas/acrónimos se refieren a las más recientes versiones del estándar de Especificación de Lenguaje ECMAScript, del cual JavaScript es una implementación.

La versión ES6 (también conocida como ES2015) incluye muchas adiciones a las versiones previas tales como: funciones flecha, clases, plantillas de cadena de texto, declaraciones de variables con let y const.

<br/>

# Tipos de datos

Existen 9 tipos de datos:

- **Datos primitivos**: inmutables
  - Undefined: no hay valor porque no se ha definido todavía
  - Boolean
  - Number
  - String
  - BigInt
  - Symbol: valor único e inmutable
- **Datos no primitivos**: mutables, almacenados por referencia
  - Null: Se usa para indicar expresamente que la variable no tiene valor.
  - Object
  - Function

### Coerción de datos

La coerción es la conversión automática o implícita de valores de un tipo de dato a otro.

Es similar a la conversión, porque ambas convierten valores de un tipo de dato a otro, pero con una diferencia clave: la coerción es implícita, mientras que la conversión puede ser implícita o explícita.

### Conversión explícita vs. Coerción implícita

```javascript
const x = 17;
const explicito = String(x); // explícito === "17"
const explicito = String(x); // explícito === "17"
```

### **== vs. ===** ( != vs !==)

- **Comparación de igualdad no estricta ( == )** Castea el tipo de dato para comparación

```javascript
true == “true” // TRUE
```

- **Comparación de igualdad no estricta ( === )** Require tipo de datos iguales para comparación

```javascript
true === “true” // FALSE
```

## 🚩🚩**IMPORTANTE: Evitar comparaciones de igualdad no-estrictas**🚩🚩

![](https://res.cloudinary.com/practicaldev/image/fetch/s--pANodlV7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/patricio.png%3Fraw%3Dtrue)

### Falsy y Truthy values

- **Valores falsos**: se consideran falsos cuando se encuentran en un contexto booleano (por ejemplo, un condicional)
  - undefined
  - null
  - false
  - +0, -0, NaN
  - "", ‘’
- **Valores verdaderos**
  - { }
  - [ ]
    etc…

<br/>

# Variables

Existen diferentes formas de declarar una variable:

- **let**: variable que podrá cambiar de valor. Sólo vivirá en el bloque donde es declarada.
- **var**: variable que podrá cambiar de valor.
  - Permite declarar una variable antes de inicializarla (por hoisting)
  - Permite declarar una misma variable n cantidad de veces
    -> No recomendado (anterior a ES6)
- **const**: variable de sólo lectura. No podrá cambiar su valor en ningún momento en el futuro, el mismo no podrá ser sobreescrito o reasignado.

## Scope

El Scope o ámbito es lo que define el tiempo de vida de una variable, es decir, en qué partes del código puede ser utilizada.

- Global scope: Se declaran fuera de una función o bloque. Disponibles de forma global, accesible por todos los script que se cargan en una página -> riesgo de sobreescritura, ya que siempre la prioridad la tendrán las variables del ámbito anidado.
- Function scope: Se declaran dentro de una función y son visibles sólo dentro de ella.
- Block scope: Se declaran dentro de bloques de control y son visibles hasta que se alcance el siguiente “}”.

## Hoisting

Mecanismo que mueve la declaración de funciones y variables (var) al inicio de su ámbito.

Permite utilizar una variable antes de declararla.

Por este mecanismo, NO se recomienda declarar variables con var, ya que deriva en un código muy confuso y difícil de entender.

```javascript
miNombre = ‘Florencia’;

function saludar(){
    console.log(miNombre)
};

saludar();

var miNombre;
```

let: Sólo vivirá en el bloque donde es declarada. No admite hoisting.

var: Scope local. Admite hoisting sin generar errores.

## Naming convention

- camelCase para variables
- SNAKE_CASE para constantes
- Pueden contener letras (a-z), números (0-9), el símbolo pesos ($) y underscores (\_)
- Si bien puede contener números, no puede empezar con ningún número
- No pueden haber espacios en blancos
- No pueden ser ninguna de las palabras reservadas de JavaScript
- Los nombres de variable son case sensitive

<br/>

# Funciones

Son procedimiento (conjunto de instrucciones que realiza una tarea), que reciben alguna entrada y devuelven alguna salida.
Definir una función no la ejecuta.
Naming convention: camelCase
Dos tipos de funciones en JavaScript:

## Funciones declarativa

Consta de la palabra reservada function seguida del nombre de la función, una lista de parámetros (entre paréntesis y separados por comas) y las declaraciones de JavaScript que definen la función encerradas entre llaves
Aplica hoisting: Se podrá llamar a la función antes de que esta sea declarada

```javascript
saludar(‘Florencia’)

function saludar (nombre) {
    console.log(`Hola ${nombre}`)
}

saludar(‘Florencia’)
```

## Expresiones de función

La declaración se inicia como una variable (const o let según requiera), y la misma guardará una función anónima.

No aplica hoisting. No se podrá llamar a la función antes de que esta sea declarada

```javascript
const saludo = function (nombre) {
    console.log(`Hola ${nombre}`)
}

saludo(‘Florencia’)
```

## Arrow function

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, aunque es más limitada (no tiene sus propios enlaces a this o super, no válidas para métodos call, apply y bind, etc) y no puede utilizarse en todas las situaciones .

```javascript
const saludo = nombre => console.log(`Hola ${nombre}`)

saludo(‘Florencia’)
```

```javascript
const saludo = (nombre, apellido) => {
     const nombreCompleto =`${nombre} ${apellido}`
     return console.log(`Hola ${nombreCompleto}`)
}

saludo(‘Florencia’)
```

<br/>

## Callbacks/Promesas/Asincronismo

Muchas veces es necesario “anidar” funciones, donde a partir de lo que retorna una, se debe ejecutar otra que recibe ese return como parámetro.

El caso más común es el de la llamada a un servicio.

Como JavaScript es un lenguaje asíncrono (cada tarea es independiente y se ejecuta de forma simultánea a otras), hay que darle alguna indicación para que no se ejecute la función hasta que no se haya completado la primera.

**_Ver más sobre este tema en la presentación .ppt de la clase_**

<br/>

# Objetos

En Javascript **TODO** lo que no sea tipos primario de datos representa un objeto.

Es JavaScript un objeto puede verse como una variable que puede almacenar en su interior varias variables (que pueden ser de diferente tipo), cada una con sus valores (como una “mamushka”).

Todo lo que está dentro de un objeto se pone entre llaves, y se separa cada una de las variables que tiene adentro con comas.

Cada una de las variables que tiene adentro un objeto se denominan propiedades.
Cada propiedad tiene una clave (key) y un valor (value). Por ejemplo:

```javascript
const producto = {
  // OBJETO llamado producto
  nombre: "Tablet", // PROPIEDAD del producto, que se llama "nombre" y tiene el valor "Tablet"
  precio: 100, // PROPIEDAD del producto, que se llama "precio" y tiene el valor 100
};
```

Acceder a una propiedad del objeto: producto.nombre, producto.precio.
Otra forma de hacer esto es desestructurar un objeto.

### Destructuring

La asignación por desestructuración es una expresión que permite extraer las propiedades de un objeto (o un array), utilizando la sintaxis de { } (ó [ ]) para asignarlas a variables

```javascript
const producto = {
  nombre: "Tablet",
  precio: 100,
};

const { nombre, precio } = producto;
```

<br/>

# Arrays

Son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar opciones de recorrido y mutación.

Tanto la longitud como el tipo de los elementos de una array son **variables**.

### Operaciones habituales

- Crear un array: [ ]
- Obtener la longitud: .length
- Acceder a un elemento mediante su índice: array[index]
- Recorrer un array: .forEach
- Añadir un elemento al final: .push
- Eliminar el último elemento: .pop
- Añadir un elemento al principio: .unshift
- Eliminar el primer elemento: .shift
- Encontrar el índice de un elemento: .indexOf
- Eliminar uno o más elementos a partir de una posición: .splice
- Copiar un array: .slice
- Verificar si todos los elementos del cumplen con un predicado: .every
- Verificar si al menos un elemento cumple con un predicado: .some
- Obtener un nuevo array con todos los elementos que cumplen con un predicado: .filter
- Obtener el primer elemento que cumpla con un predicado: .find

### .map()

El método .map() es similar a filter(), ya que crea un nuevo array a partir de los elementos que cumplan con una premisa determinada, aunque agrega la posibilidad de poder realizar alguna acción con cada uno de esos elementos. Se utiliza cuando se requiere transformar el array, realizar una acción para cada uno de los objetos del array.
A diferencia de forEach (que no devuelve nada), map devuelve un nuevo array con los elementos modificados.

## 🚩🚩**IMPORTANTE: Los métodos que se pueden utilizar en React son aquellos que NO muten el array**🚩🚩

Consultar cuáles son en [esta página](https://doesitmutate.xyz/)

<br/>

# Spread Operator

Es un operador que simplifica la recogida de valores en una estructura de datos, convirtiendo un array o un objeto en el conjunto de valores que contiene.

Permite a un elemento ser expandido en lugares donde cero o más elementos son esperados.

Se expresa con tres puntos: “...”

### Con Arrays

Su utilización más común es para copiar de forma rápida todo o parte de un array existente dentro de otro array.
Permite que los elementos de un array se expandan sin que el resultado sean arrays anidados, sino un único array al que se le añaden nuevos valores. Es como si se le quitaran los corchetes (“[]”) al array que se quiere incorporar.

```javascript
const midArray = [3, 4]

const array = [1, 2, …midArray, 5, 6]

console.log(array) // -> [1, 2, 3, 4, 5, 6]
```

### Con Objetos

También se puede utilizar en objetos, por ejemplo, para clonarlos o añadir y modificar propiedades.

```javascript
const perro = { nombre: “Buddy”, edad: 7, raza: “labrador” }

const perroConDuenio = { …perro, duenio: “Pedro”, raza: “golden” }

const copiaDePerroConDuenio = { …perroConDuenio }

console.log(perroConDuenio) // -> { nombre: “Buddy”, edad: 7, raza: “golden”, duenio: “Pedro” }
```

<br/>

# Import y Export

La declaración _export_ se utiliza al crear módulos de JavaScript para exportar funciones u objetos del módulo para que puedan ser utilizados por otros programas con la sentencia _import_.
Existen dos tipos de exportaciones:

- **Exportación por defecto**:
  - Sólo puede haber UNO por documento
  - En el import se le puede poner el nombre que quiera
- **Exportación nombrada**:
  - Pueden exportarse N por cada documento
  - Los mismos se deben encerrar en llaves y separadas por comas
  - Al import también habrá que envolverlo entre llaves SIEMPRE. En este caso sí es importante respetar el nombre cuando se la importa (aunque puede usarse un alias).

<br/>

# Bonus: Código limpio

![](https://miro.medium.com/max/1100/1*2mqCeyuLrdk42DayMpaNRQ.png)

- Utilizar nombres significativos y pronunciables para variables
- Evitar “números mágicos”
- Evitar el mapeo mental
- Mantener la consistencia de nombres de variables y funciones
- Encapsular las condiciones de las funciones en variables
- No incluir contexto innecesario

...

**_Ver más sobre este tema en la presentación .ppt de la clase_**
