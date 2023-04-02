const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')


// get data from LocalStorege

const modeLocal = localStorage.getItem("mode");

if(modeLocal) {
    toggleFunc();
}

// toggle function for change mode color
function toggleFunc() {
    lightBtn.classList.toggle("hidden");
    darkBtn.classList.toggle("hidden");
    body.classList.toggle("dark-mode");
}

lightBtn.addEventListener("click", () => {
    toggleFunc();
    localStorage.setItem("mode", "");
})

darkBtn.addEventListener("click", () => {
    toggleFunc();
    localStorage.setItem("mode", "dark-mode");
})
