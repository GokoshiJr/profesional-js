// Establecer this usando call
function saludar() {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

const julio = {
  nombre: "Julio",
  apellido: "Gonzalez"
}

saludar.call(julio); // recibe el this que queremos establecer

function caminar(metros, direccion) {
  console.log(`${this.nombre} camina ${metros} metros hacia ${direccion}`);
}

caminar.call(julio, 400, "Norte");

// Apply es lo mismo que que call, pero se le pasan los parametros con un array
caminar.apply(julio, [800, "Sur"]);

/*
  Call - coma
  Apply - array
*/ 

const andres = {
  nombre: "Andres",
  apellido: "Gonzalez"
}
// le pasamos el this y nos retorna una funcion con ese this ya establecido
const andresSaluda = saludar.bind(andres);
andresSaluda();

const andresCamina = caminar.bind(andres, 1000);
// andresCamina(1000, "Este");
andresCamina("Este");

const buttons = document.getElementsByClassName("call-to-action");
/* buttons.forEach(button => {
  button.onclick = () => alert("Nunca pares de aprender")
}); */
Array.prototype.forEach.call(buttons, button => {
  button.onclick = () => alert("Nunca pares de aprender");
});