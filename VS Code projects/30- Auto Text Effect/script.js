const text1 =document.getElementById("text1")
const text2 =document.getElementById("text2")
const text3 =document.getElementById("text3")
const text4 =document.getElementById("text4")
const speedEl =document.getElementById("speed")

const textr = 'Hallo!!!'
const texte = 'Auto Text Effect Page'
const texta = 'Oluwasegun Gerald'
const textl = 'Udemy 50-in-50'

let idx = 1

let speed = 300 / speedEl.value

writeText()

function writeText(){
    text1.innerText = textr.slice(0, idx)
    text2.innerText = texte.slice(0, idx)
    text3.innerText = texta.slice(0, idx)
    text4.innerText = textl.slice(0, idx)
   
    idx++

    if(idx >+ texte.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})
