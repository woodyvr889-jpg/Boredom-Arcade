let score = 0
let multiplier = 1
let autoMode = false

const scoreText = document.getElementById("score")

function updateScore(n){

score += n
scoreText.innerText = score

}

function showScreen(name){

document.querySelectorAll(".screen").forEach(s=>{
s.style.display="none"
})

document.getElementById(name).style.display="block"

}

function spawnCookie(){

playSound("click1")

let cookie = document.createElement("div")

cookie.innerText="🍪"
cookie.className="cookie"

cookie.style.left=Math.random()*80+"%"
cookie.style.top=Math.random()*80+"%"

cookie.onclick = () => {

updateScore(multiplier)

playSound("click2")

cookie.remove()

}

document.getElementById("gameArea").appendChild(cookie)

}

function buyUpgrade(type){

if(type==="double" && score>=10){

score-=10
multiplier=2
updateScore(0)

}

if(type==="auto" && score>=25){

score-=25
updateScore(0)

autoMode=true

setInterval(()=>{

if(autoMode) spawnCookie()

},2000)

}

if(type==="mega" && score>=50){

score-=50
multiplier=5
updateScore(0)

}

}

function imBored(){

let r=Math.floor(Math.random()*4)

if(r===0) startBubbleGame()
if(r===1) startBlockBlast()
if(r===2) spawnCookie()
if(r===3) spawnBall()

}
