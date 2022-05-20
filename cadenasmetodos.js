// ahora vamos a aprender los metodos de cadena con javascript:

class cadenasDeTexto{
    constructor(){
    }
concatCadena(){
    let cadena = "hola esto es una prueba de ";
    let resultado = cadena.concat("concat osea sumar a las cadenas xdxd");
    console.log(resultado);
// esto es para aumentar una cadena osea sumar o agregar una cadena de texto:
}
startsEnds(){
    let cadena = "esto sera una prueba para ver con que inicia xd";
    console.log(cadena.startsWith("esto")); 
// aqui mostrara true porque si empieza con e:    
    
let cadena1 = "esto es otra prueba";
    console.log(cadena1.startsWith("a"));
// aqui mostrara false porque no inicia con a:

    let cadena2 = "esto es una prueba para ver con que termina";
    console.log(cadena2.endsWith("a"));
// aqui mostrara true porque si termina con a:

    let cadena3 = "esto es otra prueba para ver con que termina";
    console.log(cadena3.endsWith("e"));
// aqui mostrara false porque no termina con e:
}
buscarCadena(){
    let cadena = "aqui buscara una palabra o una cadena";
    console.log(cadena.includes("aqui"));

    let cadena1 = "aqui buscara algo";
    console.log(cadena1.includes("vaca"));
    // includes buscara si hay o no una cadena:
}
posicionDeTexto(){
    let cadena = "hola soy una cadena";
    console.log(cadena.indexOf("cadena"));
// nos mostrara en que psosicion esta la cadena que buscamos:

    let cadena1 = "esto es otra prueba con el posisionamiento xd xd xd";
    console.log(cadena1.lastIndexOf("xd"));
// esto tomara el ultimo xd y nos mostrara la posision del ultimo xd:
}
rellenarTexto(){
    let cadena = "se repetira 5 veces 1 al inicio de esta cadena";
    console.log(cadena.padStart(51,"1"));
// se rellenara 5 veces el numero 1:

    let cadena1 = "se rellenara 5 veces 1 al final de esta cadena ";
    console.log(cadena1.padEnd(52,"1"));
// aqui se rellenara 5 veces el numero 1 al final de esta cadena:
}
separarTexto(){
    let cadena0 = "esto es una separacion y lo convierte en arreglo";
    let cadena = cadena0.split(" ");
    console.log(cadena[5]);
// split separa las cadenas y las convierte en arreglos:
}
mostrarCadena(){
    let cadena0 = "esto es una substring";
    let cadena = cadena0.substring(0,4);
    console.log(cadena);
// esto muestra hasta donde queremos mostrar una string como si fuese un arreglo:
    
    let string = "Esto se mostrara en mayuscula";
    let string0 = string.toUpperCase();
    let minuscula = "ESTO SE MOSTRARA EN MINUSCULA";
    let string1 = minuscula.toLowerCase();
    console.log(string0);
    console.log(string1);
}   
}
const cadena = new cadenasDeTexto;
cadena.concatCadena();
cadena.startsEnds();
cadena.buscarCadena();
cadena.posicionDeTexto();
cadena.rellenarTexto();
cadena.separarTexto();
cadena.mostrarCadena();

// ejercicio metodos para buscar en cadenas:

const leccion1 =()=>{
    alert("aqui vamos a ver como funciona startsWith y como funciona endsWith");
    let preguntarDato = prompt("escribe lo que quieras aqui");
    let iniciaCon = prompt(`con que letra inicia "${preguntarDato}"`);
    let terminaCon = prompt(`con que letra termina "${preguntarDato}"`);
    let comprobar1 = preguntarDato.startsWith(iniciaCon); 
    let comprobar2 = preguntarDato.endsWith(terminaCon);
    if (comprobar1 == true){
        alert(`si inicia con "${iniciaCon}" eso significa que startsWith detecto que si iniciaba con "${iniciaCon}" ya que startsWith detectara si la palbra inicia con lo que indicaste`);
    }else{
        alert(`no inicia con "${iniciaCon}" eso significa que startsWith detecto que no empieza con "${iniciaCon}"`);
    }
    if(comprobar2 == true){
        alert(`si temina con "${terminaCon}" eso significa que endsWith detecto que si finaliza con ${terminaCon}`);
    }else{
        alert(`no termina con "${terminaCon}" eso siginifa que endsWith detecto que no finaliza con ${terminaCon}`);
    }
// esta funcion muestra con que inicia y con que termina una oracion o una cadena de texto
}

