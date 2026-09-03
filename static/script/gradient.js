let x = 0;
//let y = 0;
let z =0;
let speed;

function setup() {
    createCanvas(500, 500);

    startR = 150;
    startG = 150;
    startB = 150;

    endR = 255;
    endG = 255;
    endB = 255;

    //framesRate(1);
}

function draw() {
    background(255);

    const topColor = color(startR, startG, startB);
    const bottomColor = color(endR, endG, endB);

    x += 3;
    speed = easeOut(x);
    speed = constrain(speed, 0, 250);
    //speed variable here is for the change in translation
    //as well as the change in grayscale
    
    if (speed < 250) {
        push();
        translate(speed-250, 0);
            const lineColor = lerpColor(bottomColor, topColor, speed / width);
            for (let y = 0; y < height/2; y++) {
                stroke(lineColor);
                line(y, 0, y, height);
            }
        pop();

        push();
        translate(250-speed, 0);
            change = -speed;
            const lineColor2 = lerpColor(bottomColor, topColor, speed / width);
            for (let y = height/2; y < height; y++) {
                stroke(lineColor2)
                line(y, 0, y, height);
            }
        pop();
    }
    else {
        z += 4;
        speed2 = easeOut(z);
        speed2 = constrain(speed2, 0, 250);
        const lineColor = lerpColor(bottomColor, topColor, (speed - speed2) / width);
            for (let y = 0; y < 250; y++) {
                stroke(lineColor);
                line(y, 0, y, height);
            }
        
        const lineColor2 = lerpColor(bottomColor, topColor, (speed - speed2) / width);
            for (let y = height/2; y < height; y++) {
                stroke(lineColor2)
                line(y, 0, y, height);
            }
    }

}

function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
    //return 1 - Math.pow(1-x, 3);
}

function colorLine(speed) {
    if (speed < 250) {
        y += 4;
        const lineColor = lerpColor(bottomColor, topColor, y / width);
        return lineColor;

    }
    else {
        y -= 4;
        const lineColor = lerpColor(bottomColor, topColor, y / width);
        return lineColor;
    }
}