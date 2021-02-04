const btn = document.querySelector("button");
const container = document.getElementById("container");

btn.onclick = () => {
    newNotification();
}

let newNotification = () => {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerText = "Here is a notification !"
    container.appendChild(notification);
    setTimeout(() => {
        notification.remove()
    }, 3000);
}
