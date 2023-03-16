var t = Math.floor((Math.random()*100)+1)
var count = 0
var inputEl = document.getElementById('b')
var attemptsEl = document.getElementById('a')
var resultEl = document.getElementById('result')
var text = 'Deneme Sayisi : '

function Check() {
    var i = Number(inputEl.value)

    if (t > i) {
        count++
        attemptsEl.innerHTML =text+count
        resultEl.innerHTML = 'Biraz yukari cik az söyledin!'
    }
    else if (t < i) {
        count++
        attemptsEl.innerHTML =text+count
        resultEl.innerHTML = 'In biraz cok dedin!'
    }
    else {
        count++
        attemptsEl.innerHTML =text+count
        resultEl.innerHTML = 'Aferin la bildin!'
    }
}

