function countvowel(str){
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelcount = 0 ;

    const lowercasestr = str.toLowerCase();

    for(let i = 0; i < lowercasestr.length; i++) {
        if (vowels.includes(lowercasestr[i])) {
            vowelcount++;
        }
    }
    return vowelcount;
}

const userinput = prompt("Enter a string");
const vowelcount = countvowel(userinput);
console.log(`Numbers of vowels: ${vowelcount}`)
alert(`Numbers of vowels: ${vowelcount}`)