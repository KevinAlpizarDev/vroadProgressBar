
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


//TEXTO


// FUNCION 1
let firsInputValue: number | string 
let mainValue: number | string = 0
// let subTaskToComplete1 = 5
// let subTaskToComplete2 = 10



// ejecution()
let inputValue: string
///////////////////////////////////////////////////
// const inputValueReturn = (
//     wichOne: HTMLElement| null,
//     subtaskforComplete: number,
//     nameBar: HTMLElement) =>  {
//     wichOne!.addEventListener("change", (event) => {
//     const inputValue = (event.target as HTMLInputElement).value;
//     const convertedInputValue = Number(inputValue)
//     // Optionally, you can perform some task with the input value here
//     // If you want to update the bar immediately, you can call the task function here
//     const ProgressBar = (id: HTMLElement, subTaskCompleted1: number, subTaskToComplete1: number) => {
//     const progress = (subTaskCompleted1 / subTaskToComplete1) * 100;
//     id.style.width = progress + "%";
//     }
//     ProgressBar(nameBar, convertedInputValue, subtaskforComplete);
//   //  return inputValue; // Return the input value
//   });
// };
// // Call inputValueReturn to set up the event listener
// inputValueReturn(firsInput, 5, firstBar);
// inputValueReturn(secondInput, 10, secondBar);
// inputValueReturn(thirdInput, 15, thirdBar);
//////////////////////////////////////////////////////////////////
const inputValueReturn = (
  wichOne: HTMLElement| null,
  subtaskforComplete: number,
  nameBar: HTMLElement) =>  {
  wichOne!.addEventListener("change", (event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  const convertedInputValue = Number(inputValue)
  // Optionally, you can perform some task with the input value here
  // If you want to update the bar immediately, you can call the task function here
  const ProgressBar = (id: HTMLElement, subTaskCompleted1: number, subTaskToComplete1: number) => {
  const progress = (subTaskCompleted1 / subTaskToComplete1) * 100;
  id.style.width = progress + "%";
  }
  ProgressBar(nameBar, convertedInputValue, subtaskforComplete);
//  return inputValue; // Return the input value
});
};
// Call inputValueReturn to set up the event listener
inputValueReturn(firsInput, 5, firstBar);
inputValueReturn(secondInput, 10, secondBar);
inputValueReturn(thirdInput, 15, thirdBar);
//TO CHANGE
// if (Event != undefined) {
  
//   console.log(    firsInputValue = (event.target as HTMLInputElement).value);
// }

  // Recupera el valor almacenado de subTaskToComplete1

  
  // Verifica si el valor recuperado no es nulo ni indefinido antes de asignarlo a firstSpan.innerHTML


// let secondInputValue: number | string = 0
// // firsInput.addEventListener("input");
// secondInput!.addEventListener('change', (event) => {
//   secondInputValue = (event.target as HTMLInputElement).value
//   // console.log(firsInputValue.value) // No error because 'value' exists on 'HTMLInputElement'.
//   function task2(id: HTMLElement, subTaskCompleted1: number, subTaskToComplete1: number) {
//     secondInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100) // Las subtareas realizadas, entre  el numero de subtareas existentes
//     return id!.style.width = secondInputValue + "%"
//   } task2(first-bar, Number(secondInputValue), 2)
// })







// FUNCION HELPER
// function helper(subTaskCompleted1: number, subTaskToComplete1: number) {
//   mainValue = (subTaskCompleted1 / subTaskToComplete1 * 100) // Las subtareas realizadas, entre  el numero de subtareas existentes
//   return mainBar!.style.width = mainValue + "%"
// }
// console.log(helper(Number(firsInputValue), 6));
// // // FUNCION 2
// let secondInputValue: number | string = 0
// let subTaskCompleted2 = 10
// let hola2: string | number= String(subTaskCompleted2) 


// if (secondSpan !== undefined && secondSpan !== null) {
//   secondSpan.innerHTML = hola2;
// }
// //  el


// // firsInput.addEventListener("input");
// secondInput!.addEventListener('change', (event) => {
//   secondInputValue = (event.target as HTMLInputElement).value
//   // console.log(firsInputValue.value) // No error because 'value' exists on 'HTMLInputElement'.
//   function task2(subTaskCompleted1: number, subTaskToComplete1: number) {
//     secondInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100) // Las subtareas realizadas, entre  el numero de subtareas existentes
//     return secondBar!.style.width = secondInputValue + "%"
//   } task2(Number(secondInputValue), 10)
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
//   } task3(Number(thirdInputValue), subTaskCompleted2)
// })


// let mainValue: number | string = 0;
// // // Función para calcular la meta
// function goal(subTaskCompleted1: number, subTaskCompleted2: number, subTaskCompleted3: number, subTaskToComplete1: number, subTaskToComplete2: number, subTaskToComplete3: number) {
//   mainValue = (subTaskCompleted1 + subTaskCompleted2 + subTaskCompleted3) / (subTaskToComplete1 + subTaskToComplete2 + subTaskToComplete3) * 100;



//   return mainBar!.style.width = mainValue + "%";


// }


// goal(firsInputValue, secondInputValue, thirdInputValue, 6, 0, 3)




















