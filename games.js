function startBlockBlast(){

const area=document.getElementById("gameArea")

area.innerHTML=""

for(let r=0;r<6;r++){

for(let c=0;c<8;c++){

let block=document.createElement("div")

block.className="block"

block.style.left=(c*50)+"px"
block.style.top=(r*50)+"px"

block.onclick=()=>{

updateScore(2)

playSound("click2")

block.remove()

}

area.appendChild(block)

}

}

}

function startBubbleGame(){

const area=document.getElementById("gameArea")

area.innerHTML=""

for(let i=0;i<20;i++){

let bubble=document.createElement("div")

bubble.className="bubble"

bubble.style.left=Math.random()*90+"%"
bubble.style.top=Math.random()*90+"%"

bubble.onclick=()=>{

updateScore(3)

playSound("click2")

bubble.remove()

}

area.appendChild(bubble)

}

}

function spawnBall(){

let ball=document.createElement("div")

ball.className="ball"

ball.style.left="100px"
ball.style.top="100px"

document.getElementById("sandboxArea").appendChild(ball)

}

function spawnLight(){

let light=document.createElement("div")

light.className="light"

light.onclick=()=>{

light.classList.toggle("on")

}

document.getElementById("sandboxArea").appendChild(light)

}

function spawnSwitch(){

let btn=document.createElement("button")

btn.innerText="Switch"

btn.onclick=()=>{

spawnBall()
spawnLight()

}

document.getElementById("sandboxArea").appendChild(btn)

}
