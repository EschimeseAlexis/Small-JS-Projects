const container = document.querySelector("div");
const image = document.querySelector("img");

container.onmousemove = (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = "scale(1.8)";
}

container.onmouseleave = () => {
    image.style.transformOrigin = "center center";
    image.style.transform = "scale(1)";
}
