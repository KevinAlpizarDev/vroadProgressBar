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
const inputValueReturn = (wichOne, subtaskforComplete, nameBar) => {
    wichOne.addEventListener("change", (event) => {
        const inputValue = event.target.value;
        const convertedInputValue = Number(inputValue);
        const ProgressBar = (id, subTaskCompleted1, subTaskToComplete1) => {
            const progress = (subTaskCompleted1 / subTaskToComplete1) * 100;
            id.style.width = progress + "%";
        };
        ProgressBar(nameBar, convertedInputValue, subtaskforComplete);
    });
};
inputValueReturn(firsInput, 5, firstBar);
inputValueReturn(secondInput, 10, secondBar);
inputValueReturn(thirdInput, 15, thirdBar);
