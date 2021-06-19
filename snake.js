window.onload = function () {
    canv = document.getElementById('snakeboard');
    ctx = canv.getContext('2d');
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 15);
}

let x = 0;
let y = 0;
let sx = 10;      //snake
let sy = 10;      //snake
let fx = 15;      //food
let fy = 15;      //food
let trail = [];   //food container
let tail = 5;     //length of the snake
let side = 20;    //in px


function keyPush(event) {
    switch (event.key) {
        case "ArrowLeft":
            x = -1;
            y = 0;
            break;
        case "ArrowUp":
            x = 0;
            y = -1;
            break;
        case "ArrowRight":
            x = 1;
            y = 0;
            break;
        case "ArrowDown":
            x = 0;
            y = 1;
            break;
    }
}

function game() {
    sx += x;
    sy += y;

    if (sx < 0) {

        sx = side - 1;
    }
    if (sx > side - 1) {
        sx = 0;
    }

    if (sy < 0) {
        sy = side - 1;
    }
    if (sy > side - 1) {
        sy = 0;
    }

    ctx.fillStyle = "black";   // backgraund color
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "green";  // snake
    for (let i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * side, trail[i].y * side, side - 2, side - 2);
        if (trail[i].x === sx && trail[i].y === sy) {
            tail = 5;
        }
    }

    trail.push({x: sx, y: sy});
    while (trail.length > tail) {
        trail.shift();
    }

    ctx.fillStyle = "red";  //food
    if (fx === sx && fy === sy) {
        tail++;
        fx = Math.floor(Math.random() * side);
        fy = Math.floor(Math.random() * side);
    }

    ctx.fillRect(fx * side, fy * side, side - 2, side - 2);
}
