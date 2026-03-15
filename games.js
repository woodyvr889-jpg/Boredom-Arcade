function makeDraggable(el){

let offsetX, offsetY

el.addEventListener("pointerdown", e=>{

offsetX = e.offsetX
offsetY = e.offsetY

function move(e){

el.style.left = (e.pageX - offsetX) + "px"
el.style.top = (e.pageY - offsetY) + "px"

}

function stop(){

document.removeEventListener("pointermove",move)
document.removeEventListener("pointerup",stop)

}

document.addEventListener("pointermove",move)
document.addEventListener("pointerup",stop)

})

}

function spawnBall(){

let ball=document.createElement("div")

ball.className="ball"

ball.style.left="100px"
ball.style.top="100px"

makeDraggable(ball)

document.getElementById("sandboxArea").appendChild(ball)

}

function spawnLight(){

let light=document.createElement("div")

light.className="light"

light.style.left="120px"
light.style.top="120px"

light.onclick=()=>{

light.classList.toggle("on")

}

makeDraggable(light)

document.getElementById("sandboxArea").appendChild(light)

}

function spawnSwitch(){

let btn=document.createElement("button")

btn.innerText="Switch"

btn.style.position="absolute"
btn.style.left="140px"
btn.style.top="140px"

btn.onclick=()=>{

spawnBall()
spawnLight()

}

makeDraggable(btn)

document.getElementById("sandboxArea").appendChild(btn)

}
