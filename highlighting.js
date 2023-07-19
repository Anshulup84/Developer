const paragraph = document.getElementById("paragraph");
const words = paragraph.innerText.split(" ");

for( let i = 0; i<words.length; i++) {
    if (words[i].length > 8) {
        let span = document.createElement("span");
        span.classList.add("highlight");
        span.textContent = words[i];
        words[i] = span.outerHTML;
    }
}

paragraph.innerHTML = words.join(" ");