"use strict";
let mainBar = document.getElementById("main-bar");
let firstBar = document.getElementById("first-bar");
let secondBar = document.getElementById("second-bar");
let thirdBar = document.getElementById("third-bar");
let firsInput = document.getElementById("first-input");
let secondInput = document.getElementById("second-input");
let thirdInput = document.getElementById("third-input");
let firstSpan = document.getElementById("first-span");
let secondSpan = document.getElementById("second-span");
let thirdSpan = document.getElementById("third-span");
let firsInputValue;
let mainValue = 0;
let inputValue;
let subTaskCompleted;
let totalTasks = 0;
const vroadTaskProgress = (wichInput, subTaskToComplet, nameBar) => {
    totalTasks++;
    wichInput.addEventListener("change", (event) => {
        let inputValue = event.target.value;
        const subTaskCompleted = Math.round(Number(inputValue));
        const ProgressBar = (id, subTaskCompleted, subTaskToComplet) => {
            let porcentOfprogress;
            if (subTaskCompleted <= subTaskToComplet) {
                porcentOfprogress = (subTaskCompleted / subTaskToComplet) * 100;
                id.style.width = porcentOfprogress + "%";
                let meta = (subTaskCompleted / 100 * totalTasks) / 100;
                console.log(meta);
            }
            else {
                porcentOfprogress = 100;
            }
        };
        ProgressBar(nameBar, subTaskCompleted, subTaskToComplet);
    });
};
vroadTaskProgress(firsInput, 5, firstBar);
vroadTaskProgress(secondInput, 10, secondBar);
vroadTaskProgress(thirdInput, 15, thirdBar);
