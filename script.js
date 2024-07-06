const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
    for (let divRow = 1; divRow < 17; divRow++) {
        const divRow = document.createElement("div");
        divRow.setAttribute("class", "gridrow");

        for (let divColumn = 1; divColumn < 17; divColumn++) {
            const div = document.createElement("div");
            div.setAttribute("class", "gridbox");
            divRow.appendChild(div);
        }

        container.appendChild(divRow);
    }
});