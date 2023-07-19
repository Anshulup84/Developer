const image = document.getElementById("image");
let topPosition = 0;
let leftPosition = 0;
const stepSize = 10;

window.addEventListener("keydown", function(event) {
    let key = event.key;

    switch (key) {
        case "ArrowUp":
            topPosition -= stepSize;
            break;
        case "ArrowDown":
            topPosition += stepSize;
            break;
        case "ArrowLeft":
            leftPosition -= stepSize;
            break;
        case "ArrowRight":
            leftPosition += stepSize;
            break;
    }

    image.style.top = topPosition + "px";
    image.style.left = leftPosition + "px";
});