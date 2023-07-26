function countWords(str) {
    const words = str.split(" ");
    const map = new Map();

    for (let word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }
    return map;
}

const sentence = "I am Anshul. I am learnimg Javascript"

console.log(countWords(sentence));