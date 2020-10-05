const scoreBoard = $(".score")
const clouds = document.querySelectorAll(".hole")
const heads = document.querySelectorAll(".head")
const morty = $("#morty-play")
let timeUp = false
let score = 0
// remise à zero du score
function reset() {
    scoreBoard.text(0)

}
morty.click(reset)

console.log(heads.length)
scoreBoard.text(1)

