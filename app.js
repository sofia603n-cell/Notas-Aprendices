const aprendices = [ { nombre: "Ana", nota: 4.5, programa: "ADSO" }, { nombre: "Luis",
nota: 2.8, programa: "ADSO" }, { nombre: "Marta", nota: 3.7, programa: "Diseno Web" }, {
nombre: "Pedro", nota: 1.9, programa: "ADSO" }, { nombre: "Sofia", nota: 5.0, programa:
"Diseno Web" } ];

console.log("Listado de Aprendices");
aprendices.forEach(function(aprendiz){
console.log(
    "Nombre: " + aprendiz.nombre +
    "|Nota: " + aprendiz.nota +
    "|Programa: " + aprendiz.programa
);
});


const aprobados = aprendices.filter(function(aprendiz){
    return aprendiz.nota >= 3.0;
}
);

console.log("Aprendices Aprobados");
aprobados.forEach(function(aprendiz){
    console.log(
        "Nombre: " + aprendiz.nombre +
        "|Nota: " + aprendiz.nota +
        "|Programa: " + aprendiz.programa
    );
});
function Reprobados (){
const Reprobados = aprendices.filter(aprendiz => aprendiz.nota <3.0);
console.log("Aprendices Reprobados: ")
console.log(Reprobados);

}

function mayusculas(){
    const mayusculas = aprendices.map(a=> a.nombre.toUpperCase())
    console.log("Nombres en mayuscula")
    console.log(mayusculas);
}


function promedio(){
    const sumanotas = aprendices.reduce((acumulador, aprendiz) =>{
        return acumulador + aprendiz.nota;
    },0 );
    const promedio = sumanotas / aprendices.length;
    console.log("Promedio: ", promedio);
}