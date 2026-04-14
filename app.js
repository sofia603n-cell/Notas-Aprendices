const aprendices = [
 { nombre: "Ana", nota: 4.5, programa: "ADSO" },
 { nombre: "Luis", nota: 2.8, programa: "ADSO" },
 { nombre: "Marta", nota: 3.7, programa: "Diseno Web" },
 { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
 { nombre: "Sofia", nota: 5.0, programa: "Diseno Web" }
];

const prompt = require("prompt-sync")();1

function listarAprendices() {
    console.log("Listado de Aprendices");
    aprendices.forEach(function(aprendiz){
        console.log(
            "Nombre: " + aprendiz.nombre +
            " | Nota: " + aprendiz.nota +
            " | Programa: " + aprendiz.programa
        );
    });
}

function listarAprobados() {
    const aprobados = aprendices.filter(aprendiz => aprendiz.nota >= 3.0);

    console.log("Aprendices Aprobados");
    aprobados.forEach(aprendiz => {
        console.log(
            "Nombre: " + aprendiz.nombre +
            " | Nota: " + aprendiz.nota +
            " | Programa: " + aprendiz.programa
        );
    });
}

function reprobados() {
    const lista = aprendices.filter(aprendiz => aprendiz.nota < 3.0);
    console.log("Aprendices Reprobados:");
    console.log(lista);
}

function mayusculas() {
    const nombres = aprendices.map(a => a.nombre.toUpperCase());
    console.log("Nombres en mayúscula:");
    console.log(nombres);
}

function promedio() {
    const suma = aprendices.reduce((acc, aprendiz) => acc + aprendiz.nota, 0);
    const prom = suma / aprendices.length;
    console.log("Promedio:", prom);
}

function ordenar() {
    const ordenados = [...aprendices].sort((a, b) => b.nota - a.nota);
    console.log("Ordenados de mayor a menor:");
    console.log(ordenados);
}


function clasificacionNotas(nota) {
    switch (true) {
        case (nota < 3):
            return "Bajo";
        case (nota >= 3 && nota < 4):
            return "Básico";
        case (nota >= 4 && nota <= 4.5):
            return "Alto";
        case (nota > 4.5):
            return "Superior";
        default:
            return "Nota inválida";
    }
}

function menu() {
    let opcion;

    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Listar Aprendices\n" +
            "2. Listar Aprobados\n" +
            "3. Listar Reprobados\n" +
            "4. Nombres en Mayúscula\n" +
            "5. Promedio de Notas\n" +
            "6. Ordenar por Nota\n" +
            "7. Clasificación de Notas\n" +
            "8. Salir"
        );

        switch (opcion) {
            case "1":
                listarAprendices();
                break;

            case "2":
                listarAprobados();
                break;

            case "3":
                reprobados();
                break;

            case "4":
                mayusculas();
                break;

            case "5":
                promedio();
                break;

            case "6":
                ordenar();
                break;

            case "7":
                mostrarClasificaciones();
                break;

            case "8":
                console.log("Saliendo del programa");
                break;

            default:
                console.log("Opción no válida");
        }

    } while (opcion !== "8");
}

menu();