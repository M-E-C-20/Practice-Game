var canvas;
var canvasContext;
var ballX = 0;
var ballSpeedX = 20;

window.onload = function () {
    canvas = document.getElementById('game-canvas');
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);
};

// this controls the ball position
function moveEverything() {
    ballX = ballX + ballSpeedX;
    if (ballX == canvas.height - 20 || ballX == 0) {
        ballSpeedX = -ballSpeedX;
    }
}

// this draws the objects
function drawEverything() {
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorRect((canvas.width / 2) - 20, ballX, 20, 20, 'red');
    colorRect(0, canvas.height - 50, 100, 50, 'orange');
}

// this was used to reduce the number of lines of code in the drawEverything function
function colorRect(x, y, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(x, y, width, height);
}