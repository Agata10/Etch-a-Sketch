const inputValue = document.getElementById("grid-size");
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
    square.forEach(cell => cell.addEventListener("mouseover", () => changeColor(cell, color)));
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
        hoverGrid("#bfbfbf");
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

    return rgb;
}

function draw() {
    let bubble = document.querySelector(".bubble");
    let rainbowColor = document.querySelector("#rainbow");
    
    makeGrids(inputValue.value);
    
    inputValue.addEventListener("change", () => {
        setBubble(inputValue, bubble);  
        changeGrid();   
    });
    
    newColor.addEventListener("input", () => {
        hoverGrid(newColor.value);  
    });

    rainbowColor.addEventListener("click", () => {
        let square = document.querySelectorAll(".row");
        let colorRGB;
        square.forEach(cell => cell.addEventListener("mouseover", () => {
            colorRGB = generateRandomRGB();
            changeColor(cell, colorRGB);
         }));
    
    });
    erase(); 
    reset();
   }
  
   draw();







