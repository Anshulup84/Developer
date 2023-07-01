let container = document.getElementById("container")
let display = document.getElementById("display")

// adding a keydown event listener to the document
document.addEventListener("keydown", (e) =>{
    display.style.color = "red"
    display.innerText = e.key + "is KeyDown"
})

//  adding a keyup event listener to the document
document.addEventListener("keyup", (e) =>{
    display.style.color = "green"
    display.innerText = e.key + "is Keyup"
}) 