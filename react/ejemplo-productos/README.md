# 💻 🤓 📚 Repositorio de la cursada de Programación en Nuevas Tecnologías 2

## 🎯 Clase 5:

En esta clase abordaremos EL tema fundamental de _React_: **hooks**.

<br/>

## 🧠 Contenido de la clase:

- Hooks

<br/>

## 📋 Consigna para elaborar en clase:

Cada uno de los equipos deberá resolver uno de los siguientes desafíos:

<br/>

### Ejercicio 1

En el listado de productos, inicialmente se muestran todos los productos (tengan o no stock).

Se deberá crear un icon button que al presionarlo filtre el listado para mostrar sólo los productos que tienen stock y cambie el label a "Mostrar todos". Si se lo presiona nuevamente deberá renderizar el listado completo otra vez.

Se deberá poder repetir este comportamiento tantas veces como el usuario lo desee.

[Video demostrativo](https://drive.google.com/file/d/1xRIjy3j7_lgomOoZ2bS1gDcfodJs5EGL/view?usp=sharing)
<br/>
<br/>

### Ejercicio 2

Cada vez que el usuario presione el botón de una card ("Añadir al carrito"), se deberá descontar 1 unidad al stock de ese sabor y mostrar un alert informando que el producto fue añadido y la cantidad que quedan en stock.

_Tip_: Se recomienda probar la funcionalidad con el cupcake de chocolate que tiene sólo 2 productos en stock.

**ADVERTENCIA**: Recordar la regla de React que dice que todo componente deberá comportarse como una función pura con respecto a sus props.

Nota: no hace falta modificar el json que se encuentra dentro de la carpeta "data", dado que ese archivo funciona como mock de la respuesta de una llamada a una API (tema que abordaremos más adelante). Se deberá modificar sólo la información que se muestra en el listado (por lo cual cuando se haga refresh de la página se perderá la información).

[Video demostrativo](https://drive.google.com/file/d/1guahKyeKK12BLRaaSvmWxq9bIhswRu1Q/view?usp=sharing)
<br/>
<br/>

### Ejercicio 3

Se deberá agregar dentro de la subtitle de la card, un botón que al presionarlo por primera vez expanda el texto para mostrar toda la descripción del producto y al volver a ser presionado vuelva a contraer el texto en 1 línea.

Además, cuando la descripción del producto se encuentre expandida, se deberá mostrar un botón (con el estilo indicado en el video), que abrirá un prompt para ingresar un número de teléfono o mail de contacto que, en caso de que sea distinto a un string vacío, deberá guardarse en una variable local "contact".

[Video demostrativo](https://drive.google.com/file/d/1-ynnRDRn1rrF_bHk1paOCf3IJdAySinr/view?usp=sharing)

<br/>
<br/>

## 🔧 Instrucciones

**Si todavía no tenés el repositorio clonado**, ¡ya es momento de hacerlo!

```bash
git clone https://github.com/mflorenciadn/BE-NT2-C
```

Entrá en el directorio del proyecto

```bash
cd BE-NT2-C
```

Hacé un checkout hacia la rama de esta clase

```bash
git checkout clase5/hooks
```

<br />
<br />

**Si ya tenías el repositorio clonado**:

```bash
git pull origin clase5/hooks
```

<br />
<br />

**Una vez que te encuentres en la rama **clase5/hooks****, entrá en el directorio donde se encuentra este ejercicio:

```bash
cd react
```

```bash
cd ejemplo-productos
```

<br/>
<br/>

Instalá las dependencias

```bash
npm i
```

<br/>
<br/>

Ejecutá el programa

```bash
npm start
```

---

Para mis alumnos, con ♡
