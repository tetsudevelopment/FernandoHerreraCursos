

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo', juegos.length);

let primero = juegos[0];
// esta funcion cuenta la cantidad de elementos que  hay y como estan en corchetes se contara la posicion del objeto en el array entonces juegos.length mira la cantidad de objetos que hay y restandole uno estando dentro de las llaves resta uno y me da la ultima posicion del array 
let ultimo = juegos[juegos.length - 1 ]
console.log({ primero, ultimo });

juegos.forEach((elemento, index, array) => {
  console.log({elemento, index, array});
})
// con el push me coloca un nuevo elemento al final del arreglo y me retorna la nueva longitud del arreglo
let nuevaLongitud =juegos.push('F-Zero')
console.log({ nuevaLongitud, juegos });
// el metodo unshift me permite agregar el nuevo elemento al principio del array y me devuelve/retorna la nueva longitud del arreglo
nuevaLongitud = juegos.unshift('Fire-Emblem')
console.log({ nuevaLongitud, juegos });

// el metodo pop elimina el ultimo elemento de un arreglo y retorna el elemento eliminado, si el array se encuentra vacio retorna undefined y no hace nada
let juegosBorrado = juegos.pop()
console.log({ juegosBorrado, juegos });

let posicion = 1;
// el metodo splice remueve elementos de un array no importa su posicion y si es necesario inserta un nuevo elemento en esa posicion, este metodo retorna el elemento eliminado
let juegosBorrados =juegos.splice(posicion, 2);
console.log({ juegosBorrados, juegos });
//el metodo indexOf me sirve para encontrar la posicion en la que se encuenta mi objeto en el arreglo si el valor que busco no se encuentra en el arreglo me arrojara un valor de -1
let metotroidIndex = juegos.indexOf("Metroid"); //CaSeSeNsItIvE
console.log({metotroidIndex});
// pendiente, pasar valores por fererencia y por valor


const nombre = 'brayan'
console.log({ nombre });
nombre = 'Fernando'
console.log({nombre});