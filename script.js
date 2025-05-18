const container = document.querySelector(".container");
const input = document.getElementById("myRange");
const output = document.querySelector("output");
const reset = document.querySelector(".reset")

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

input.addEventListener('input', () => {
    container.innerHTML = "";
    let divCount = document.getElementById("myRange").value;
    add_divs(divCount);
    detectHover(divCount);
    output.textContent = `${divCount} x ${divCount}`;
});

reset.addEventListener('click', () => {
    container.innerHTML = "";
    let divCount = document.getElementById("myRange").value;
    add_divs(divCount);
    detectHover(divCount)
});
    

function detectHover(divCount) {
    boxes = document.querySelectorAll(".box");
    for (i = 0; i < (divCount ** 2); i++) {
        boxes[i].addEventListener('mouseover', (e) => {
            let bg_colour = Math.floor(Math.random() * 16777216).toString(16);
            bg_colour = "#" + ("000000" + bg_colour).slice(-6);
            e.currentTarget.style.backgroundColor = bg_colour;
            e.currentTarget.classList.add("fadeIn");
            e.currentTarget.style.boxShadow = "0 0 10px black";
            e.currentTarget.style.outline = "2px solid #FFD63A"
        })
    }
}

// Chatgpt generated code to stylize input

const slider = document.getElementById("myRange");

slider.addEventListener("input", () => {
  const val = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = `linear-gradient(to right, yellow 0%, yellow ${val}%, #ccc ${val}%, #ccc 100%)`;
});


(function(){
    socializer( '.socializer' );
}());

add_divs(50);
detectHover(50)