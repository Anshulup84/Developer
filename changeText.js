  const heading = document.getElementById("heading");
    const button = document.getElementById("click");

    button.addEventListener("click", function() {
        if(heading.innerText === "The most affordable learning platform"){
         heading.innerText = "PW Skills";
        } else {
            heading.textContent = "The most affordable learning platform"
        } 
    });