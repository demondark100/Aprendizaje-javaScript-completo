// ahora veremos las condicionales y el
// poderosisimo camelCase:

let pasarnombredeusuario = "Daniel";
// esto esta mal:

let pasarNombreDeUsuario = "Daniel";
// esto esta bien:

// ah esto se le conoce como camelCase:

// ahora veremos las condicionales mis favoritas:

let numero1 = 15;
let numero2 = 12;

if (numero1 < numero2) {
  console.log("esto no es verdad asi que no se ejecutara");
}
if (numero1 > numero2) {
  console.log("esto es verdad es mayor");
}
if (numero1 != numero2) {
  console.log("esto si es ditinto")
};
if (numero1 == numero2) {
  console.log("esto tampoco se ejecutara ya que numero1 no es igual a numero2");
}
// estas son las condicionales muy utiles e importantes para programar:

// ejercicio:

const confirmacionFuncion=()=>{
  let preguntarConfirmacion = confirm("esta seguro que desea adquirir este producto?");
  if(preguntarConfirmacion == true){
    alert("gracias por su comprar vuelva pronto");
  }else{
    alert("ok desea adquirir otro producto?");
  }
}
let pregunta1 = prompt("deseas adquirir articulos para telefonos?");
if (pregunta1 == "si") {
  alert("1 ropa para telefonos / 2 protectores de pantalla / 3 componentes y ensamblamiento de moviles");
  let pregunta2 = prompt("que deseas comprar?");
    if (pregunta2 == 1) {
      let modeloCarcaza = prompt("que modelo de carcaza desea adquirir?");
      alert("elija el color y el material");
      confirmacionFuncion();
  }
    if (pregunta2 == 2) {
      confirmacionFuncion();
    }
    if (pregunta2 == 3) {
      let preguntarComponente = prompt("desea adquirir algun componente?");
        if (preguntarComponente == "si") {
          alert("excelente gracias por comprar el componente");
        } else{
          let preguntarEnsamble = prompt("desea ensamblar su dispositivo?");
            if (preguntarEnsamble == "si") {
              alert("ok deje su telefono para ensamblarlo/arreglarlo gracias");
            }
        }
    }
}else {
  alert("ok entendido buscaremos que puede ser de tu agrado");
}

// aqui hicimos un pequeño programa el cual cumple la funcion de una tienda
// mobile usando la mayoria de cosas que aprendimos 