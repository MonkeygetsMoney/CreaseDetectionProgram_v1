//define variable for the motion speed of the gradient
let a = 0
let b = 0
let c = 0

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

    a += 2
    speed = motion(a)
    speed = constrain(speed, 0, 250)

    if (speed < 250) {
        push()
        translate(250-speed, 0)

        for (x = height/2; x > 0; x--) {
            b = speed/250
            if (b < 1) {
                const left = lerpColor(topColor, bottomColor, b)

                stroke(left)
                line(x, 0, x, 500)
            }
    
        }
        pop()
        //push and pop help exit out of the translate motion

    }

}

function motion(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)))
}