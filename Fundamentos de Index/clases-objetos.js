//1
class Arma {
  constructor(nombre, tipo, daño){
    this.nombre = nombre;
    this.tipo = tipo;
    this.daño = daño;

  }

  descripcion(){
    console.log(`Arma: ${this.nombre}, Tipo: ${this.tipo}, Daño: ${this.daño}`)
  }

}

//2
let arsensal = {
  Armas: [],

agregarArma : function(flechas){
  this.Armas.push(flechas);
  }
}

//3
let arma1 = new Arma("MetraBobby", "Balazos", 100);
let arma2 = new Arma("MetraFlipa", "Clickeazos", 10000);
let arma3 = new Arma("MetraRichas", "Pasa tudo", 100);


/* arma1.descripcion();
arma2.descripcion();
arma3.descripcion();
   */
//4
arsensal.agregarArma.Armas = "Arco";
arsensal.agregarArma.Armas = "EspadaBobby";
arsensal.agregarArma.Armas = "Armadura";

//5
for ( let i = descripcion ; i <= descripcion ; i++ ) {
    console.log("Mensaje:" + i)
  }