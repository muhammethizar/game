var t = Math.floor((Math.random()*100)+1)
var count=0

function Check(){

    var i = Number(document.getElementById('b').value)

    if(t>i){

        count++
        document.getElementById('a').innerHTML=count
        document.getElementById('result').innerHTML='Please guess another number that is bigger than your current guess!'

    }

    else if(t<i){

        count++
        document.getElementById('a').innerHTML=count
        document.getElementById('result').innerHTML='Please guess another number that is smaller than your current guess!'

    }

    else{

        count++
        document.getElementById('a').innerHTML=count
        document.getElementById('result').innerHTML='Congrats!!! You found the Number!'

    }

}