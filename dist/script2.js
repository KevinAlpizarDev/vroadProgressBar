"use strict";
let final = 100;
for (let i = 0; i <= final; i = i + 2) {
    if (i === 0) {
        console.log("Inicio");
    }
    else if (i === final) {
        console.log("Proceso terminado");
    }
    else {
        console.log(i);
    }
}
