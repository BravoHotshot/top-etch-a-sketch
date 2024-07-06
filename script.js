const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", createGrid(16));

container.addEventListener("mouseover", (event) => recolour(event));

function createGrid(squareCount) {
    for (let divRow = 0; divRow < squareCount; divRow++) {
        const divRow = document.createElement("div");
        divRow.setAttribute("class", "gridrow");

        for (let divColumn = 0; divColumn < squareCount; divColumn++) {
            const div = document.createElement("div");
            div.setAttribute("class", "gridbox");
            divRow.appendChild(div);
        }

        container.appendChild(divRow);
    }
}

function recolour(ev) {
    if (ev.target.getAttribute("class") != "container") {
        ev.target.style["background-color"] = "aquamarine";
    }
}