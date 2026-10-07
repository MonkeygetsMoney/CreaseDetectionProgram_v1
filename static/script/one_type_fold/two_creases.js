//define frame speed
let a = 0;
let b = 0;
let c = 0;
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

    if (a<250) {
        a += 2;
        speed = easeOut(a)
        speed = constrain(speed, 0, 250)
        for (x = 0; x < height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, a/250);
            stroke(linecolor);
            line(speed, 0, speed, 500);
        }

        for (x = 0; x < height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, a/250);
            stroke(linecolor);
            line(500-speed, 0, 500-speed, 500);
            //use 'a' for moving the gradient
            //use 'x' would print a stationary gradient
        }
    }
    else if (b<250) {
        b+=2;
        speed = easeOut(b);
        speed = constrain(speed, 0, 250)
        for (x = 0; x<height/2; x++) {
                linecolor = lerpColor(topColor, bottomColor, (x-speed)/250);
                stroke(linecolor);
                line(x, 0, x, 500);
                //use 'x' to have a stationary gradient
                // while use x-b to make every line have value of 0 or becoming white
            }

        for (x = 0; x<height/2; x++) {
                linecolor = lerpColor(topColor, bottomColor, (x-speed)/250);
                stroke(linecolor);
                line(500-x, 0, 500-x, 500);
            }
    }

//second fold
    else if (c < 250) {
        c += 2;
        speed = easeOut(c)
        speed = constrain(speed, 0, 250)
        for (x = 0; x<height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, speed/250);
            stroke(linecolor);
            line(0, speed, 250, speed);
        }

        for (x = 0; x<height/2; x++) {
        linecolor = lerpColor(topColor, bottomColor, speed/250);
        stroke(linecolor);
        line(0, 500-speed, 250, 500-speed);
            //use 'a' for moving the gradient
            //use 'x' would print a stationary gradient
        }
    }

}

function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
}
