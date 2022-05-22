// ahora vamos a aprender sobre los metodos para arreglos asi como hay metodos de 
// cadenas tambien hay metodos para arreglos:

let arreglo = ["pastel","manzana","helado"];
let resultado1 = arreglo.shift();
let resultado2 = arreglo.pop();
console.log(resultado1);
console.log(resultado2);
// aqui estamos mostrando el inicio y el final del arreglo con "shinft" mostramos
// pastel y com "pop" helado:

let array = ["hello","world"];
console.log(array.unshift());
console.log(array.push());
// esto nos sirve para remover una parte del array:

let cambiarATenxto = ["hola","como","estas"];
let resultado = cambiarATenxto.splice(0,2,"estas");
console.log(resultado);
console.log(resultado.join("-"));
// con esto modificamos los arreglos para que se coviertan en arreglos 
// y poner algo por ejemplo "-";



let menu = [
     ["maiz","snaks"],
     ["manzana","naranja","pera","uva","durazno"],
     ["lomo saltado","pastel de papa/tallarin","chicharron","papa rebosada"],
     ["chocolate","helado","torta"]
];
let carta = menu[0].shift();
console.log(`en el menu tenemos los siguiente aperitivos ${carta}
los ${menu[0].pop()} no estan disponibles
en las frutas tenemos ${menu[1]} la ${menu[1].shift()} no esta disponible
en este momento en las comidas tenemos
${menu[2]} en los postres tenemos ${menu[2]}`);
