// get the progress bar fill element
const progressBarFill = document.getElementById("progress-bar-fill");
// calculate and update the scroll progress
function updateScrollProgress() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;

    progressBarFill.style.width = scrollProgress + "%";
}

// update scroll progress on scroll event
window.addEventListener("scroll", updateScrollProgress)

