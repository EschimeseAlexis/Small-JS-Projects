const sounds = [
    "Snare",
    "Charleston",
    "Clave",
    "Mbira",
    "Perc"
]

sounds.forEach((sound) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = sound;

    button.onclick = () => {
        stopSong();
        let a = document.getElementById(sound);
        a.play();
    }

    document.body.appendChild(button);
});

let stopSong = () => {
    sounds.forEach((sound) => {
        let song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
