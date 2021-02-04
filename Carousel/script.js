const imageContainer = document.getElementById("image-container");
const img = document.querySelectorAll("#image-container img");

let index = 0;

let carousel = () => {
    index++;
    if (index > img.length - 1)
        index = 0;
    imageContainer.style.transform = `translateX(${-index * 400}px)`;
}

setInterval(carousel, 2000);


