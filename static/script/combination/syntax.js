// this file uses to to test out different Javascript syntax to draw combination in horizontal way

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { user: 'Toby' };
//         callback(data);
//     }, 1000);
// }

// fetchData((result) => {
//     console.log('This is my first callback function and my name is:', result.user);
// });

// console.log('Hello')

let a = 0;
let data = 0;
let b = 1;

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
    frameRate(10)
    a += 1;
    speed = easeOut(a);
    speed = constrain(speed, 0, 250);
        linecolor = lerpColor(topColor, bottomColor, speed/250);
        stroke(linecolor);

        //display frame count
        if (frameCount <= 120) {
            data = frameCount;
            console.log(data);
        }
        // for top left square and bottom right square
        // line(250, 255, 255, 255);

        // setTimeout(() => {
        //     line(250, 260, 260, 260);
        // }, 1000);

        // setTimeout(() => {
        //     line(250, 275, 275, 275);
        // }, 1500);

        // setTimeout(() => {
        //     line(250, 325, 325, 325);
        // }, 2000);
        //instead of using settimeout, we can depend on framecount and framerate

        if (frameCount == b) {
            line(250, 250+b, 250+b, 250+b);
            b += 1;
        }

        // the gradient still look static after using different method
        // I observed that this is due to geometric nature of the line as it's too straight which doesn't look natural
        // need to look into the nature of gradient as a whole
}


function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
}
