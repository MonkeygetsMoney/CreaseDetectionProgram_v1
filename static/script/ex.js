let x = 0;
//let y = 0;
let z =0;
let a = 0;
let speed;
let b = 0;

function setup() {
    createCanvas(500, 500);
    background(255);

    startR = 255;
    startG = 255;
    startB = 255;

    endR = 212;
    endG = 120;
    endB = 51;

    //framesRate(1);
}

function draw() {

    const topColor = color(startR, startG, startB);
    const bottomColor = color(endR, endG, endB);

    a += 1
    speed = easeOut(a)
    speed = constrain(speed, 0, 500)
    if (speed < 500) {
        linecolor = lerpColor(topColor, bottomColor, speed/250)
            stroke(linecolor)
            line(250-a, 0, 250-a, 500)
    
    }
    // else {
    //     b += 1
    //     b = constrain(b, 0, 250)
    //     linecolor = lerpColor(topColor, topColor, 0)
    //         stroke('white')
    //         line(250-b, 0, 250-b, 500)
    // }

}

function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
    //return 1 - Math.pow(1-x, 3);
}
