function changeBackgroundColor() {
    let color = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "aqua"];
    let randomColor = color[Math.floor(Math.random() * color.length)];
    document.body.style.backgroundColor = randomColor
}