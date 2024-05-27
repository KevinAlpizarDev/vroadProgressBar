// PROGRESS VARIABLES
let mainBar = document.getElementById("main-bar")
let firstBar = document.getElementById("first-bar")!
let secondBar = document.getElementById("second-bar")!
let thirdBar = document.getElementById("third-bar")!
// INPUTS VARIABLES
let firsInput = document.getElementById("first-input")
let secondInput = document.getElementById("second-input")
let thirdInput = document.getElementById("third-input")
// SPAN VARIABLES
let firstSpan= document.getElementById("first-span")
let secondSpan = document.getElementById("second-span")
let thirdSpan = document.getElementById("third-span")
// FUNCION 1
let firsInputValue: number | string 
let mainValue: number | string = 0
// ejecution()
let inputValue: string
///////////////////////////////////////////////////
let subTaskCompleted: number;
let totalTasks = 0
let otraVariable = 0
const vroadTaskProgress = (
  wichInput: HTMLElement | null,
  subTaskToComplet: number,
  nameBar: HTMLElement
) => {
  totalTasks++
  wichInput!.addEventListener("change", (event) => {
    let inputValue = (event.target as HTMLInputElement).value;
    const subTaskCompleted = Math.round(Number(inputValue)); // Round the value
    // console.log(wichInput?.id);
    // console.log(inputValue.length);
    const ProgressBar = (id: HTMLElement, subTaskCompleted: number, subTaskToComplet: number) => {
      let porcentOfprogress;
      // if (subTaskCompleted <= subTaskToComplet) {
        if (subTaskCompleted <= subTaskToComplet) {
        porcentOfprogress = (subTaskCompleted / subTaskToComplet) * 100;
        // console.log(porcentOfprogress);
        id.style.width = porcentOfprogress + "%";
        // console.log(subTaskCompleted);
        ///////////////////////////////////////


 
      
      //////////////////////////////////////
      } else {
        porcentOfprogress = 100; // Limit the progress to 100%
        // Disable the input when progress reaches 100
      }
    };



    ProgressBar(nameBar, subTaskCompleted, subTaskToComplet);
  });
  // console.log("Cantidad total de tareas actuales:", totalTasks);
};
// Llama a vroadTaskProgress para configurar el event listener
// console.log("Cantidad total de tareas actuales:", totalTasks);
vroadTaskProgress(firsInput, 5, firstBar);
vroadTaskProgress(secondInput, 10, secondBar);
 vroadTaskProgress(thirdInput, 15, thirdBar);
































// // PROGRESS VARIABLES
// let mainBar = document.getElementById("main-bar")
// let firstBar = document.getElementById("first-bar")!
// let secondBar = document.getElementById("second-bar")!
// let thirdBar = document.getElementById("third-bar")!
// // INPUTS VARIABLES
// let firsInput = document.getElementById("first-input")
// let secondInput = document.getElementById("second-input")
// let thirdInput = document.getElementById("third-input")
// // SPAN VARIABLES
// let firstSpan= document.getElementById("first-span")
// let secondSpan = document.getElementById("second-span")
// let thirdSpan = document.getElementById("third-span")
// // FUNCION 1
// let firsInputValue: number | string 
// let mainValue: number | string = 0
// // ejecution()
// let inputValue: string
// ///////////////////////////////////////////////////
// let subTaskCompleted: number;
// let totalTasks = 0
// const vroadTaskProgress = (
//   wichInput: HTMLElement | null,
//   subTaskToComplet: number,
//   nameBar: HTMLElement
// ) => {
//   totalTasks++
//   wichInput!.addEventListener("change", (event) => {
//     let inputValue = (event.target as HTMLInputElement).value;
//     const subTaskCompleted = Math.round(Number(inputValue)); // Round the value
//     console.log(wichInput?.id);
//     console.log(inputValue.length);
//     const ProgressBar = (id: HTMLElement, subTaskCompleted: number, subTaskToComplet: number) => {
//       let porcentOfprogress;
//       // if (subTaskCompleted <= subTaskToComplet) {
//         if (subTaskCompleted <= subTaskToComplet) {
//         porcentOfprogress = (subTaskCompleted / subTaskToComplet) * 100;
//         console.log(porcentOfprogress);
//         id.style.width = porcentOfprogress + "%";
//         // console.log(subTaskCompleted);
//       } else {
//         porcentOfprogress = 100; // Limit the progress to 100%
//         // Disable the input when progress reaches 100
//       }
//     };
//     ProgressBar(nameBar, subTaskCompleted, subTaskToComplet);
//   });
//   console.log("Cantidad total de tareas actuales:", totalTasks);
// };
// // Llama a vroadTaskProgress para configurar el event listener
// // console.log("Cantidad total de tareas actuales:", totalTasks);
// vroadTaskProgress(firsInput, 5, firstBar);
// vroadTaskProgress(secondInput, 10, secondBar);
//  vroadTaskProgress(thirdInput, 15, thirdBar);





