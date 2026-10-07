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
    speed = easeOut(a);
    speed = constrain(speed, 0, 250);
        linecolor = lerpColor(topColor, bottomColor, speed/250);
        stroke(linecolor);
        
        // for top left square and bottom right square
        line(250, 250+speed, 250+speed, 250+speed);
        line(250, 250-speed, 250-speed, 250-speed);
        line(250+speed, 250, 250+speed, 250+speed);
        line(250-speed, 250, 250-speed, 250-speed);

        // for top right square and bottom right square
        line(250, 250-speed, 250+speed, 250-speed);
        line(250, 250+speed, 250-speed, 250+speed);
        line(250-speed, 250, 250-speed, 250+speed);
        line(250+speed, 250, 250+speed, 250-speed);
    }


function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
}