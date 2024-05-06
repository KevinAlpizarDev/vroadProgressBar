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
let width1 = 0;
let firsInputValue = 0;
let mainValue = 0;
firsInput.addEventListener('change', (event) => {
    firsInputValue = event.target.value;
    function task1(id, subTaskCompleted1, subTaskToComplete1) {
        firsInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100);
        return id.style.width = firsInputValue + "%";
    }
    task1(firstBar, Number(firsInputValue), 6);
});
let thirdInputValue = 0;
thirdInput.addEventListener('change', (event) => {
    thirdInputValue = event.target.value;
    function task3(subTaskCompleted1, subTaskToComplete1) {
        thirdInputValue = (subTaskCompleted1 / subTaskToComplete1 * 100);
        return thirdBar.style.width = thirdInputValue + "%";
    }
    task3(Number(thirdInputValue), 3);
});
