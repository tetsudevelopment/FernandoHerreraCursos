

function saludar() {
  console.log('Hola mundo');
}
// nos sirve para para hacer el rendimiento de un codigo que vayamos a utilizar varias veces solo lo debamos escribir una vez 
// un metodo es una funcion que se encuentra dentro de un objeto 

//esto es una funcion anonima ya que estamos declarando una variable que tomara el valor de la funcion 
const saludar2 = function (nombre) {
  console.log('Hola mundo'+ nombre);
}

function saludar(nombre) {
  // console.log(arguments);
  // console.log("Hola  " + nombre);
  return [1,2];
  //este codigo nunca se va a ejecutar porque esta despues del return
  console.log('Soy un código después del return');
  
};

//Funciones flecha
const saludarFlecha = () => {
  console.log('Hola Flecha');
}
const saludarFlecha2 = (nombre) => {
  console.log("Hola Flecha "+ nombre);
};

const retornarSaludar = saludar('Brayan', 19, false, 'Colombia');
// console.log(retornarSaludar[0], retornarSaludar[1]);

// saludarFlecha();
// saludarFlecha2('Brayan');

//retorno de funciones
// toda las funciones retornan un valor Undefined 


function sumar(a, b) {
  return a+b
}
console.log(sumar(1, 2));

// const sumar2 = (a,b) => {
//   return a + b;
// }

//esta funcion es igual quue escirbir la palabra return entre llaves
const sumar2 = (a, b) =>  a + b;

function getAleatorio() {
  return Math.random();
}
//los metodos como Math vienen con funciones no olvidar porner los ()
const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());