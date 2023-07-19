
const form = document.getElementById("login")
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");
const emailinput = document.getElementById("email")
const passwordinput = document.getElementById("password")

form.addEventListener("submit", function(event) {
    event.preventDefault();

 // retrieve the input value
    
 const email = emailinput.value;
const password = passwordinput.value;


   // validate email and password
if (email.includes("@") && password.length >=8) {
    // vaild input
errorMessage.style.display = "none";
successMessage.style.display = "block";
} else {
    successMessage.style.display = "none";
    errorMessage.style.display = "block"
}
});



  