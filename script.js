const dino = document.querySelector('.dino')
const score = document.querySelector('.score')
const background = document.querySelector('.background')
var startTime = Date.now();


let isJumping = false
let position = 20
let isOver = false
setScore(isOver)
var interval = 0
function setScore() {
    interval = setInterval(function () {
        if (!isOver) {
            var elapsedTime = Date.now() - startTime;
            count = (Math.round(elapsedTime / 100))
            document.querySelector(".score").innerHTML = 'Score: ' + count;
        } else {
            clearInterval(interval)
            document.querySelector(".score").innerHTML = 'Score: ' + count;
        }
    }, 100);
}
function handleKeyUp(event) {
    if (event.keyCode === 32) {
        console.log('Your press space')
        !isJumping ? jump() : ''
    }
    if (event.keyCode === 38) {
        console.log('Your press up ')
        !isJumping ? jump() : ''
    }
}
function jump() {
    isJumping = true
    let upInterval = setInterval(() => {
        if (position >= 184) {
            clearInterval(upInterval)
            let downInterval = setInterval(() => {
                if (position <= 20) {
                    clearInterval(downInterval)
                    isJumping = false
                } else {
                    position -= 8
                    dino.style.bottom = position + 'px'
                }
            }, 20)
        } else {
            position += 20
            dino.style.bottom = position + 'px'
        }
    }, 20)
}
let count = 0

function creteCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = window.innerWidth - 64;
    let randomTime = Math.random() * 7500
    console.log(randomTime)
    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + 'px'
    background.appendChild(cactus);
    function moveCactus() {
        if (cactusPosition >= 0) {
            let moveInterval = setInterval(() => {
                if (cactusPosition <= -64) {
                    clearInterval(moveInterval)
                    background.removeChild(cactus)
                } else if (cactusPosition > 0 && cactusPosition < 74 && position < 64) {
                    clearInterval(moveInterval)
                    document.body.innerHTML = `
                        <div class="score" >Score: ${count}</div>
                        <h1 class='game-over' > Fim de jogo</h1>
                        <div class="center">
                            <button class='continue'  onclick="refresh()"></button>
                        </div>
                    `
                    isOver = true
                    localStorage.setItem('isOver', isOver)
                    function handleKeysGameOver(event) {
                        event.keyCode === 32 || event.keyCode === 38 ? refresh() : ''
                    }
                    document.addEventListener('keyup', handleKeysGameOver)
                } else {
                    cactusPosition -= 8
                    cactus.style.left = cactusPosition + 'px'
                }

            }, 20)
        }
    }
    moveCactus()
    setTimeout(() => {
        setTimeout(creteCactus, randomTime)
    }, 1)
}
creteCactus()
score.innerHTML = `Score: ${count}`
document.addEventListener('keyup', handleKeyUp)

function refresh() {
    window.location.reload()
}