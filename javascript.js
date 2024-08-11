const body = document.querySelector("body");
body.style.margin = "10px";

const container = document.getElementById("container");
container.style.width = "80%";
container.style.height = "80%";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.margin = "0 auto";

const top_box = document.createElement("div");
top_box.id = "top_box";

const headline = document.createElement("h1");
headline.textContent = "ETCH-A-SKETCH";
top_box.appendChild(headline);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Grid";
resetButton.addEventListener("click", resetGrid);
top_box.appendChild(resetButton);

body.insertBefore(top_box, container);

let grid_size = parseInt(prompt("enter a num 2-100"));
if (isNaN(grid_size) || grid_size < 2 || grid_size > 100) {
    alert("Please enter a valid number between 2 and 100.");
} else {
    createGrid(grid_size);
}

function createGrid(grid_size) {
    container.innerHTML = '';  // Clear the container
    const squareSize = container.clientWidth / grid_size;

    for (let i = 0; i < grid_size * grid_size; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid #ddd";
        square.addEventListener("mouseover", changeColor);
        container.appendChild(square);
    }
}

function changeColor(e) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    e.target.style.backgroundColor = randomColor;
}

function resetGrid() {
    grid_size = parseInt(prompt("Enter a number between 2 and 100"));
    if (isNaN(grid_size) || grid_size < 2 || grid_size > 100) {
        alert("Please enter a valid number between 2 and 100.");
    } else {
        createGrid(grid_size);
    }
}

window.addEventListener('resize', () => {
    container.innerHTML = '';  // Clear existing grid
    createGrid(grid_size);  // Recreate grid with the current size
});
