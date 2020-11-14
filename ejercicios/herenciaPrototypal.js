function Sayayin(nombre) {
  this.nombre = nombre;
}

Sayayin.prototype.saludar = function() {
  console.log(`Hola soy ${this.nombre}`);
}

const goku = new Sayayin("Kakaroto");

// Propiedades de la instancia
console.log(`Nombre:`, goku.nombre);

// Propiedades de la Clase
console.log(`Saludar:`, goku.saludar);

// Propiedades heredadas ej: toString
console.log(`toString:`, goku.toString);

// hasOwnProperty (de donde sale toString)
console.log(`goku.hasOwnProperty("nombre"):`, goku.hasOwnProperty("nombre"));
console.log(`goku.hasOwnProperty("saludar"):`, goku.hasOwnProperty("saludar"));

// console.log(goku.__proto__); no llamar __proto__ porq puede variar en los browsers
console.log(Object.getPrototypeOf(goku)); // retorna el prototipo "Sayayin.prototype"
const prototypeOfGoku = Object.getPrototypeOf(goku);

console.log(prototypeOfGoku === Sayayin.prototype); // apuntan a la misma referencia
prototypeOfGoku.fight = function() { // es igual a Sayayin.prototype.fight = function(){}
  console.log("FIGHT!");
}
goku.fight();

// Al no encontrar la propiedad en el objeto, js va a revisar en su proto
console.log(goku.hasOwnProperty("fight"));
console.log(goku.toString());

console.log(prototypeOfGoku.hasOwnProperty("toString"));

const prototypeOfPrototypeOfGoku = Object.getPrototypeOf(Sayayin.prototype);
// console.log(prototypeOfGoku.__proto__.hasOwnProperty("toString"));
console.log(prototypeOfPrototypeOfGoku.hasOwnProperty("toString"));