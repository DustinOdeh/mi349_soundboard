// JavaScript source code
var buttonElement = document.getElementById('soundboard')
var buttonElement2 = document.getElementById('soundboard2')
var buttonElement3 = document.getElementById('soundboard3')
var audio1 = new Audio()
audio1.src = 'bomb.wav'
var audio2 = new Audio()
audio2.src = 'bowling.wav'
var audio3 = new Audio()
audio3.src = 'cough.wav'

buttonElement.onclick = function () {
    audio1.play()
    console.log('Clicked 1')
}

buttonElement.onmouseenter = function () {
    audio1.play()
    console.log('Hovering 1')
}



buttonElement2.onclick = function () {
    audio2.play()
    console.log('Clicked 2')
}

buttonElement2.onmouseenter = function () {
    audio2.play()
    console.log('Hovering 2')
}



buttonElement3.onclick = function () {
    audio3.play()
    console.log('Clicked 3')
}

buttonElement3.onmouseenter = function () {
    audio3.play()
    console.log('Hovering 3')
}