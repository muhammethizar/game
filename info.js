var t = Math.floor((Math.random()*100)+1)
var count = 0
var inputEl = document.getElementById('b')
var attemptsEl = document.getElementById('a')
var resultEl = document.getElementById('result')

function Check() {
    var i = Number(inputEl.value)

    if (t > i) {
        count++
        attemptsEl.innerHTML = count
        resultEl.innerHTML = 'Please guess another number that is bigger than your current guess!'
    }
    else if (t < i) {
        count++
        attemptsEl.innerHTML = count
        resultEl.innerHTML = 'Please guess another number that is smaller than your current guess!'
    }
    else {
        count++
        attemptsEl.innerHTML = count
        resultEl.innerHTML = 'Congrats!!! You found the Number!'
    }
}
// Before:
resultEl.innerHTML = 'Please guess another number that is bigger than your current guess!'
// After:
resultEl.innerHTML = `Please guess another number that is bigger than ${i}!`
