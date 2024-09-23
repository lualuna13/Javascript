/* 

Tipos de datos 

Se dividen en dos categorias: Primitivos y Completos

1. Tipos de datos primitivos 

Datos b+asicos que no se consideran "objetos" y no tienen "metodos".

* Number o numero

Representación de valores númericos ya sea enteros o con decimáles (punto flotante)

* String o cadena de caracteres

Se usa para representar texto. El texto se coloca emtre comillas dobles o simples "texto" 'texto'

* Boolean o Boleanos

  Estos representan un valor lógico que puede ser 'true' o 'false'

  * Undefined o Indefinido

  Es el valor que se le asigna a una variable que ha sido declarada pero no inicializada


  2. Los tipos de datos complejos o de objetos

  * Array o arreglo 

  Es un conjunto de datos que los almacena en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados por comas ,

  * Object
  Es un conjunto de multiples datos en pares 'calve' 'valor', se escriben entre llaves {} y separados por comas ,'

  * Function o Funciones

  Es un tipo de dato que peude ser invocado. Se declaran con la palabra reservada "function" y el codigo que ejecutam entre llave []
*/

/* Number */
let miNumero = 13;
let miNumeroDecimal = 5.496;

console.log(miNumero);
console.log(miNumeroDecimal);

/* Strings */
let miNombre = 'Ange';
let miApellido = 'Luna';

console.log(miNombre);
console.log(miApellido);

/* Booleans */
let miVerdad = true;
let miMentira = false;

console.log(miVerdad);
console.log(miMentira);

/* Undefined */

let x; /* Esto es declarar una variable sin inicializarla */

console.log(x); /* undefined */

/* x = prompt ("Cual es tu numero favorito?");
 */
console.log(x); /* Valor que el usuario introduzca */

/* Array */
//Con la anotación de corchetes
let miFrutasFavoritas =["Durazno", "Uva", "Manzanas"];
let misNumerosSuerte = [13, 7, 2, 24];
let otroArray = ["Doied", 465, true]
console.log(miFrutasFavoritas);
console.log(misNumerosSuerte);
console.log(otroArray);

/* Objeto */

let persona = {
  //clave : valor,
  nombre : "Ange",
  edad : 20,
  colorCabello : "Castaño",
  colorOjos : "cafes",
  altura : 1.64,
  peso : undefined,
  vivo : true,
  novia : false,
}

console.log(persona);
// Accedemos a los datos de una clave dentro de un objeto
//Con la anotación de punto .

console.log(persona.nombre)
console.log(persona.altura)
console.log(persona.novia)

/* Function */
let mensajito = function (){
  /* Pasamos el codigo que ejecuta la función */
  console.log("Este es un mensaje lanzado por una función");
}
//  Invocamos la función
mensajito();