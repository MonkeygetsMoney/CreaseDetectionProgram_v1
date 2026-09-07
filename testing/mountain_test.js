//define variable for the motion speed of the gradient
let a = 0
let b = 0
let c = 0
let speed2 = 0
let num_lines = []
let speed = true

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

    if (speed == true) {
        a += 1
        speed2 = motion(a)
        speed2 = constrain(speed2, 0, 250)
        lineColor = lerpColor(topColor, bottomColor, a/250)
        stroke(lineColor)
        line1 = line(250-speed2, 0, 250-speed2, 500)

            if (speed2 == 250) {
                speed = false
            }

        //num_lines.push(line1);
        //console.log(num_lines);
    }

    if (speed == false) {
        b += 1
        for (x = 0; x < height/2; x++) {
            lineColor = lerpColor(bottomColor, topColor, (speed2 - b)/250)
            stroke(lineColor)
            line(x, 0, x, 500)
        }
    }

}
function motion(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)))
}