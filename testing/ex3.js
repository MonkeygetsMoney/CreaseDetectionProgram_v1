//define frame speed
let a = 0;
let b = 0;
let speed = 0;

function setup() {
    createCanvas(500, 500);
    background(255);

    startR = 255;
    startG = 255;
    startB = 255;

    endR = 30;
    endG = 148;
    endB = 61;

    //framesRate(1);
}

function draw() {

    const topColor = color(startR, startG, startB);
    const bottomColor = color(endR, endG, endB);

    if (a<250){
        a+=1;
        speed = easeOut(a);
        speed = constrain(speed, 0, 250)
        linecolor = lerpColor(topColor, bottomColor, a/250);
        stroke(linecolor)
        line(0, a, 250, a)
    }
    else{
        a += 0;
    }

}

function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
}
