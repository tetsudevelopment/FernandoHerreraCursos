
let personaje = {
  name: 'Tony Stark',
  codeName: 'IronMan',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng:-118.70
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California',
  },
  'ultima-pelicula':'Infinity War'
}
console.log('Nombre: ', personaje.name);
console.log(personaje['name']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords);
console.log("Lat", personaje.coords.lat);
console.log("No. Trajes", personaje.trajes.length);
// para ver el ultimo elemento debo llamar al elemento si tiene un objeto debo llamarlo tambien dentro de corchetes algo es mismo llamado agregandole en length - 1 y asi me dara el ultimo valor del objeto
console.log("Ultimo Trajes", personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Ultima pelicula', personaje["ultima-pelicula"]); 

//Más detalles

delete personaje.edad;

personaje.casado = true;


const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje)
personaje.dinero = 100000000000;
personaje.casado = false;
console.log(personaje); 

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje)
console.log({propiedades, valores});




