class birdBase {
    constructor(angle, topColor, bottomColor) {
        this.angle = angle; // angle for the line to travel
        this.topColor = topColor;
        this.bottomColor = bottomColor;
        this.a = 0;
    }

    // method for calculate the y coordinate
    y_coordinate(angle, cos_length = 250) {
        // define the variable as const
        // kept for each interval
        const new_angle = angle * (Math.PI/180); // have to define variable 
        const diagonal_len = Math.pow((cos_length / Math.cos(new_angle)), 2);
        const b_square = diagonal_len - Math.pow(cos_length, 2);
        const b = Math.sqrt(b_square);

        return b
    }

    // outside of the bird base
    outside(angle) {
        const b = this.y_coordinate(angle); // have to define variable
        line(250, b, 500, 0);
        line(500-b, 250, 500, 0);
        line(0, 0, 250, b);
        line(0, 0, b, 250);
        line(0, 500, b, 250);
        line(0, 500, 250, 500-b);
        line(500, 500, 500-b, 250);
        line(500, 500, 250, 500-b);
    }

    // inside of the bird base
    inside(angle) {
        const b = this.y_coordinate(45-angle); // have to define variable
        line(0, 0, 250, b)
        line(0, 0, b, 250)
        line(500, 0, 250, b)
        line(500, 0, 500-b, 250)
        line(0, 500, b, 250)
        line(0, 500, 250, 500-b)
        line(500, 500, 500-b, 250)
        line(500, 500, 250, 500-b)
    }

    changing_angle(amount = 250) {
        this.a += this.angle/amount;
        this.a = constrain(this.a, 0, this.angle);
        return this.a
    }

    animate() {
        const changing_angle = this.changing_angle(); // default to const when don't change variable for one interval
        const linecolor = lerpColor(this.topColor, this.bottomColor, changing_angle/22.5);
        stroke(linecolor);
        this.outside(changing_angle);
        this.inside(changing_angle);

    }

}

class kiteBase {
    constructor(angle, topColor, bottomColor) {
        this.angle = angle;
        this.topColor = topColor;
        this.bottomColor = bottomColor;
        this.a = 0;
    }

    // method for changing the angle
    changing_angle(amount = 250) {
        this.a += this.angle/amount;
        this.a = constrain(this.a, 0, this.angle);
        return this.a
    }

    // method for calculate the y coordinate
    y_coordinate(angle, cos_length = 500) {
        // define the variable as const
        // kept for each interval
        const new_angle = angle * (Math.PI/180); // have to define variable 
        const diagonal_len = Math.pow((cos_length / Math.cos(new_angle)), 2);
        const b_square = diagonal_len - Math.pow(cos_length, 2);
        const b = Math.sqrt(b_square);

        return b
    }

    outside(angle) {
        const b = this.y_coordinate(angle);
        line(0, b, 500, 0);
        line(500-b, 500, 500, 0);
    }

    inside(angle) {
        const b = this.y_coordinate(angle+22.5);
        line(0, b, 500, 0);
        line(500-b, 500, 500, 0);
    }

    animate() {
        const angle = this.changing_angle();
        const linecolor = lerpColor(this.topColor, this.bottomColor, angle/this.angle);
        stroke(linecolor);
        this.outside(angle);
        this.inside(angle);
    }
}
function setup() {
    createCanvas(500, 500);
    background(255);

    startR = 255;
    startG = 255;
    startB = 255;

    endR = 212;
    endG = 120;
    endB = 51;

    const topColor = color(startR, startG, startB);
    const bottomColor = color(endR, endG, endB);
    bird = new birdBase(22.5, topColor, bottomColor); // create this in the set up
    kite = new kiteBase(22.5, topColor, bottomColor);

}

function draw() {
    //bird.animate()
    kite.animate()
}
