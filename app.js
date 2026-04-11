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