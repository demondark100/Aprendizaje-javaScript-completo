// aqui vamos a concatenar los datos y 
// usaremos los operadores logicos:

let numero1 = 15;
let numero2 = 78;

let pregunta1 = numero1 < numero2;

console.log(pregunta1);

// numero1 es menor que numero2 esto devuelve 
// valores boleanos true o false al igual que 
// el resto:

let numero3 = 50;
let numero4 = 12;

let pregunta2 = numero3 > numero4;
console.log(pregunta2);

// numero3 es mayor que numero4 devolvera
// true verdadero:

let numero5 = 50;
let numero6 = 50;

let pregunta3 = numero5 == numero6;
console.log(pregunta3);

// aqui devolvera true ya que es igual:

let numero7 = "50";
let numero8 = 50;

let pregunta4 = numero7 === numero8;
console.log(pregunta4);

// aqui devolvera false porque no es estrictamente igual:

let numero9 = 15;
let numero10 = 12;

let pregunta5 = numero9 != numero10;
console.log(pregunta5);

// aqui devolvera true porque numero9 es distinto de
// numero10:

let numero11 = "12";
let numero12 = "12";

let pregunta6 = numero11 !== numero12;
console.log(pregunta6);

// aqui va a salir false porque numero11 no es
// estrictamente distinto de numero12:


// luego tenemos a la concatenacion de los datos

let concatenar1 = "hola";
let concatenar2 = "mundo";

console.log(concatenar1  +  concatenar2); 
// aqui hemos concatenado los datos y en la consola muestra
// holamundo:

let concatenar3 = "concatenar";
let concatenar4 = "concatenar1";
let guardarConcatenacion = concatenar3.concat(concatenar4);
console.log(guardarConcatenacion);
// esta es otra forma de concatena los datos:

let backticks1 = "Daniel";
let guardarDato1 = `hola soy ${backticks1} y soy un programador`;
console.log(guardarDato1);
// aqui estamos concatenando los datos para formar una oracion
// es muy usada y mi preferida en lo personal:

// ejercicio:

let dato1 = prompt("cual es tu nombre?");
let dato1Edad = prompt("cual es tu edad?");
let dato2 = prompt("cual es el nombre de tu amig@?");
let dato2Edad = prompt("cual es la edad de tu amig@?");
let oracion = `ahora veremos si la edad de ${dato1} es mayor o
menor que la edad de ${dato2} si sale true es porque la edad de
${dato1} es mayor que la edad de ${dato2} y si sale false es porque
${dato1} es menor que ${dato2}`;
console.log(oracion);
let comparacion = dato1Edad > dato2Edad;
console.log(comparacion);

// aqui estamos haciendo un programa el cual compara la edad de ti 
// y de tu amigo:
// algo simple pero solo es basico y no puedo usar condicionales aqui
// porque aqui no dice condicionales XD: