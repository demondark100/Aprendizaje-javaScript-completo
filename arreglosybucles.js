// aqui vamos a trabajar los arreglos bucles y funciones:

let sistemaOperativo = ["windows","linux","mag","android"];
console.log(sistemaOperativo[0]);
console.log(sistemaOperativo[1]);
console.log(sistemaOperativo[2]);
console.log(sistemaOperativo[3]);

let arregloAsociativo =[
  ["linux","windows","mag"],
  ["termux","hacking"],
  ["kali-linux","hacking"],
];
console.log(arregloAsociativo[0][1]);
console.log(arregloAsociativo[1][0]);
console.log(arregloAsociativo[2][0]);

let arraysBidimensionales =[
 terminales = ["linux","termux"],
 sistemaOperativo = ["windows","android"]
];
console.log(terminales[0]);
console.log(sistemaOperativo[0]);
let concatenar = `la terminal que ejecuataremos es ${terminales[1]}
y se ejecuta en ${sistemaOperativo[1]}`;
console.log(concatenar);

// aqui hice un arreglo normal y uno bidimencional/arregloAsociativo:

let array = ["termux","linux"];

if (array.length == 2) {
    for(i = 2;i < 5;i++){
     console.log(sistemaOperativo + `<br>`);
  }
}

// esto es un bucle hecho de 2 maneras diferentes

// ejercicio:
const confirmacion=(cantidad,producto)=>{
  let confirmacion = confirm(`esta seguro que desea adquirir ${cantidad} de ${producto}`);
  if (confirmacion == true) {
    alert("gracias por su compra");
  }else{
    alert("ok gracias de todos modos")
  }
// esta funcion es para pedir la cantidad y para que el usuario confirme
// su compra en esta cafeteria virtual

}
alert("que desea comprar? 1cafe 2torta 3sandwich");
let menu = ["cafe","torta","sandwich"];
let pregunta1 = prompt("que deseas comprar?");
if (pregunta1 == 1) {
  alert(`usted eligio ${menu[0]}`);
  let preguntarCantidad1 = prompt(`cuantos de ${menu[0]} desea llevar?`);
    confirmacion(preguntarCantidad1,menu[0]);
    for(i = 0;i < `${preguntarCantidad1}`;i++){
      console.log(`${menu[0]}`);
    }
  } 
else if (pregunta1 == 2) {
  alert(`usted eligio ${menu[1]}`);
  let preguntarCantidad2 = prompt(`cuantos de ${menu[1]} desea llevar?`);
    confirmacion(preguntarCantidad2,menu[1]);
     for(i = 0;i < `${preguntarCantidad2}`;i++){
      console.log(`${menu[1]}`);
    }
}
else if (pregunta1 == 3) {
  alert(`usted eligio ${menu[2]}`);
  let preguntarCantidad3 = prompt(`cuantos de ${menu[2]} desea llevar?`);
    confirmacion(preguntarCantidad3,menu[2]);
     for(i = 0;i < `${preguntarCantidad3}`;i++){
      console.log(`${menu[2]}`);
    }
}else{
  alert("ok gracias por venir y lamentamos no tener lo que usted busca");
}