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
// Add Direction Variable to Computer Paddle
let playPaddleUpDown = 0

function andGo() {


}

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

    // Computer Paddle Follow - compPaddle Movement
    computerPaddleYPosition = ballYPos - 50

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;



    // Ball Movement x-position
    ballMoveRight();

    ballMoveLeft();


    // Ball Movement y-position
    if (ballUpDown === 0) {
        if (-1 < ballYPos < 480) {
            ballYPos = ballYPos + ballYVel
        }
        if (ballYPos >= 480) {
            ballUpDown = 1
        }
    }
    if (ballUpDown === 1) {
        if (480 > ballYPos > -1) {
            ballYPos = ballYPos - ballYVel
        }
        if (ballYPos <= -1) {
            ballUpDown = 0

        }
    }

    // Interactive Paddle





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



// Call the update() function every 35ms
setInterval(update, 1);