function toggleDarkMode() {
    let bod = document.body;
    bod.classList.toggle("dark-mode");
}
let btn = document.getElementById("theme-switch");
btn.addEventListener("click", toggleDarkMode);