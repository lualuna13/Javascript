/* 
  Los Arrays pueden contener datos de cualquier tipo:
  números, strings, booleanos, incluiso arrays anidados,

  Sintaxis
  let nombreArrays = [elemento, elemento2, elemento3] 
*/

let frutasFavoritas = ["sandia", "uva", "mango"];
let numeroSuerte = [13, 20, 4, 29, 24];
let meQuiereNoMeQuiere = [true, false, false, true];
let misDatos = ["Ange", "Luna", 20, false];
let anidandosArrays = [
  [152, 956, 464], 
  ["Gato", "Perro", "Buho"], 
  [true, false, true]
];

/* 
  array ->["sandia", "uva", "mango"];
  Indice ->    0       1       2

  array -> [ 5, 10, 8, 16, 35]
  Indice ->  0   1  2   3   4
*/

/* 
  Acceder a los elementos de Array
  Para acceder a un dato usamos la siguiente sintaxis:

  nombreArray[Indice];

*/

console.log( frutasFavoritas[0] );
console.log( numeroSuerte[2])
console.log( anidandosArrays[2][2]);

/* 
  Modificar elementos de Array

  Para cambiar el valor de cualquier elemento dentro del array usamos la siguiente sintaxis:

  nombreArray[indice] = nuevoDato

*/
console.log(frutasFavoritas);

frutasFavoritas[0] = "Pera";

console.log(frutasFavoritas);

/* 
  Metodos utiles para los arrays

  Los elementos son "funciones" que trabajan con los datos de los arrays, su sintaxis es la siguiente:

  1. nombreArray.nombreMetodo
  2. nombreArray.nombreMetodo(parametro)

*/

/* 
  length nos dice cuantos elementos tiene un array 

*/

console.log(frutasFavoritas.length)
console.log(numeroSuerte.length)
console.log(anidandosArrays.length)
/* 
  push() - Agrega un elemento al final del Array:
  nombreArray.push(dato)
*/

console.log(frutasFavoritas);
frutasFavoritas.push("maracuya");
console.log(frutasFavoritas);

/* 

  pop() - Eliminamos el ultimo elemento del Array y lo devuelve.

  nombreArray.pop()
*/

console.log(numeroSuerte);
let numeroquitado = numeroSuerte.pop()
console.log(numeroSuerte);
console.log(numeroquitado)

/* 
  unshift(): Agrega un elemento al inicio del Array.

  nombreArray.unshift(elemento)
*/

console.log(frutasFavoritas);
frutasFavoritas.unshift("mandarina");
console.log(frutasFavoritas);

/* 
  shift() - Elimina el primer elemento del array y lo devuelve.

  nombreArray.shift()

*/

console.log(numeroSuerte);
let quitarPrimero = numeroSuerte.shift();
console.log(numeroSuerte);
console.log(quitarPrimero);

/* 
  indexOf() - Encuentra el indice de un elemento en el Array.

  nombreArray.indexOf(dato);

*/

let indice = frutasFavoritas.indexOf("uva");
console.log(indice);

/* 
  splice() - Eliminar o agregar elementos al Array desde una posición especifica.

  Eliminar

  nombreArray.splice(indiceInicio, indiceFinal);

  Agregar

  nombreArray.splice(indiceInicio, pasos, valore1, valor2)
*/
/* Eliminar con splice */
console.log(frutasFavoritas);
frutasFavoritas.splice(1,3);
console.log(frutasFavoritas)
/* Agregar con splice */
frutasFavoritas.splice(1,0, "fresa", "Banana", "naranja", "coco");
console.log(frutasFavoritas);

/* 
  Slice() - Crear una copia de una porvcion del array. No modifica el original, se crea un nuevo array.

  nombreArray.slice(indiceInicio, inicioFinal);

*/

let frutasCopia = frutasFavoritas.slice(3,6)

console.log(frutasCopia)

/* 
  sort() - Ordena los elementos de un array de mayor a menor.

  nombreArray.sort() - De primera no pasamos datos entre parentesis,

*/

console.log(frutasFavoritas);
frutasFavoritas.sort();
console.log(frutasFavoritas);

console.log(numeroSuerte);
numeroSuerte.sort();
console.log(numeroSuerte);