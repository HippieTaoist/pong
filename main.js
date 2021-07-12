// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Add Directoin Variable
let upDown = 0

// Update the pong world
function update() {

    if (upDown === 0) {
        if (-1 < computerPaddleYPosition < 400) {
            // Update the computer paddle's position
            computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;
        }
        if (computerPaddleYPosition >= 400) {
            upDown = 1
        }
    }
    if (upDown === 1) {
        if (400 > computerPaddleYPosition > -1) {
            computerPaddleYPosition = computerPaddleYPosition - computerPaddleYVelocity
        }
        if (computerPaddleYPosition <= -1) {
            upDown = 0
        }
    }

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
}






// Call the update() function every 35ms
setInterval(update, 5);