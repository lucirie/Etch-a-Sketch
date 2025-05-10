const container = document.querySelector(".container");

function add_divs(size) {
    for (i = 0; i < size; i++) {
        row = document.createElement("div");
        row.classList.add("row")
        for (j = 0; j < size; j++) {
            box = document.createElement("div");
            box.classList.add("box")
            row.appendChild(box);
        }
        container.appendChild(row)
    }
}