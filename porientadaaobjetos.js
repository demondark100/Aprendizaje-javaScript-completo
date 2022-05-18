// ahora aprendimos sobre programacion orientada
// a objetos:

class Maquina{
  constructor(color,sistemaOperacion){
    this.color = color;
    this.sistemaOperacion = sistemaOperacion;
  }
}
class Windows extends Maquina{
  constructor(color,sistemaOperacion,procesador,ram,resolucion,almacenamiento){
    super(color,sistemaOperacion),
    this.procesador = procesador;
    this.ram = ram;
    this.resolucion = resolucion;
    this.almacenamiento = almacenamiento;
    this.info = `la maquina es de color ${color} es sistema operativo ${sistemaOperacion}
    tiene un procesador ${procesador} tiene ${ram} de memoria ram tienes una resolucion de
    ${resolucion} y tiene un almacenamiento de ${almacenamiento}.`
  }
  infoPc(){
    console.log(this.info);    
  }
}
const pc = new Windows("negro","windows","intel core i5","4 de ram","1500p x 2500p","1 terabait");
pc.infoPc();

// esto es programacion orientada a objetos posdata todo de javaScript es un objeto: 

// ejercicio:

const salirCamara =()=>{
    let preguntaSalir = confirm("desea salir de la aplicacion camara?");
    if(preguntaSalir == true){
        alert("saliste de la aplicacion camara")
    }else if (preguntaSalir == false){
        for(i=0;i < 500;i++){
            if(preguntaSalir == true){
                alert("saliste de la aplicacion camara");
            }else if(preguntaSalir == false){
                let preguntaBucle = confirm("desea salir de la aplicacion camara?");
                    if(preguntaBucle == true){
                    alert("saliste de la aplicacion camara");
                    break;
                }
            }
        }
    }
}

const salirRedes =()=>{
    let preguntaSlirRedes = confirm("desea salir de esta red social?");
    if(preguntaSlirRedes == true){
        alert("saliste de esta red social");
    }else if(preguntaSlirRedes == false){
        for(i=0;i<500;i++){
            let preguntarRedesBucle = confirm("desea salir de esta red social");
            if(preguntarRedesBucle == true){
                alert("saliste de esta red social");
                break;
            }else if(preguntarRedesBucle == false){
                confirm("desea salir de esta red social?")
            }
        }
    }
}
const cerrarJuego=()=>{
    let preguntarJuego = confirm("desea salir de este juego?");
    if(preguntarJuego == true){
        alert("saliste de este juego");
    }else if(preguntarJuego == false){
        for(i=0;i<500;i++){
            let preguntarJuegoBucle = confirm("desea salir de este juego?");
            if(preguntarJuegoBucle == true){
                alert("saliste de este juego");
                break;
            }else if(preguntarJuegoBucle == false){
                confirm("desea salir de esta red social?")
            }
        }
    }
}

class Telefono{
    constructor(camara,redes,juegos){
        this.camara = camara;
        this.redes = redes;
        this.juegos = juegos;
    }
abrirCamara(){
    alert("camara abierta");
    let preguntaCamara = prompt("desea tomar 1 para tomar foto / 2 para grabar video?");
        if(preguntaCamara == 1){
            let preguntarResolucion = prompt("a que resolucion desea la foto 1 hd/ 2 4k?");
            alert("click foto tomada");   
            salirCamara();
         }
        else if(preguntaCamara == 2){
            let pregunrarVideo = prompt("que resolucion de video desea tomar elija entre (1 hd/2 4k)?");
            if(pregunrarVideo == 1 || pregunrarVideo == 2){
                alert("grabando video");
                salirCamara();
            }
        }else{
            alert("esa opcion no existe");
        }               
    }
abrirRedes(){
    let preguntarRedes = prompt("que red social desea abrir? 1facebook 2github 3watssapp 4instagram 5twiter 6tiktok");
    if(preguntarRedes == 1 || preguntarRedes == 2 || preguntarRedes == 3 || preguntarRedes == 4 || preguntarRedes == 5 || preguntarRedes == 6){
        alert("aplicacion abierta con exito");
        salirRedes();
    }else{
        alert("esa aplicacion no existe");
    }
}
abrirJuego(){
    alert("juegos disponibles que descargaste 1 mobile legends 2 pubg mobile 3 plants vs zombies 4 damas 5 need for speed");
    let preguntaAbrirJuego = prompt("que juego desea abrir?");
    if(preguntaAbrirJuego == 1 || preguntaAbrirJuego == 2 || preguntaAbrirJuego == 3 || preguntaAbrirJuego == 4 || preguntaAbrirJuego == 5){
        alert("juego abierto");
        cerrarJuego();
    }else{
        alert("esa aplicacion no existe");
    }
}
}
const telefono = new Telefono;
telefono.abrirCamara();
telefono.abrirRedes();
telefono.abrirJuego();