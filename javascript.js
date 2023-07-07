let inputValue = document.getElementById("grid-size");
let newColor = document.querySelector("#color-input");

function makeGrids(size) {

    let screen = document.querySelector(".sketch-screen");

    for(let i = 0; i < size; i++){
        let column = document.createElement("div");
        column.classList.add("column");
        for(let j = 1; j<= size; j++){
        let row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
        }
        screen.appendChild(column);
    }   

    hoverGrid(newColor.value);
}

function changeGrid() {
    let column = document.querySelectorAll(".column");
    let row = document.querySelectorAll(".row");

    column.forEach((col) => {
        return col.remove();
    });
    row.forEach((r) => {
        return r.remove();
    });

    makeGrids(inputValue.value);
    
}

function hoverGrid(color) {
    let square = document.querySelectorAll(".row");
    square.forEach(cell => cell.addEventListener("mouseenter", () => changeColor(cell, color)));
}

function eraseGrid() {
    let square = document.querySelectorAll(".row");
    square.forEach(cell => cell.addEventListener("mouseenter", () => changeColor(cell, "#bfbfbf")));
}

function changeColor(cell, color) {
    cell.style.backgroundColor = `${color}`;
}

function reset() {
    let reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
        window.location.reload();
    })
}

function erase() {
    let buttons = document.querySelector(".round-buttons");
    let eraser = buttons.querySelector("#eraser");
    eraser.addEventListener("click", () => {
    eraseGrid();
    eraser.style.backgroundColor = "white";
    });
 }

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;
    
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.2}px))`;
}  

function generateRandomRGB() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;

    hoverGrid(rgb);
}

function draw() {
    
    
    let bubble = document.querySelector(".bubble");
    
    makeGrids(inputValue.value);

    inputValue.addEventListener("change", () => {
        setBubble(inputValue, bubble);  
        changeGrid();   
    });
    
    newColor.addEventListener("input", () => {
        hoverGrid(newColor.value);  
    });
    erase(); 
    reset();
   }
  
   draw();





