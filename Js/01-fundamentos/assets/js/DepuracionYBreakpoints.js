//var b = 10
//const c = 10;

//c =20; // no se puede modificar ya que es un const


console.log('%c Mis variables', 'color:red;');

// el table puede recibir arreglos

let a = 10, 
    b = 20, 
    c = 'Hola ', 
    d = 'Spiderman', 
    x = a + b;
    
const saludo = c + d;
 console.table({ a, b, c, d, x });
console.log({ a });
console.log({ b });
console.log({ c });
c = 'Hola de nuevo';