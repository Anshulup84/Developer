function checkValidURL(input) {
    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\S]+\.[a-zA-Z]+$/;
    if (regex.test(input)) {
        console.log("Valid URL");

    }  else {

        console.log("Invalid URL");
    }
}


const input1 = "https://www.google.com";

const input2 = "http://regxr.com";

const input3 = "ftp://pwskill.com";

const input4 = "https://facebook";

const input5 = "http://1234.com";


checkValidURL(input1);

checkValidURL(input2);

checkValidURL(input3);

checkValidURL(input4);

checkValidURL(input5);