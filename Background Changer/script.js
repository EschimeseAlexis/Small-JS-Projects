const btn = document.querySelector("button");

btn.onclick = () => {
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
