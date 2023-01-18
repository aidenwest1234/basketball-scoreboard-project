let homescorebtnone = document.getElementById('home-score-btn-1')
let homescoreEl = document.getElementById("score")
let score = 0
let score2 = 0

function increasehomescoreone() {
    score += 1
    homescoreEl.textContent = score
}

let homescorebtntwo = document.getElementById('home-score-btn-2')

function increasehomescoretwo() {
    score += 2
    homescoreEl.textContent = score   
}

let homescorebtnthree = document.getElementById('home-score-btn-3')

function increasehomescorethree() {
    score += 3
    homescoreEl.textContent = score   
}



let guestscorebtnone = document.getElementById('guest-score-btn-1')
let guestscoreEl = document.getElementById("score2")

function increaseguestscoreone() {
    score2 += 1
    guestscoreEl.textContent = score2
}

let guestscorebtntwo = document.getElementById('guest-score-btn-2')

function increaseguestscoretwo() {
    score2 += 2
    guestscoreEl.textContent = score2   
}

let guestscorebtnthree = document.getElementById('guest-score-btn-3')

function increaseguestscorethree() {
    score2 += 3
    guestscoreEl.textContent = score2
}