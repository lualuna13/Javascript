/* 
  Objetos

  Es una colección de propiedades y métodos.

  Las propiedades describen las caracteristicas del objeto.

  Los métodos describen los comportamientos del objeto.

  Los objetos pueden contener distintos tipos de datos: strings, numbers, arrays, booleans, "undefined", otros objetos e incluso funciones.

  Sintaxis:
  let nombreObjeto = {
  //Propiedades y Métodos
  };

  Propiedades dentro de un objeto se escriben en pares "clave" : "valor"
 
  nombre : "Ange" //Propiedad

  let nombre = "Ange"; //Variable

  Las propiedades de un objeto se separan por comas ',' depués del valor.

  Las claves de las propiedades pueden tener más de una palabra. Pero se deberan de escribir entre comillas "" o ''

  "nombre real" = "Ange",

  También se pueden escribir en formato Camel Case y sin comillas

  nombreReal = "Angy",
*/
/* Definir un objeto */

/* let personaje = {
  nombre : "Katsuki",
  edad : 25,
  residencia : "Japón",
  poderes : true,
  habilidadesSuperhumanas : ["Explosión", "AP Shot", "Howitzer Impact"]
}
 */
/* Accedemos al valor de las propiedades del objeto */

//console.log(personaje.nombre);
// console.log(personaje["Habilidades superhumanas"][1] );
//console.log(personaje.habilidadesSuperhumanas[0]);

/* Agregar y borrar propiedades de objetos */

//personaje.enemigos = ["Shigaraki", "AFO"];

//delete personaje.poderes;

/* 
  Métodos
  Un método es una funcion que se define como propiedad de un objeto.

  Sintaxis

  nombreClave : function(parametros) {
    //Código que se ejecuta
  } 
  
  this

  Es una palabra reservada que se refiere al objeto actual y sirve para acceder a sus propiedades del mismo.

*/

let mascota = {
  nombre : "Tigresa",
  tipo : "atigrada",
  edad : 6,
  //Objeto Anidado
  fisico : {
    estatura : 20,
    peso : 2,
    color : "Cafe claro"
  },

  //Declaramos un método
  saludo : function(amo){      
  //Código que se ejecuta al invocar la función
  alert(`¡Miau, miau, MIAAAAUUU! Me llamo ${this.nombre} y mi ama es ${amo} ❤`);

  }
}

console.log(mascota.fisico.peso);
console.log(mascota.fisico.estatura);
console.log(mascota.fisico.color);
console.log(mascota.fisico.colorOjos);

mascota.fisico.colorOjos = "Verde"; //Agregar
delete mascota.fisico.color; //Eliminamos
/* Accedemos al método saludo del objeto mascota */

mascota.saludo("Ange");