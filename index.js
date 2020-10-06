const scoreBoard = $(".score")
const clouds = document.querySelectorAll(".hole")
const heads = document.querySelectorAll(".head")
const morty = $("#morty-play")
let lastCloud
let timeUp = false
let score = 0
// remise à zero du score
function reset() {
    score = 0
    scoreBoard.text(score)
}
// morty.click(reset)
function updateScore() {
    score++
    scoreBoard.text(score)
}

$(".hole1").click(updateScore)

function showHead () {
    const time = rndTime(600, 1000)
    const cloud = rndCloud(clouds)
    cloud.classList.add("up")
    setTimeout(() => {
       if(!timeUp) showHead()
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
morty.click(reset)
console.log(heads.length)
// scoreBoard.text(1)
showHead()

heads.forEach(rick => {
    rick.addEventListener("click", function(e) {
        if (!e.isTrusted) return
        updateScore()
    })
})
