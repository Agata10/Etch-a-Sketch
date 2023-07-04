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
}

function hoverGrid() {
    let square = document.querySelectorAll(".row");
    square.forEach(cell => cell.addEventListener("mouseenter", () => changeColor(cell)));
}

function eraseGrid() {
    let square = document.querySelectorAll(".row");
    square.forEach(cell => cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#bfbfbf";
    }));
}

function changeColor(cell) {
    cell.style.backgroundColor = "black";
}

function Draw() {
    let size = prompt("Please enter a number from 1 to 100:");
    if(size <=  0 || size > 100 || size === " "){
        alert("Invalid value, try again");
        size = prompt("Please enter a number from 1 to 100:");
    }
    makeGrids(size);
}
makeGrids(16);
//Draw();
hoverGrid();
//eraseGrid();


