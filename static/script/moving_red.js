function setup() {
    createCanvas(500, 500)

    topR = 255
    topG = 0
    topB = 0

    bottomR = 255
    bottomG = 255
    bottomB = 255
}

function draw() {
    const topColor = color(topR, topG, topB)
    const bottomColor = color(bottomR, bottomG, bottomB)

    for (x = 0; x < height; x++) {
        
        lineColor = lerpColor(topColor, bottomColor, x/height)

        stroke(lineColor)
        line(x, 0, x, 500)
    }
}