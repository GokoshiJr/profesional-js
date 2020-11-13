// this en el scope global
console.log(this); // lo asigna a window

// this en el scope de una funcion
function whoIsThis() {
  return this;
}
console.log(`whoIsThis(): ${whoIsThis()}`) // por default se le asigna a window

// this en el scope de una funcion con use strict
function whoIsThis2() {
  'use strict';
  return this;
}
console.log(`whoIsThis2(): ${whoIsThis2()}`) 

// this en el contexto de un objeto
const persona = {
  nombre: "Julio",
  apellido: "Gonzalez",
  edad: 20,
  saludar: function() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}
persona.saludar();

// this cuando sacamos una funcion de un objeto
const accion = persona.saludar;
accion();

// this en el contexto de una clase
class Person {
  constructor(nombre) {
    this.nombre = nombre
  }
  saludar() {
    console.log(`Saludos ${this.nombre}`)
  }
}

const julio = new Person("Julio");
julio.saludar();