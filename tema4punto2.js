function obtenerInformacion(materia) {
    materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","pedro","juan","pepito"],
        logica: ["Rodriguez","pedro","juan","pepito","cofla","maria"],
        quimica: ["Hernandez","pedro","juan","pepito","cofla","maria"]
    }
    if(materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}
function mostrarInformacion(materia){
    let informacion = obtenerInformacion(materia);

   if (informacion !== false) {
     let profesor = informacion[0][0]
     alumnos = informacion[0];//con esto logro que me  muestr los alumnos sin el profe gracias al "shift" de abajo 
     alumnos.shift();
     document.write(`Alumnos presentres en ${informacion[1]} es: ${profesor}<br><br>Los alumnos son: <b style="color:orange">${alumnos}</b><br><br>`)
    }
}

function cantidadDeClases(alumnos){
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal= 0;
    for(info in informacion) {//"in" recorrer objetos tenerlo presente
        if (informacion[info].includes(alumnos)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    document.write(`<b style = color:blue >${alumnos}</b> esta en ${cantidadTotal} clases</b><br>
    Esta cursando las clases: <b>${clasesPresentes}</b><br>`)
    //return `<b style = color:blue >${alumnos}</b> esta en ${cantidadTotal} clases</b><br>Esta cursando las clases: <b>${clasesPresentes}</b><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");
cantidadDeClases("cofla");
cantidadDeClases("pedro");