const leccion2 = ()=>{
    let pedirDato = prompt("escribe lo que desees");
    let preguntar = prompt("escribe que incluye tu oracion o alguna frase que imcluya tu oracion");
    if(pedirDato.includes(preguntar)){
        alert(`si incluye "${preguntar}" eso significa que includes si encontro la palabra "${preguntar}"`);
    }else{
        alert(`includes no encontro "${preguntar}"`)    
    }
// esta funcion busca si hay una palabra en especifico segun de el usuario:
}
const leccion3 =()=>{
    let pedirDato = "hola mundo";
    alert(`aqui veremos la posision de "${pedirDato}"`);
    let resultado1 = pedirDato.indexOf("hola");
    let resultado2 = pedirDato.indexOf("mundo");
    alert(`hola se encuentra en la posision "${resultado1}" y mundo se encuentra desde la posision "${resultado2}"`);
    
    let dato = "hola mundo mundo";
    alert(`aqui se mostrara la posision de "${dato}"`);
    let resutado3 = dato.lastIndexOf("mundo");
    alert(`mundo se mostrara en la posision ${resutado3} de la cadena de texto ya que lastIndexOf buscara la primera parte de "mundo"`);
}

const leccion4=()=>{
    let dato = prompt("escribe tu nombre vas a progrmar para poner tu nombre al inicio?");
    console.log(`${dato.padStart(5,dato)} es mi nombre y soy programador`)
    let dato1 = prompt("escribe tu nombre y programaras lo que eres");
    console.log(`me dedico a progrmar me presento soy ${dato1.padEnd(1,dato1)}`);
}

const leccion5 =()=>{
    let escribir = prompt(`escriba su primer "hola mundo"`);
    let resultado = escribir.split(" ");
    for(i=0;i<500;i++){
        if(escribir == "hola mundo"){
            alert(`ahora la funcion split nos mostrara "${resultado[0]}" y tambien "${resultado[1]}" despues de convertir la cadena en arreglo`);
            alert("felicitaciones acabas de usar split");
            break;
        }else if(escribir != "hola mubdo"){
            let alerta = prompt(`porfavor escriba "hola mundo"`);
            if(alerta == "hola mundo"){
                alert(`ahora la funcion split nos mostrara "${resultado[0]}" y tambien "${resultado[1]}" despues de convertir la cadena en arreglo`);
                alert("felicitaciones acabas de usar split");
            break;
            }
        }
    }
// esta funcion se encarga de pedirnos que scribamos hola mundo para poder usar split:    
}

const leccion6 =()=>{
    let pedir = prompt(`por favor escriba "hola mundo"`);
    if(pedir == "hola mundo"){
     alert(`genial ahora la funcion substring mostrara ${pedir.substring(0,4)} y tambien mostrara ${pedir.substring(5,10)} porque le indicamos la posision del "0 al 3" y del "5 al 9"`);
    }else if(pedir != "hola mundo"){
        for(i=0;i<10;i++){
            if(pedir == "hola mundo"){
                alert(`genial ahora la funcion substring mostrara ${pedir.substring(0,4)} y tambien mostrara ${pedir.substring(5,10)} porque le indicamos la posision del "0 al 3" y del "5 al 9"`);
                break;
            }else{
                let pedir = prompt("por favor escriba `hola mundo`");
                if(pedir == "hola mundo"){
                    alert(`genial ahora la funcion substring mostrara ${pedir.substring(0,4)} y tambien mostrara ${pedir.substring(5,10)} porque le indicamos la posision del "0 al 3" y del "5 al 9"`);
                    break;
                }
            }
        }
    }
// esta funcion utiliza la funcion substring:
}

const leccion7 =()=>{
    alert("vamos a hacer magia convertiremos lo que escribes en mayuscula y tambien en minuscula");
    let dato = prompt("escribe lo que quieras");
    let resultado = dato.toUpperCase(dato);
    let resultado1 = dato.toLocaleLowerCase(dato);
    alert(`aqui se mostrara en mayuscula ${resultado} y aqui en minuscula ${resultado1}`);
// esta funcion convierte todo en mayuscula o minuscula
}

// leccion1();
// leccion2();
// leccion3();
// leccion4();
// leccion5();
// leccion6();
// leccion7();