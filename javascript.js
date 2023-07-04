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

function changeColor(cell){
    cell.style.backgroundColor = "black";
}
makeGrids(32);
hoverGrid();