// // PROGRESS VARIABLES
// let mainBar = document.getElementById("main-bar")
// let firstBar = document.getElementById("first-bar")!
// let secondBar = document.getElementById("second-bar")
// let thirdBar = document.getElementById("third-bar")
// // INPUTS VARIABLES

// let firsInput = document.getElementById("first-input")
// let secondInput = document.getElementById("second-input")
// let thirdInput = document.getElementById("third-input")
// // SPAN VARIABLES
// let firstSpan: HTMLElement | null = document.getElementById("first-span")
// let secondSpan = document.getElementById("second-span")
// let thirdSpan = document.getElementById("third-span")

// // FUNCION 1
// let firsInputValue: number | string = 0
// let mainValue: number | string = 0

// firsInput!.addEventListener('change', (event) => {
//   firsInputValue = (event.target as HTMLInputElement).value
//   // console.log(firsInputValue.value) // No error because 'value' exists on 'HTMLInputElement'.
//   function task1(id: HTMLElement, subTaskCompleted1: number, subTaskToComplete1: number) {
//     firsInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100) // Las subtareas realizadas, entre  el numero de subtareas existentes
//     return id!.style.width = firsInputValue + "%"
//   }
//   task1(firstBar, Number(firsInputValue), 100)
//   // console.log(firsInputValue)
// })



// let secondInputValue: number | string = 0
// // firsInput.addEventListener("input");
// secondInput!.addEventListener('change', (event) => {
//   secondInputValue = (event.target as HTMLInputElement).value
//   // console.log(firsInputValue.value) // No error because 'value' exists on 'HTMLInputElement'.
//   function task2(subTaskCompleted1: number, subTaskToComplete1: number) {
//     secondInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100) // Las subtareas realizadas, entre  el numero de subtareas existentes
//     return secondBar!.style.width = secondInputValue + "%"
//   } task2( Number(secondInputValue), 2)
// })




// let secondInputValue: number | string = 0
// // firsInput.addEventListener("input");
// secondInput!.addEventListener('change', (event) => {
//   secondInputValue = (event.target as HTMLInputElement).value
//   // console.log(firsInputValue.value) // No error because 'value' exists on 'HTMLInputElement'.
//   function task2(subTaskCompleted1: number, subTaskToComplete1: number) {
//     secondInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100) // Las subtareas realizadas, entre  el numero de subtareas existentes
//     return secondBar!.style.width = secondInputValue + "%"
//   } task2( Number(secondInputValue), 2)
// })




// // // FUNCION 3
// let thirdInputValue: number | string = 0
// // firsInput.addEventListener("input");
// thirdInput!.addEventListener('change', (event) => {
//   thirdInputValue = (event.target as HTMLInputElement).value
//   // console.log(firsInputValue.value) // No error because 'value' exists on 'HTMLInputElement'.
//   function task3(subTaskCompleted1: number, subTaskToComplete1: number) {
//     thirdInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100) // Las subtareas realizadas, entre  el numero de subtareas existentes
//     return thirdBar!.style.width = thirdInputValue + "%"
//   } task3(Number(thirdInputValue), 3)
// })


// let mainValue: number | string = 0;
// // // Función para calcular la meta
// function goal(subTaskCompleted1: number, subTaskCompleted2: number, subTaskCompleted3: number, subTaskToComplete1: number, subTaskToComplete2: number, subTaskToComplete3: number) {
//   mainValue = (subTaskCompleted1 + subTaskCompleted2 + subTaskCompleted3) / (subTaskToComplete1 + subTaskToComplete2 + subTaskToComplete3) * 100;



//   return mainBar!.style.width = mainValue + "%";


// }


// goal(firsInputValue, secondInputValue, thirdInputValue, 6, 0, 3)





















