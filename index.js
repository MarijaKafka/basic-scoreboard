let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homePoints = 0
let guestPoints = 0


function add1(){
    homePoints += 1
    homeEl.textContent = homePoints
}

function add2(){
    homePoints += 2
    homeEl.textContent = homePoints
}

function add3() {
    homePoints += 3
    homeEl.textContent = homePoints
}

function addg1(){
    guestPoints += 1
    guestEl.textContent = guestPoints
}

function addg2(){
    guestPoints += 2
    guestEl.textContent = guestPoints
}

function addg3(){
    guestPoints += 3
    guestEl.textContent = guestPoints
}

function reset() {
    homePoints = 0
    guestPoints = 0
    homeEl.textContent = homePoints
    guestEl.textContent = guestPoints
}