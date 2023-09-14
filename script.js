var button = document.getElementById("button");
var box = document.getElementById("box");

function changeColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    box.style.backgroundColor = color;
}

button.addEventListener("click", changeColor);
