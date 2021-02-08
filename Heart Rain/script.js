let createHeart = () => {
    const heart = document.createElement("div");
    heart.innerText = '💚';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.classList.add("heart");
    document.body.appendChild(heart);
}

setInterval(createHeart, 200);
