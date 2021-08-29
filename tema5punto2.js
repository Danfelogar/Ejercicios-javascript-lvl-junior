let trabajo = "240 min de trabajo ";
let estudio = "100 min de estudio";
let tp = "100 min hacer trabajos practicos";
let homework = "30 min de cosas de la casa";
let descanso = "10 min de descanso";

console.log("TAREAS");

for (let i = 0 ; i <14; i++){

    if (i == 0) {
        console.group("semana 1");
    }

    console.groupCollapsed("dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();

    if (i == 7) {
     console.groupEnd();
     console.groupCollapsed("semana 2");
    }

}
console.groupEnd();
console.groupEnd();
