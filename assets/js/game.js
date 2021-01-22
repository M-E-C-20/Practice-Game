var canvas;
var canvasContext;

window.onload = function () {
    console.log('hi');
    canvas = document.getElementById('game-canvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(100, 200, 60, 60);
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(200, 200, 60, 30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(400 - 30, 300 - 30, 60, 60);
};