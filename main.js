// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the Ball Element
const bouncingBall = document.querySelector('.ball');
// Ball Variables
let ballXPos = 0
let ballYPos = 0
let ballXVel = 1
let ballYVel = 1

// Add x-Position Direction
let ballLeftRight = 0
    // Add y-Position Direction
let ballUpDown = 0

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');
// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;
// Add Direction Variable to Computer Paddle
let compPaddleUpDown = 0


// Get the player paddle element
const playerPaddle = document.querySelector('.player-paddle');
// The y-velocity of the computer paddle
let playerPaddleYPosition = 0;
let playerPaddleYVelocity = 1;

// Capture Player Keystroke
document.addEventListener('keydown', playerInput)

// Keep Score
challenge = 1
compScore = 0
playerScore = 0
const scoreAreaPlayer = document.querySelector('.score-area-player')
const scoreAreaComp = document.querySelector('.score-area-comp')

// Update the pong world
function update() {

    playerCompete()
}

function resetBall() {
    ballXPos = 350
    ballYPos = 250
    ballXVel = 0
    ballYVel = 0

}


function andGo() {
    ballXVel = 1
    ballYVel = 1
    if (ballLeftRight === 0) {
        ballMoveRight();
        ballMoveDown()
        console.log('ball move right', ballLeftRight)
    }
    if (ballLeftRight === 1) {
        ballMoveLeft();
        ballMoveUp()
        console.log('ball move left', ballLeftRight)
    }
    // setup key input to start ball moving again. Random aspect to decide which way to go Comp or Player.
    update()
}

function followBallComputer() {
    // Computer Paddle Follow - compPaddle Movement
    computerPaddleYPosition = ballYPos - 50
}

function followBallPlayer() {
    // Computer Paddle Follow - compPaddle Movement
    playerPaddleYPosition = ballYPos - 50
}

function playersAdvantage() {
    // if (Math.floor(Math.random) % 2 === 0) {
    //     computerPaddleYPosition = rando(ballYPos) + computerPaddleYPosition
    //     if (rando(42) % 2 === 0) {
    //         computerPaddleYPosition += 42;
    //         if (computerPaddleYPosition >= 700) {
    //             computerPaddleYPosition = 700
    //         }
    //         if (computerPaddleYPosition <= 0) { computerPaddleYPosition = 0 }

    //     } else {
    //         computerPaddleYPosition = rando(ballYPos) - computerPaddleYPosition;
    //         if (computerPaddleYPosition >= 700) {
    //             computerPaddleYPosition = 700
    //         }
    //         if (computerPaddleYPosition <= 0) { computerPaddleYPosition = 0 }
    //     }
    //     console.log(computerPaddleYPosition)

    // }
    computerPaddleYPosition = computerPaddleYPosition + Math.floor(Math.random() * computerPaddleYVelocity)
    if (computerPaddleYPosition > 600)
        computerPaddleYVelocity = 600
}
if (computerPaddleYPosition < 0) { computerPaddleYPosition = 0 }

function playerCompete() {
    // this is a demo where both sides play and neer a winner will be had.
    if (challenge === 1) {
        followBallPlayer()
        followBallComputer();
        ballMoveRight();
        ballMoveLeft();
        ballMoveUp();
        ballMoveDown();
        computerPaddle.style.top = `${computerPaddleYPosition}px`;
        playerPaddle.style.top = `${playerPaddleYPosition}px`;
        bouncingBall.style.left = `${ballXPos}px`
        bouncingBall.style.top = `${ballYPos}px`
        scoreAreaComp.innerHTML = compScore
        scoreAreaPlayer.innerHTML = playerScore
    }
    if (challenge === 2) {
        followBallComputer();
        ballMoveRight();
        ballMoveLeft();
        ballMoveUp();
        ballMoveDown();
        computerPaddle.style.top = `${computerPaddleYPosition}px`;
        playerPaddle.style.top = `${playerPaddleYPosition}px`;
        bouncingBall.style.left = `${ballXPos}px`
        bouncingBall.style.top = `${ballYPos}px`
        scoreAreaComp.innerHTML = compScore
        scoreAreaPlayer.innerHTML = playerScore
    }
    if (challenge === 3) {

        playersAdvantage();
        ballMoveRight();
        ballMoveLeft();
        ballMoveUp();
        ballMoveDown();
        computerPaddle.style.top = `${computerPaddleYPosition}px`;
        playerPaddle.style.top = `${playerPaddleYPosition}px`;
        bouncingBall.style.left = `${ballXPos}px`
        bouncingBall.style.top = `${ballYPos}px`
        scoreAreaComp.innerHTML = compScore
        scoreAreaPlayer.innerHTML = playerScore




    }
}

// function ballMoveRightOrigTemp() {
//     // Ball Moving right twoards comp paddle
//     if (ballLeftRight === 0) {
//         if (-1 < ballXPos < 659) {
//             ballXPos = ballXPos + ballXVel
//         }

//         //Ball hit Paddle (ALWAYS IN MIDDLE)
//         if (ballXPos >= 660) {
//             ballLeftRight = 1
//         }
//     }
// }



function ballMoveRight() {
    if (ballXPos === 680 && (computerPaddleYPosition <= ballYPos && ballYPos <= (computerPaddleYPosition + 100))) {
        ballLeftRight = 1
        ballMoveLeft();
    }

    //  Returning Ball from Player Paddle
    if (ballLeftRight === 0) {
        if (-1 < ballXPos < 680) {
            ballXPos = ballXPos + ballXVel
        }
        if (ballXPos >= 681) {
            ballLeftRight = 1
            playerScore += 1
            resetBall()
        }
    }
}

function ballMoveLeft() {
    if (ballXPos === 20 && (playerPaddleYPosition <= ballYPos && ballYPos <= (playerPaddleYPosition + 100))) {
        ballLeftRight = 0
        ballMoveRight();
    }

    //  Returning Ball from Computer Paddle
    if (ballLeftRight === 1) {
        if (680 > ballXPos > -1) {
            ballXPos = ballXPos - ballXVel
        }
        if (ballXPos <= -1) {
            // ballLeftRight = 0
            compScore += 1
            resetBall()
        }
    }
}

function ballMoveUp() {
    if (ballUpDown === 0) {
        if (-1 < ballYPos < 480) {
            ballYPos = ballYPos + ballYVel
        }
        if (ballYPos >= 480) {
            ballUpDown = 1
        }
    }
}

function ballMoveDown() {
    if (ballUpDown === 1) {
        if (480 > ballYPos > -1) {
            ballYPos = ballYPos - ballYVel
        }
        if (ballYPos <= -1) {
            ballUpDown = 0

        }
    }
}

function playerInput(playerPaddle) {
    switch (playerPaddle.key) {
        case "Down":
        case "ArrowDown":
            playerPaddleYPosition += 10
            break;
        case "Up":
        case "ArrowUp":
            playerPaddleYPosition -= 10
            break;
        case "Enter":
            andGo()
            break;
        case "1":
            challenge = 1
            break;
        case "2":
            challenge = 2
            break;
        case "3":
            challenge = 3
            break;
        case "4":
            challenge = 4
            break;
        default:
            break;
    }




}

function rando(number) {
    return Math.floor(Math.random() * number)

}




// Call the update() function every 35ms
setInterval(update, 1);