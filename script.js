const container = document.querySelector(".container");

function add_divs(size) {
    for (i = 0; i < size; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        for (j = 0; j < size; j++) {
            box_number = j + size * i;
            box = document.createElement("div");
            box.classList.add("box");
            box.classList.add(box_number);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function updateBoxes() {
    container.innerHTML = "";
    let divCount = document.getElementById("boxesCount").value;
    add_divs(divCount);
    detectHover(divCount);
}

function detectHover(divCount) {
    boxes = document.querySelectorAll(".box");
    for (i = 0; i < (divCount ** 2); i++) {
        boxes[i].addEventListener('mouseover', (e) => {
            let bg_colour = Math.floor(Math.random() * 16777216).toString(16);
            bg_colour = "#" + ("000000" + bg_colour).slice(-6);
            e.currentTarget.style.backgroundColor = bg_colour;
        })
    }
}