const text = "Hello, here is some auto-written text !"
let index = 0;
let container = document.getElementById("container");

let writeText = () => {
    container.innerText = text.slice(0, index);
    index ++;
    if (index > text.length -1)
        index = 0;
}

setInterval(writeText, 100);
