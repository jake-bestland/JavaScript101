function toggleDarkMode() {
    let bod = document.body;
    bod.classList.toggle("dark-mode");
}

function increaseTextSize() {
    let currentFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    let newFontSize = (currentFontSize / 16) + 0.1;
    document.body.style.fontSize = `${newFontSize}rem`;
}

function decreaseTextSize() {
    let currentFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    let newFontSize = (currentFontSize / 16) - 0.1;
    document.body.style.fontSize = `${newFontSize}rem`;
}

let btn = document.getElementById("theme-switch");
btn.addEventListener("click", toggleDarkMode);

let increaseButton = document.getElementById("increase-font");
increaseButton.addEventListener("click", increaseTextSize);

let decreaseButton = document.getElementById("decrease-font");
decreaseButton.addEventListener("click", decreaseTextSize);