let data = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
];

let indexCounter = 0;



function addListItem() {
    let list = document.getElementById("para");


    if(indexCounter < data.length) {
        let newItem = document.createElement("li");
        newItem.textContent = data[indexCounter];
        list.appendChild(newItem);
        indexCounter++;
    } else{
        alert("All items have been added.")
    }
}
