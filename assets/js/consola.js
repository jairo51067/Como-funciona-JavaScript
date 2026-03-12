//**Ejemplos de consola Javascript**

//**Mostrar un mensaje simple/----------------------------------------------------------------------
console.log("¡Hola, consola!");
console.log("Bienvenido a la programación en JavaScript.");
console.log(2 + 2);

// Sus funciones hermanas permiten añadir varios datos en una misma línea, separándolo por comas:
console.log("El resultado de 2 + 2 es:", 2 + 2);
console.log("¡Hola a todos! Observen este número: ", 5 + 18);

//**Ejemplos de mensajes de error por niveles
console.debug("Muestra información con todo nivel de detalle.");
console.info("Muestra mensajes de información.");
console.warn(
  "Muestra información de advertencia. Aparece destacado en amarillo.",
);
console.error("Muestra información de error. Aparece destacado en rojo.");

console.log("------------------");
//**Ejemplo de Mostrar una traza de error/---------------------------------------------------------------
function funcionA() {
  funcionB();
}

function funcionB() {
  funcionC();
}

function funcionC() {
  console.trace("Esto es una traza de error");
}
funcionA(); // Llamamos a la función A para iniciar la cadena de llamadas y mostrar la traza de error

console.log("------------------");
//**Truco: Mensajes con estilos CSS */----------------------------------------------------------------------
console.log(
  "%cEste mensaje tiene estilos CSS personalizados",
  "color: red; font-size: 20px; font-weight: bold;",
);

// Otra forma de hacerlo es definiendo los estilos en una variable y luego aplicándolos:
const styles = `
  background:linear-gradient(#884ced, #1c20ec);
  color:#fff;
  padding: 5px 10px;
`;

console.log("%c¡Hola Jairo C!", styles);

console.log("------------------");
//**Ejemplos de limpiar consola */----------------------------------------------------------------------------
console.log(
  "Este mensaje se mostrará antes de limpiar la consola. y ejecutar el console.clear()",
);
//console.clear(); // Limpia la consola, eliminando el mensaje anterior
// Al colocar la console.clear(), el o los mensajes anteriores desaparecen, y solo se muestra el nuevo mensaje después de la limpieza.
console.log("La consola ha sido limpiada. Este es el nuevo mensaje.");

console.log("------------------");
//**Ejemplos de agrupar mensajes */---------------------------------------------------------------------------
console.group(
  "Grupo de mensajes - Inicia un acordeón expandible con el texto indicado por parámetro.",
);
console.log("Este es un mensaje dentro del grupo.");
console.log("Este también es un mensaje dentro del grupo.");
console.groupEnd(
  "Grupo de mensajes - Cierra el grupo de mensajes abierto anteriormente.",
);

//Otro
console.group("Información a mostrar");
console.log("UA: ", navigator.userAgent);
console.log("Lang: ", navigator.language);
console.groupEnd();

console.log("------------------");
//**Ejemplo del Metodo console.table() */------------------------------------------------------------------------
console.table([
  { nombre: "Jairo", edad: 30 },
  { nombre: "María", edad: 25 },
]);

//Otro
const users = [
  { name: "Manz", role: "streamer", status: "happy" },
  { name: "BlurSoul_", role: "mod", status: "happy" },
  { name: "felixicaza", role: "mod", status: "happy" },
  { name: "pheralb", role: "mod", status: "porosad" },
];

console.table(users);

//**debugger*/
/*
Puedes escribir la palabra debugger en cualquier parte de tu código, 
y el navegador detendrá la ejecución del código y abrirá las DevTools con el debugger del navegador detenido en esa línea, 
lo que es muy interesante para tareas de depuracion.
*/

console.log("------------------");
//**Ejemplo de console.assert() */---------------------------------------------------------------------------------
console.assert(2 > 3, "Esto es un error, ya que la condición es falsa.");

//Otro
const x = 5;
console.assert(x > 10, "Error: x no es mayor que 10. Valor actual de x:", x);

//Otro
function dividir(a, b) {
  console.assert(
    b !== 0,
    "Error: No se puede dividir por cero. Valor de b:",
    b,
  );
  return a / b;
}

//Otros
const userInput = "abc";
console.assert(
  !isNaN(userInput),
  "Error: La entrada no es un número. Valor de userInput:",
  userInput,
);

console.assert(5 < 10, "5 es menor que 10");
// No ocurre nada

console.assert(5 < 0, "5 es menor que 0");
// Muestra el mensaje indicado con un aviso de error

console.log("------------------");
//**Ejemplo de console.dir() */--------------------------------------------------------------------------------------
console.dir(document.body); // Muestra la representación del elemento body en la consola, permitiéndonos inspeccionar sus propiedades y métodos de manera más detallada.

console.log("------------------");
//**Bemchmark Rapidos */----------------------------------------------------------------------------------------------
//**Contadores */

//Ejemplo sencillo
/*
for (let i = 0; i < 5; i++) {
  console.count("test-loop");
}
console.countEnd("test-loop");
*/

//Otro
/*
function miFuncion() {
  console.count("miFuncion");
  // Código de la función...
}
miFuncion();
miFuncion();
miFuncion();
console.countEnd("miFuncion");
*/

console.log("------------------");
//**Benchmark Rápidos - Test de velocidad */------------------------------------------------------------------------------
//Ejemplos
function tareaPesada() {
  let suma = 0;
  for (let i = 0; i < 1000000; i++) {
    suma += i;
  }
  return suma;
}
console.time("tareaPesada");
tareaPesada();
console.timeEnd("tareaPesada");

//Otro
console.time("test1");
for (let i = 0; i < 10; i++) {
  /* Operación costosa */
  console.timeLog("test1", i);
}
console.timeEnd("test1");

console.log("------------------");
//**Benchmark de rendimiento - Test de rendimiento */---------------------------------------------------------------------
//Ejmeplos
function tareaPesada2() {
  let suma = 0;
  for (let i = 0; i < 1000000; i++) {
    suma += i;
  }
  return suma;
}

console.time("tareaPesada2");
tareaPesada2();
console.timeEnd("tareaPesada2");

//Otro
function tareaPesada3() {
  let suma = 0;
  for (let i = 0; i < 1000000; i++) {
    suma += i;
  }
  return suma;
}

console.time("tareaPesada3");
tareaPesada3();
console.timeEnd("tareaPesada3");
