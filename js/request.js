// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

// loader toogle

const loaderToggle = (toggle) => {
    if (toggle) {
        overlay.classList.remove("hidden");
    } else {
        overlay.classList.add("hidden")
    }
}

// request promise

const getData = (resource) => {
    return new Promise((resolve, rejects) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            if (request.readyState < 4) {
                loaderToggle(true);
            } else if (request.readyState === 4 && request.status === 200) {
                loaderToggle(false);
                const data = JSON.parse(request.responseText)
                resolve(data.results);
            } else if (request.readyState === 4) {
                loaderToggle(false);
                rejects("Error !!!")
            }
        })

        request.open("GET", resource);
        request.send();
    })
}

// load 
const reload = () => {
    getData(API)
        .then((data) => {
            updateUI(data);
        })
        .catch((err) => {
            console.log(err)
        })
}

document.addEventListener("DOMContentLoaded", reload);
