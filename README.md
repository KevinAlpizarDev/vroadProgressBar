<!-- CODIGO ACORDION -->
  <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
              
            </button>
          </h2>
          <div  id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <!-- LISTA DE SUBTAREAS -->
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">An active item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          </div>
        </div>
        
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
         <!-- LISTA DE SUBTAREAS  -->
         <ul class="list-group">
            <li class="list-group-item active" aria-current="true">An active item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <!-- LISTA DE SUBTAREAS 3  -->
           <!-- LISTA DE SUBTAREAS  -->
         <ul class="list-group">
            <li class="list-group-item active" aria-current="true">An active item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          </div>
        </div>
      </div>


































      function playFuntion(id: HTMLMediaElement) {
  return id.play();
}

// PARA EL ELEMENTO H1
const elementoPadre = document.querySelector(".nombre"); // Agregar el nodo 
const nombreUsuario = document.createElement("h1"); // Tipo de elemento
const textoh1 = document.createTextNode("Kevin"); // Seleccionar elemento padre 

// Resultado = "Kevin"
elementoPadre!.appendChild(nombreUsuario);
nombreUsuario.appendChild(textoh1);

// PARA EL ELEMENTO H2 
const elementoPadre2 = document.querySelector(".apellido"); // Agregar el nodo 
const apellidoUsuario = document.createElement("h1");
const textoh2 = document.createTextNode("Alpizar"); // Seleccionar elemento padre 

// Resultado = "Alpizar"
elementoPadre2!.appendChild(apellidoUsuario);
apellidoUsuario.appendChild(textoh2);

// FUNCION PARA LA PRIMER BARRA Ruby On Rails
let i = 0;

function move(id: HTMLElement, porcent: number) {
  if (i == 0) {
      // i = 1;
      let width = 0;
      const identificador = setInterval(barra, 20);

      function barra() {
          if (width >= porcent) { //variable comparada con el porcentaje de experiencia
              clearInterval(identificador); //para detener el evento de llamada 
              i = 0;
          } else {
              width++; //Ancho aumenta en uno
              id!.style.width = width + "%"; //Aumento en uno aplicado al estilo
          }
      }
  }
}
 










































 
// Función para la tarea2
// function task2(subTaskCompleted2: number, subTaskToComplete2: number) {
//      width =  (subTaskCompleted2 / subTaskToComplete2) * 100; // Las subtareas realizadas, entre  el numero de subtareas existentes
//    return firstBar!.style.width = width + "%";
// }



// Función para la tarea3
// function task3(subTaskCompleted3: number, subTaskToComplete3: number) {
//     return (subTaskCompleted3 / subTaskToComplete3) * 100; // Las subtareas realizadas, entre  el numero de subtareas existentes
// }


// // Función para calcular la meta
// function goal(subTaskCompleted1: number, subTaskCompleted2: number, subTaskCompleted3: number, subTaskToComplete1: number, subTaskToComplete2: number, subTaskToComplete3: number) {
//     return (subTaskCompleted1 + subTaskCompleted2 + subTaskCompleted3) / (subTaskToComplete1 + subTaskToComplete2 + subTaskToComplete3) * 100;
// }

// console.log(goal(4, 4, 5, 4, 4, 5));

// // console.log(task2(4, 4));
// console.log(task3(5, 5));



// function move(id: HTMLElement, porcent: number) {
//     if (i == 0) {
//         // i = 1;
//         let width = 0;
//         const identificador = setInterval(barra, 20);

//         function barra() {
//             if (width >= porcent) { //variable comparada con el porcentaje de experiencia
//                 clearInterval(identificador); //para detener el evento de llamada
//                 i = 0;
//             } else {
//                 width++; //Ancho aumenta en uno
//                 id!.style.width = width + "%"; //Aumento en uno aplicado al estilo
//             }
//         }
//     }
//   }




// PROGRESS VARIABLES
let mainBar = document.getElementById("main-bar")
let firstBar = document.getElementById("first-bar")
let secondBar = document.getElementById("second-bar")
let thirdBar = document.getElementById("third-bar")
// INPUTS VARIABLES

let firsInput = document.getElementById("first-input")
let secondInput = document.getElementById("second-input")
let thirdInput = document.getElementById("third-input")
// SPAN VARIABLES
let firstSpan: HTMLElement | null = document.getElementById("first-span")
let secondSpan = document.getElementById("second-span")
let thirdSpan = document.getElementById("third-span")

let width1 = 0;
// Función para la tarea1
// function task1(subTaskCompleted1: number, subTaskToComplete1: number) {
//    width1 =  (subTaskCompleted1 / subTaskToComplete1) * 100; // Las subtareas realizadas, entre  el numero de subtareas existentes
//    return firstBar!.style.width = width1 +  "%";

// }
// FUNCION 1
let firsInputValue: number | string = 0;
// firsInput.addEventListener("input");
firsInput!.addEventListener('change', (event) => {
  firsInputValue = (event.target as HTMLInputElement).value;
  // console.log(firsInputValue.value) // No error because 'value' exists on 'HTMLInputElement'.
  function task1(subTaskCompleted1: number, subTaskToComplete1: number) {
    firsInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100) // Las subtareas realizadas, entre  el numero de subtareas existentes
    return firstBar!.style.width = firsInputValue + "%";
  } task1(Number(firsInputValue), 6)
})
// FUNCION 2
let secondInputValue: number | string = 0;
// firsInput.addEventListener("input");
secondInput!.addEventListener('change', (event) => {
  secondInputValue = (event.target as HTMLInputElement).value;
  // console.log(firsInputValue.value) // No error because 'value' exists on 'HTMLInputElement'.
  function task2(subTaskCompleted1: number, subTaskToComplete1: number) {
    secondInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100) // Las subtareas realizadas, entre  el numero de subtareas existentes
    return secondBar!.style.width = secondInputValue + "%";
  } task2(Number(secondInputValue), 2)
})
// FUNCION 3
let thirdInputValue: number | string = 0;
// firsInput.addEventListener("input");
thirdInput!.addEventListener('change', (event) => {
  thirdInputValue = (event.target as HTMLInputElement).value;
  // console.log(firsInputValue.value) // No error because 'value' exists on 'HTMLInputElement'.
  function task3(subTaskCompleted1: number, subTaskToComplete1: number) {
    thirdInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100) // Las subtareas realizadas, entre  el numero de subtareas existentes
    return thirdBar!.style.width = thirdInputValue + "%";
  } task3(Number(thirdInputValue), 3)
})


// let mainValue: number | string = 0;
// // // Función para calcular la meta
// function goal(subTaskCompleted1: number, subTaskCompleted2: number, subTaskCompleted3: number, subTaskToComplete1: number, subTaskToComplete2: number, subTaskToComplete3: number) {
//   mainValue = (subTaskCompleted1 + subTaskCompleted2 + subTaskCompleted3) / (subTaskToComplete1 + subTaskToComplete2 + subTaskToComplete3) * 100;



//   return mainBar!.style.width = mainValue + "%";


// }


// goal(firsInputValue, secondInputValue, thirdInputValue, 4, 4, 4)

