class StateMachine {
    constructor() {
        this.state = '0';
        // this is a dict for state
        this.transition = {}
    }

    update() {
        // update the state machine
        // can create a new state everytime it's called
        const next_state = String(Number(this.state) + 1);
        let previous_state; // use let since we changing variable
        if (this.state == '0'){
            previous_state = '0'
        }
        else{
            previous_state = String(Number(this.state) - 1);
        }
        // add new state
        this.transition[this.state] = { increase: next_state, decrease: previous_state };
    }

    increase() {
        // increase the state
        this.update()
        this.state = this.transition[this.state].increase;
        return this.state
    }

    decrease() {
        // decrease the state
        this.update()
        this.state = this.transition[this.state].decrease;
        return this.state
    }
}

class birdBase {
    constructor(angle, topColor, bottomColor) {
        this.angle = angle; // angle for the line to travel
        this.topColor = topColor;
        this.bottomColor = bottomColor;
        this.a = 0;
        this.state = new StateMachine(); // put here as a set up

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

    animate_appear() {
        const changing_angle = this.changing_angle(); // default to const when don't change variable for one interval
        const linecolor = lerpColor(this.topColor, this.bottomColor, changing_angle/22.5);
        stroke(linecolor);
        this.outside(changing_angle);
        this.inside(changing_angle);

    }

    animate_disappear() {
        const angle = this.changing_angle();

        // the disappearing phase
        for (let x=0; x < this.angle; x += this.angle/250) {
            const linecolor = lerpColor(this.topColor, this.bottomColor, (x-angle)/this.angle);
            stroke(linecolor)

            // use x as a way to delete the line drawn
            this.outside(x)
            this.inside(x)
        }
    }

    animate() {
        if (this.state.state == '0') {
            this.animate_appear();
            
            if (this.a == this.angle) {
                this.state.increase();
                this.a = 0; // reset the angle
            }

        } 

        else if (this.state.state == '1') {

            this.animate_disappear();
        }
    }

}

class kiteBase {
    constructor(angle, topColor, bottomColor) {
        this.angle = angle;
        this.topColor = topColor;
        this.bottomColor = bottomColor;
        this.a = 0;

        // put state machine here so able to update and save the current state
        this.state = new StateMachine();

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

    animate_appear() {
        const angle = this.changing_angle(); // changing the current from 0 to input angle
        const linecolor = lerpColor(this.topColor, this.bottomColor, angle/this.angle);
        stroke(linecolor);
        this.outside(angle);
        this.inside(angle);
    }

    animate_disappear() {
        const angle = this.changing_angle();

        // the disappearing phase
        for (let x=0; x < this.angle; x += this.angle/250) {
            const linecolor = lerpColor(this.topColor, this.bottomColor, (x-angle)/this.angle);
            stroke(linecolor)

            // use x as a way to delete the line drawn
            this.outside(x);
            this.inside(x);
        }
    }

    animate() {
        if (state.state == '0') {
            this.animate_appear();

            if (this.a == this.angle) {
                state.increase();
                this.a = 0; // reset the angle
            }

        } 

        if (state.state == '1') {
            this.animate_disappear();
        }
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
    //kite = new kiteBase(22.5, topColor, bottomColor);

    state = new StateMachine()
}

function draw() {
    bird.animate()
    //kite.animate()
}
