const MAX_WIDTH_HEIGHT = 800;

const container = document.querySelector(".container");
const resetButton = document.querySelector(".resetgrid");

document.addEventListener("DOMContentLoaded", createGrid(16));
container.addEventListener("mouseover", (event) => recolour(event));
resetButton.addEventListener("click", resetGrid);

function createGrid(squareCount) {
    const side = MAX_WIDTH_HEIGHT / squareCount;
    for (let divRow = 0; divRow < squareCount; divRow++) {
        const divRow = document.createElement("div");
        divRow.setAttribute("class", "gridrow");

        for (let divColumn = 0; divColumn < squareCount; divColumn++) {
            const div = document.createElement("div");
            div.setAttribute("class", "gridbox");
            div.style.cssText = `width: ${side}px; height: ${side}px`;
            divRow.appendChild(div);
        }
        container.appendChild(divRow);
    }
}

function recolour(ev) {
    if (ev.target.getAttribute("class") == "gridbox") {
        if (ev.target.style.opacity) {
            if (ev.target.style.opacity < 1)
            ev.target.style.opacity = String(Number(ev.target.style.opacity) + 0.1);
        }

        else {
            ev.target.style.opacity = "0.1";
        }
        const colour = `rgba(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)})`;
        ev.target.style["background-color"] = colour;
        console.log(ev.target.style.opacity);
    }
}

function resetGrid() {
    let squareCount;

    do {
        squareCount = prompt("Enter the number of squares along each side (between 10 and 100)")
    } while (squareCount > 100 || squareCount < 10);

    squareCount = Math.floor(Number(squareCount));

    const rows = document.querySelectorAll(".gridrow");

    for (const row of rows) {
        console.log(`removing row ${row+1}`);
        container.removeChild(row);
    }

    createGrid(squareCount);
}