const estudiantes = [
    { nombre: "Ana", calificaciones: [14, 16, 18] },
    { nombre: "Luis", calificaciones: [10, 12, 14] },
    { nombre: "María", calificaciones: [8, 6, 10] },
    { nombre: "Carlos", calificaciones: [17, 18, 19] },
    { nombre: "Sofía", calificaciones: [7, 9, 8] },
    { nombre: "Miguel", calificaciones: [12, 13, 15] },
    { nombre: "Lucía", calificaciones: [9, 8, 10] },
    { nombre: "Pedro", calificaciones: [16, 14, 15] },
    { nombre: "Elena", calificaciones: [19, 18, 20] },
    { nombre: "Jorge", calificaciones: [11, 13, 12] }
];

function agregarCalificaciones(estudiantes, nuevasCalificaciones) {
    for (let i = 0; i < nuevasCalificaciones.length; i++) {
        if (estudiantes[i]) {
            estudiantes[i].calificaciones = estudiantes[i].calificaciones.concat(nuevasCalificaciones[i]);
        }
    }
}

function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}

function clasificarEstudiantes(estudiantes) {
    for (let i = 0; i < estudiantes.length; i++) {
        const promedio = calcularPromedio(estudiantes[i].calificaciones);
        estudiantes[i].promedio = promedio;
        if (promedio >= 16) {
            estudiantes[i].clasificacion = "Excelente";
        } else if (promedio >= 14) {
            estudiantes[i].clasificacion = "Bueno";
        } else if (promedio >= 8) {
            estudiantes[i].clasificacion = "Aprobado";
        } else {
            estudiantes[i].clasificacion = "Reprobado";
        }
    }
}

function calcularEstadisticas(estudiantes) {
    for (let i = 0; i < estudiantes.length; i++) {
        let maximo = estudiantes[i].calificaciones[0];
        let minimo = estudiantes[i].calificaciones[0];

        for (let j = 1; j < estudiantes[i].calificaciones.length; j++) {
            if (estudiantes[i].calificaciones[j] > maximo) {
                maximo = estudiantes[i].calificaciones[j];
            }
            if (estudiantes[i].calificaciones[j] < minimo) {
                minimo = estudiantes[i].calificaciones[j];
            }
        }

        estudiantes[i].maximo = maximo;
        estudiantes[i].minimo = minimo;
    }
}

function encontrarExtremos(estudiantes) {
    let mejor = estudiantes[0];
    let peor = estudiantes[0];

    for (let i = 1; i < estudiantes.length; i++) {
        if (estudiantes[i].promedio > mejor.promedio) {
            mejor = estudiantes[i];
        }
        if (estudiantes[i].promedio < peor.promedio) {
            peor = estudiantes[i];
        }
    }

    return { mejor, peor };
}

const nuevasCalificaciones = [
    [20], [15], [11], [19], [8], [14], [9], [17], [20], [13]
];
agregarCalificaciones(estudiantes, nuevasCalificaciones);
clasificarEstudiantes(estudiantes);
calcularEstadisticas(estudiantes);
const extremos = encontrarExtremos(estudiantes);

for (let i = 0; i < estudiantes.length; i++) {
    console.log(`${estudiantes[i].nombre}:`);
    console.log(`Clasificacion: ${estudiantes[i].clasificacion}`);
    console.log(`Promedio: ${estudiantes[i].promedio.toFixed(2)}`);
    console.log(`Nota mas baja: ${estudiantes[i].minimo}`);
    console.log(`Nota mas alta: ${estudiantes[i].maximo}`);
    console.log("---------------------------");
}

console.log(`El estudiante con el peor promedio es ${extremos.peor.nombre} con un promedio de ${extremos.peor.promedio.toFixed(2)}`);
console.log(`El estudiante con el mejor promedio es ${extremos.mejor.nombre} con un promedio de ${extremos.mejor.promedio.toFixed(2)}`);
