const stateMachine = {
    state: 'state_0',
    transitions: {
        state_0: { increase: 'state_1', decrease: 'state_0'},
        state_1: { increase: 'state_2', decrease: 'state_0'},
        state_2: { increase: 'state_3', decrease: 'state_1'},
        state_3: { increase: 'state_4', decrease: 'state_2'},
        state_4: { increase: 'state_5', decrease: 'state_3'},
        state_5: { increase: 'state_5', decrease: 'state_4'}
    },

    increase() {
        this.state = this.transitions[this.state].increase;
        return this.state;
    },

    decrease() {
        this.state = this.transitions[this.state]. decrease;
    },
}

//define frame speed
let a = 0;

function setup() {
    createCanvas(500, 500);
    background(255);

    startR = 255;
    startG = 255;
    startB = 255;

    endR = 212;
    endG = 120;
    endB = 51;

    //framesRate(1);
}

function draw() {

    const topColor = color(startR, startG, startB);
    const bottomColor = color(endR, endG, endB);

    if (stateMachine.state === 'state_0') {
        a += 2;
        speed = easeOut(a)
        speed = constrain(speed, 0, 250)
        for (x = 0; x < height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, a/250);
            stroke(linecolor);
            line(250-speed, 0, 250-speed, 500);
        }

        for (x = 0; x < height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, a/250);
            stroke(linecolor);
            line(250+speed, 0, 250+speed, 500);
            //use 'a' for moving the gradient
            //use 'x' would print a stationary gradient
        }

        if (a == 250) {
            stateMachine.increase();
            a = 0;
        }
    }
    else if (stateMachine.state === 'state_1') {
        a += 2;
        speed = easeOut(a);
        speed = constrain(speed, 0, 250)
        for (x = 0; x<height/2; x++) {
                linecolor = lerpColor(topColor, bottomColor, (x-speed)/250);
                stroke(linecolor);
                line(250-x, 0, 250-x, 500);
                //use 'x' to have a stationary gradient
                // while use x-b to make every line have value of 0 or becoming white
            }

        for (x = 0; x<height/2; x++) {
                linecolor = lerpColor(topColor, bottomColor, (x-speed)/250);
                stroke(linecolor);
                line(250+x, 0, 250+x, 500);
            }
    }

}

function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
    //return 1 - Math.pow(1-x, 3);
}
