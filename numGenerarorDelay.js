function generateRandomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;
    let coundownInterval;

    console.log("Generating random number in " + remainingTime + " seconds...");

    coundownInterval = setInterval(function() {
        remainingTime--;
        console.log("Time remaining: " + remainingTime + " seconds...");

        if(remainingTime === 0) {
            clearInterval(coundownInterval);
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            console.log("Random numbe generated:", randomNumber);
        }
    },1000);
}


let delayInSeconds = 3;

generateRandomNumberWithDelay(delayInSeconds)