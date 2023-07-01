let inputbox = document.getElementById("input-box")
let display = document.getElementById(`display`)

inputbox.addEventListener(`keypress`, (e) => {
display.innerText ="you have Pressed " + e.key
})