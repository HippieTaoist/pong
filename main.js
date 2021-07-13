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

let keyStroke


// Get the player paddle element
const playerPaddle = document.querySelector('.player-paddle');
// The y-velocity of the computer paddle
let playerPaddleYPosition = 0;
let playerPaddleYVelocity = 1;


document.addEventListener('keydown', playerPaddleMove)
    // Might Not Need
    // // Add Direction Variable to Computer Paddle
    // let playPaddleUpDown = 0



// Update the pong world
function update() {


    // // Computer Paddle Auto compPaddleUpDown Movement - COMPLETE
    // if (compPaddleUpDown === 0) {
    //     if (-1 < computerPaddleYPosition < 400) {
    //         // Update the computer paddle's position
    //         computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;
    //     }
    //     if (computerPaddleYPosition >= 400) {
    //         compPaddleUpDown = 1
    //     }
    // }
    // if (compPaddleUpDown === 1) {
    //     if (400 > computerPaddleYPosition > -1) {
    //         computerPaddleYPosition = computerPaddleYPosition - computerPaddleYVelocity
    //     }
    //     if (computerPaddleYPosition <= -1) {
    //         compPaddleUpDown = 0
    //     }
    // }

    followBall();

    // Apply the Computer Paddle y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    // Apply the Computer Paddle y-position 
    playerPaddle.style.top = `${playerPaddleYPosition}px`;

    // Ball Movement x-position
    ballMoveRight();

    ballMoveLeft();


    // Ball Movement y-position
    ballMoveUp();

    ballMoveDown();

    // Interactive Paddle y-position
    // playerPaddleMove();




    // Apply Ball x-position
    bouncingBall.style.left = `${ballXPos}px`

    // Apply Ball y-position
    bouncingBall.style.top = `${ballYPos}px`
}

function resetBall() {
    ballXPos = 350
    ballYPos = 250
    ballXVel = 0
    ballYVel = 0

}

// function andGo() {
//     // setup key input to start ball moving again. Random aspect to decide which way to go Comp or Player.
// }

function followBall() {
    // Computer Paddle Follow - compPaddle Movement
    computerPaddleYPosition = ballYPos - 50
}

function ballMoveRight() {
    // Ball Moving right twoards comp paddle
    if (ballLeftRight === 0) {
        if (-1 < ballXPos < 660) {
            ballXPos = ballXPos + ballXVel
        }

        //Ball hit Paddle (ALWAYS IN MIDDLE)
        if (ballXPos >= 660) {
            ballLeftRight = 1
        }
    }
}

function ballMoveLeft() {
    //  Returning Ball from Computer Paddle
    if (ballLeftRight === 1) {
        if (680 > ballXPos > -1) {
            ballXPos = ballXPos - ballXVel
        }
        if (ballXPos <= -1) {
            ballLeftRight = 0
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

function playerPaddleMove(playerPaddle) {
    console.log(playerPaddle)
    switch (playerPaddle.key) {
        case "Down":
        case "ArrowDown":
            playerPaddleYPosition += 10
            break;
        case "Up":
        case "ArrowUp":
            playerPaddleYPosition -= 10
            break;
        default:
            break;
    }




}




// Call the update() function every 35ms
setInterval(update, 1);