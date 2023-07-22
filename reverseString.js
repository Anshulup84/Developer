function reverseString(string) {

    setTimeout(function() {
        let reversed = string.split("").reverse().join("");
        console.log("Reversed string:", reversed);
    }, 2000);
}

let input = "PW Skills";
reverseString(input);