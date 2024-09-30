/* 
  Concatenación

  Es un proceso para unir o combinar dos o mas cadenas de texto en una sola.

  Hay dos formas de realizar   Concatenación.

  1. operador (+) - Este es el método más común para concatenar cadenas de texto
  2. Template Strings, Platilla de Cadenas o Literales. (``) - Alt Gr + c (portuguesa) | Alt + 96. Utilizamos los backtics o acentos invertidos, dentro podemos insertar cadenas de texto, variables y expresiones.



*/

//Concatenar con operador (+)

let nombre = "Ange";
let apellido = "Luna";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

// Concatenar con Tamplate Strings

let saludo = `Hola ${nombre} ${apellido}! ¿Comó estas? Sabías que 2 + 2 es igual a ${2+2}`;

console.log(saludo);