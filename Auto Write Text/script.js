const text = "Hello, here is some auto-written text !"
let index = 0;

let writeText = () => {
    document.body.innerText = text.slice(0, index);
    index ++;
    if (index > text.length -1)
        index = 0;
}

setInterval(writeText, 100);
