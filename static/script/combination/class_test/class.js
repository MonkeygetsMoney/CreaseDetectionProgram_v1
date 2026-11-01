// this is where I learn and experiment with class object in js

class Player {
    constructor(name, health) { // basically __init__ in python
        this.name = name; // this is similar to self, initialized that instances
        this.health = health;
    }

    takeDamage(amount) {
        this.health -= amount;
    }
 }

const p = new Player('Toby', 100);
p.takeDamage(10);
console.log(p.health);

class Pizza {
    constructor(crust, topping) {
        this.crust = crust;
        this.topping = topping;
    }

    add_topping(toppings) {
        for (let i = 0; i < toppings.length; i++) {
            if (i == toppings.length - 1) {
                this.topping += ', ' + toppings[i] + '.';
            }
            else {
                this.topping += ', ' + toppings[i];
            }
        }
    }

    assemble() {
        return `Your order is a ${this.crust} pizza with ${this.topping}`
    }
}

my_Pizza = new Pizza('thin crust', 'ham')
console.log(my_Pizza.assemble())
toppings = ['onions', 'pineapple', 'pepper']
my_Pizza.add_topping(toppings)
console.log(my_Pizza.assemble())

// this is the class for bird base

class bird_base {
    constructor(angle, topColor, bottomColor) {
        this.angle = angle;
        this.topColor = topColor;
        this.bottomColor = bottomColor;
        this.a = 0;
    }

    // method for calculate the y coordinate
    y_coordinate(angle, cos_length = 250) {
        let diagonal_len = 0;
        let b_square = 0;
        let b = 0;

        const new_angle = angle * (Math.PI/180); // have to define variable
        diagonal_len = Math.pow((cos_length / Math.cos(new_angle)), 2);
        b_square = diagonal_len - Math.pow(cos_length, 2);
        b = Math.sqrt(b_square);

        return b
    }

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
        let changing_angle = this.changing_angle();
        const linecolor = lerpColor(this.topColor, this.bottomColor, changing_angle/22.5);
        stroke(linecolor);
        this.outside(changing_angle);
        this.inside(changing_angle);

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
    bird = new bird_base(22.5, topColor, bottomColor); // create this in the set up

}

function draw() {

    bird.animate()
}
