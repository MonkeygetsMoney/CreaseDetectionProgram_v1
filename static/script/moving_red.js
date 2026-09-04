//define variable for the motion speed of the gradient
let a = 0
let b = 0
let c = 0

function setup() {
    createCanvas(500, 500)

    topR = 255
    topG = 255
    topB = 255

    bottomR = 255
    bottomG = 0
    bottomB = 0
}

function draw() {
    const topColor = color(topR, topG, topB)
    const bottomColor = color(bottomR, bottomG, bottomB)

    a += 2
    speed = motion(a)
    speed = constrain(speed, 0, 250)

    if (speed < 250) {
        push()
        translate(speed-250, 0)
        const lineColor = lerpColor(topColor, bottomColor, speed/250)
            //value define by the x/height
            //gradient increase red as x increase
        for (x = 0; x < height/2; x++) {
            

            stroke(lineColor)
            line(x, 0, x, 500)
        }
        pop()
        //push and pop help exit out of the translate motion
    }
    else{
        b += 3
        speed2 = motion(b)
        speed2 = constrain(speed2, 0, 250)        
        const lineColor = lerpColor(topColor, bottomColor, (speed - speed2)/250)

        for (x = 0; x < height/2; x++) {

            stroke(lineColor)
            line(x, 0, x, 500)
        }
    }
}

function motion(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)))
}