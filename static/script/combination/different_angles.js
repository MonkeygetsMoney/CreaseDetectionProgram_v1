// draw lines at different angles
// think of it as triangle where a and b is the edges and c is the diagonal line

let a = 0;
let x1 = 0;
let x2 = 500;
let y1 = 0;
let y2 = 0;

function setup() {
    createCanvas(500, 500);
    background(255);

    startR = 255;
    startG = 255;
    startB = 255;

    endR = 212;
    endG = 120;
    endB = 51;

}

function draw() {
    const topColor = color(startR, startG, startB);
    const bottomColor = color(endR, endG, endB);

    a += (22.5/250); // 45 degrees for 250 times
    speed = easeOut(a);
    speed = constrain(speed, 0, 250);
    linecolor = lerpColor(topColor, bottomColor, a/45);
    stroke(linecolor);
     
    if (a < 22.5) {
        y1 = y_coordinate(500, a-1);
        line(x1, y1, x2, y2);
        console.log(y_coordinate(500, a))

    }

}


function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
}

// define function to get height b (coordinate)
// on the edges of triangle will remain constant
function y_coordinate(length, angle) {
    let diagonal_len = 0;
    let b_square = 0
    let b = 0;

    angle = angle * (PI/180);
    diagonal_len = Math.pow((length / Math.cos(angle)), 2);
    b_square = diagonal_len - Math.pow(length, 2);
    b = Math.sqrt(b_square);
    //b = Math.abs(b_square);

    return b;
}
