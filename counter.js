// getting the html elements
const decrebtn = document.getElementById("decrebtn");
const increbtn = document.getElementById("increbtn");
const resetbtn = document.getElementById("resetbtn");
const displayval = document.getElementById("displayval");

//for decrement button click
decrebtn.addEventListener("click", () => {
    const value = Number(displayval.innerText);
    if (value > 0) {
   displayval.innerText = value - 1;
    
} else {

    alert("Negative value not allowed");
}
});

// for increment button click
increbtn.addEventListener("click", () =>{
    const value = Number(displayval.innerText);
    if (value >= 10) {
        alert("10+ value are not allowed");
    } else {
        displayval.innerText = value + 1;
    }
});

//for reset button click 
resetbtn.addEventListener("click", () => {
    displayval.innerText = 0;
});