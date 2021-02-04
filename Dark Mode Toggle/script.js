const checkbox = document.querySelector("input");

checkbox.onchange = (event) => {
    document.body.classList.toggle("dark", event.target.checked);
}
