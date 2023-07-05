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
    square.forEach(cell => cell.addEventListener("mouseover", () => changeColor(cell, "black")));
}

function eraseGrid() {
    let square = document.querySelectorAll(".row");
    square.forEach(cell => cell.addEventListener("mouseenter", () => changeColor(cell, "#bfbfbf")));
}

function changeColor(cell, color) {
    cell.style.backgroundColor = `${color}`;
}

function Draw() {
    let input = document.querySelector("#grid-size");
    input.addEventListener("input", (event) => {
        makeGrids(`${input}`);
    });

   
    hoverGrid();

    let buttons = document.querySelector(".round-buttons");
    let eraser = buttons.querySelector("#eraser");
    eraser.addEventListener("click", () => {
        eraseGrid();
        eraser.style.backgroundColor = "white";
    });
   

}


Draw();



