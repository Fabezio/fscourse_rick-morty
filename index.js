const clouds = document.querySelectorAll(".hole")
const heads = document.querySelectorAll(".head")
const scoreBoard = document.querySelector(".score")
const morty = document.querySelector("#morty-play")
let lastCloud
let timeUp = false
let score = 0
// remise à zero du score
function resetScore() {
    score = 0
    scoreBoard.textContent = score
}
// morty.click(resetScore)
function updateScore() {
    score++
    scoreBoard.textContent = score
}

// $(".hole1").click(updateScore)

function showHead1 () {
    const time = rndTime(1200, 2000)
    const cloud = rndCloud(clouds)
    cloud.classList.add("up")
    setTimeout(() => {
       if(!timeUp) showHead1()
       cloud.classList.remove("up")
    }, time)
}
function showHead2 () {
    const time = rndTime(600, 1000)
    const cloud = rndCloud(clouds)
    cloud.classList.add("up")
    setTimeout(() => {
       if(!timeUp) showHead2()
       cloud.classList.remove("up")
    }, time)
}
function showHead3 () {
    const time = rndTime(300, 2000)
    const cloud = rndCloud(clouds)
    cloud.classList.add("up")
    setTimeout(() => {
       if(!timeUp) showHead3()
       cloud.classList.remove("up")
    }, time)
}

function rndTime(min, max)  {
    return Math.round(Math.random() * (max-min) + min)
}
function rndCloud(clouds) {
    const thisCloudIndex = Math.floor(Math.random() * clouds.length) 
    const thisCloud = clouds[thisCloudIndex]
    if(thisCloud === lastCloud) return rndCloud(clouds)
    lastCloud = thisCloud
    return thisCloud
    
}
// morty.click(resetScore)
// console.log(heads.length)
// scoreBoard.text(1)


function hitRick(event) {
    if (!event.isTrusted) return
    updateScore()
    this.classList.remove("up")
}
heads.forEach(rick => {
    rick.addEventListener("click", hitRick)
})

function startGame1 () {
    resetScore()
    timeUp = false
    showHead1()
    setTimeout(()=> {
        timeUp = true
        scoreBoard.textContent += " you did it!"
        setTimeout(()=> {
            scoreBoard.textContent = "END"
        }, 2000)
    }, 10000)


}
function startGame2 () {
    resetScore()
    timeUp = false
    showHead2()
    setTimeout(()=> {
        timeUp = true
        scoreBoard.textContent += " you did it!"
        setTimeout(()=> {
            scoreBoard.textContent = "END"
        }, 2000)
    }, 10000)


}
function startGame3 () {
    resetScore()
    timeUp = false
    showHead3()
    setTimeout(()=> {
        timeUp = true
        scoreBoard.textContent += " you did it!"
        setTimeout(()=> {
            scoreBoard.textContent = "END"
        }, 2000)
    }, 10000)




}
// startGame1()
const speed = 50
let i = 0
const nov = "Noob"
let j = 0
const app = "Apprentice"
let k = 0
const exp = "Expert"

function typeWriter1() {
    if (i< nov.length) {
        document.getElementById("demo1").innerHTML += nov.charAt(i)
        i++
        setTimeout(typeWriter1, speed)
    }
}

function typeWriter2() {
    if (j< app.length) {
        document.getElementById("demo2").innerHTML += app.charAt(j)
        j++
        setTimeout(typeWriter2, speed)
    }
}

function typeWriter3() {
    if (k< exp.length) {
        document.getElementById("demo3").innerHTML += exp.charAt(k)
        k++
        setTimeout(typeWriter3, speed)
    }
}
function hideDashBoard() {
    for (let i = 1; i < 3; i++) {
        document.getElementById("demo"+i).addEventListener("click", function() {
            document.getElementById("demo1").style.display = "none"
            document.getElementById("demo2").style.display = "none"
            document.getElementById("demo3").style.display = "none"
        })
    }
}
morty.addEventListener("click", function() {
    typeWriter1()
    typeWriter2()
    typeWriter3()
    hideDashBoard()
})