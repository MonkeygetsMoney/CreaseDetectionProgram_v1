let a = 0;

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

    a += 1;
    // speed = easeOut(a);
    // speed = constrain(speed, 0, 250);
    for (x=0; x<height/2; x++) {
        linecolor = lerpColor(topColor, bottomColor, x/250);
        stroke(linecolor);
        line(250, 250, 250+x, 500);
        line(250, 250, 500, 500-x);
        line(250, 250, 500, 250-x);
        line(250, 250, 500-x, 0);
        line(250, 250, 250-x, 0);
        line(250, 250, 0, 0+x);
        line(250, 250, 0, 250+x);
        line(250, 250, 0+x, 500);

    }
}