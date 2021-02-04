const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("popup-close");
let popupContainer = document.getElementById("popup-container");

openBtn.onclick = () => {
    popupContainer.classList.toggle("active");
}

closeBtn.onclick = () => {
    popupContainer.classList.toggle("active");
}
