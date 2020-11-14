// Un objeto comun y corriente

/*
const goku = {
  nombre: "Kakaroto",
}

goku.saludar = function() {
  console.log(`Hola soy ${this.nombre}`);
}

goku.saludar();

const vegeta = {
  nombre: "Vegeta",
}

goku.saludar = function() {
  console.log(`Hola insecto soy ${this.nombre}`);
}

vegeta.saludar();
*/


// Seamos mas eficientes

/*
function Sayayin(nombre) {
  const sayayin = {
    nombre: nombre
  }
  sayayin.saludar = function() {
    console.log(`Hola soy ${this.nombre}`);
  }
  return sayayin;
}

const goku = Sayayin("Goku");
goku.saludar();

const vegeta = Sayayin("Vegeta");
vegeta.saludar()
*/

// Podemos mejorar mas y evitar tener que crear la misma funcion casa vez

/*
const sayayinMethods = {
  saludar: function() {
    console.log(`Hola soy ${this.nombre}`);
  },
};

function Sayayin(nombre) {
  const sayayin = Object.create(sayayinMethods);
  sayayin.nombre = nombre;
  return sayayin;
};

const goku = Sayayin("Goku");
goku.saludar();

const vegeta = Sayayin("Vegeta");
vegeta.saludar();
*/

// Object.create 
// const nuevoObjeto = Object.create(objeto);

/*
function Sayayin(nombre) {
  const sayayin = Object.create(Sayayin.prototype);
  sayayin.nombre = nombre;
  return sayayin;
};

Sayayin.prototype.saludar = function() {
  console.log(`Hola soy ${this.nombre}`);
}

const goku = Sayayin("Goku");
goku.saludar();

const vegeta = Sayayin("Vegeta");
vegeta.saludar();
*/

// new es un atajo (azucar sintetica) para llevar Sayayin.prototype al Objeto

function Sayayin(nombre) {
  // const sayayin = Object.create(Sayayin.prototype); con el new lo hace implicitamente
  this.nombre = nombre;
  // return this;  con el new lo hace implicitamente
};

Sayayin.prototype.saludar = function() {
  console.log(`New: Sayayin ${this.nombre}`);
}

const goku = new Sayayin("Goku");
goku.saludar();

const vegeta = new Sayayin("Vegeta");
vegeta.saludar();