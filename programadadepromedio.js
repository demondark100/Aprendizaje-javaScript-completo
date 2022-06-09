const cantidadDeAlumnos =()=>{
    let preguntar = prompt("cuantos alumnos hay en total?")   
    return parseInt(preguntar)
}
const nombresDeAlumnos =(nombre)=>{
    let alumnos = []
    let preguntar = prompt(`dime el nombre del alumno ${nombre}`)
    alumnos = preguntar
}
const sacarBimestre=(nota1,nota2)=>{
    let pregunta1 = prompt("dame la nota 1")
    let pregunta2 = prompt("dame la nota 2")
    return parseInt(pregunta1) + parseInt(pregunta2) /4
}
const sacarTrimestre=(nota1,nota2,nota3)=>{
    let pregunta1 = prompt("dame la nota 1")
    let pregunta2 = prompt("dame la nota 2")
    let pregunta3 = prompt("dame la nota 3")
    return parseInt(pregunta1) + parseInt(pregunta2) + parseInt(pregunta3) /6
}
const darResultado =()=>{
    let cantidad = cantidadDeAlumnos()
    for(let i = 1;i<=cantidad;i++){
        nombresDeAlumnos(i)
    }
let preguntar = prompt("1.bimestral o 2.trimestral")
let notas = []
   for(let i = 1;i<=cantidad;i++){
        if(preguntar == 1){
            notas = sacarBimestre()
        }else if(preguntar == 2){
            notas = sacarTrimestre()
        }else{
            console.log("este tipo de notas no existen")
        }
    document.write(`la nota del alumno #${i} es ${notas}`    + "<br>")
   }
}
darResultado()