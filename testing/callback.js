//define variable for the motion speed of the gradient
let a = 0;
let b = 0;
let c = 0;
let x = 0;

function setup() {
    createCanvas(500, 500);

    topR = 255;
    topG = 255;
    topB = 255;

    bottomR = 191;
    bottomG = 148;
    bottomB = 29;
}

function draw() {
    const topColor = color(topR, topG, topB);
    const bottomColor = color(bottomR, bottomG, bottomB);

    x += 1;
    x = constrain(x, 0, 250);
    half(x, topColor, bottomColor, secondhalf);

}

function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)))
}

function half(a, firstColor, bottomColor, callback) {
        color = lerpColor(firstColor, bottomColor, a/250);
        stroke(color);
        line = line(a, 0, a, 500);

    if(a == 250) {
        b += 1
        callback(b, firstColor, bottomColor)
    }
}

function secondhalf(a, firstColor, bottomColor) {
        a += 1
        a = constrain(a, 0, 250)
        color = lerpColor(firstColor, bottomColor, a/250);
        stroke(color);
        line = line(500-a, 0, 500-a, 500);
}