/* 
  Clases

  Un clase en JS es una plantilla para crear objetos.

  Es una forma moderna y natural de trabajar con la progrsmsción orientada a objetos.
  
  Los nombres de las clases se recomienda escribirlas con la primera letra en mayúsculas.

  Metodo constructor

  El Metodo constructor es un método especial que se ejecuta automaticamente cuando se crea una nueva instancia de la clase.

  Dentro del método constructor, pasamos las propiedades y valores de la clase.

  Las propiedades pasan como parametros y luego se asigna con 'this'.

  Sintaxis Básica

  class NombreClase {
    //Método constructor

    constructor(par1, par2){
      this.par1 = par1;
      this,par2 = par2;<
    }
  }

  *Instancias de clase

  Para crear un objeto usando la clase, se utiliza la palabra 'new' esto invoca al constructor de la clase.

  Sintaxis:

  new NombreClase(par1, par2);

  Esta instanciase asigna a una variable o constante.

  * Métodos de clase

  Se define dentro de una clase y asignan automaticamente en el 'prototipo' del objeto. Esto permite que todas las instancias compartan el mismo método.

  Sintaxis

  nombreMetodo(parm...) {
    //Código que se ejecuta
  }

*/

// Definir la clase Mascota

class Mascota {
  constructor(nombre, edad){
    this.nombre = nombre; //Propiedad nombre
    this.edad = edad; //Propiedad edad
  }

  saludo(){
    console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años!`)
  }
}

// Instanciar la clase mascota. Creamos un objeto con la plantilla Mascota.

let mascota1 = new Mascota("Tigresa", 6);
let mascota2 = new Mascota("Botas", 4);

// Accedemos a los datos de las instancias
console.log(mascota1.nombre)
console.log(mascota1.edad)

//Lanzar los métodos de los objetos

mascota1.saludo();
mascota2.saludo();