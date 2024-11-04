/* 
  Recorrer arreglos

  Podemos acceder a cada dato de un arreglo a traves de su indice. Ya sea para obtener el dato de hacer algo con ese indice.

*/
/* Definir un array */

let colores = ["Rojo", "Azul", "Verde", "Negro", "Rosa"]
// Indice         0       1        2

/* Imprimimos por consola los colores del  Array*/

/* 
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);

 */
let color
colores.push("magenta");

/* Recorrer el Array con el bucle for */

/* for (let i = 0 ; i < colores.length ; i++) {
  // Codigo que se ejecuta
  console.log( colores[i])
} */

/* 
  Bucle for...of

  Es una manera simple y moderna de recorrer arrays en JS.

  Este bucle nos permite acceder directamente al valor de cada elemento sin necesidad de usar indices.

  Sintaxis

  for ( const elemento of nombreArray) {
    //Codigo a ejecutar por cada elemento en el array

  }
*/

for ( const color of colores) {
  //Codigo a ejecutar

  console.log( `Colorcito: ${color}`)
}

/* Ejercicio para recorrer un arreglo con for...of */


let heroes = ["Dynamight", "Deku", "Shoto", "Hawks"]
let myHeroe

for ( const myHeroe of heroes) {
  console.log(`Heroes que quedaron con cicatrices en el rostro: ${myHeroe}`)
}