const button = document.querySelector("button");
const menu = document.querySelector("ul");

button.onclick = () => {
    button.classList.toggle("active");
    menu.classList.toggle("active");
}
