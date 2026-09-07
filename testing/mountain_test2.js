//define variable for the motion speed of the gradient
let a = 0
let b = 0
let c = 0
let speed2 = 0
let num_lines;

function setup() {
    createCanvas(500, 500)

    topR = 255
    topG = 255
    topB = 255

    bottomR = 212
    bottomG = 120
    bottomB = 51
}

function draw() {
    const topColor = color(topR, topG, topB)
    const bottomColor = color(bottomR, bottomG, bottomB)

        a += 1;
        speed = motion(a)
        speed = constrain(speed, 0, 250);

        if (speed < 250){
            push();
            translate(250-speed, 0)
            const lineColor = lerpColor(bottomColor, topColor, speed/width)
            for (x = 0; x < height/2; x++){
                stroke(lineColor)
                line(x, 0, x, 500)
            }
            pop();
        }
        else{
            b += 1;
            speed2 = motion(b)
            speed2 = constrain(speed2, 0, 250);
            const lineColor = lerpColor(topColor, bottomColor, (speed - b) /250)
                for(let x = 0; x < height/2; x++) {
                    stroke(lineColor);
                    line(x, 0, x, 500);
                }
        }


}
function motion(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)))
}