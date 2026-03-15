const sounds = {

click1: new Audio("sounds/click1.mp3"),
click2: new Audio("sounds/click2.mp3")

}

const music = new Audio("sounds/music.mp3")

music.loop = true
music.volume = 0.4

document.body.addEventListener("click",()=>{

music.play()

},{once:true})

function playSound(name){

if(sounds[name]){

sounds[name].currentTime = 0
sounds[name].play()

}

}
