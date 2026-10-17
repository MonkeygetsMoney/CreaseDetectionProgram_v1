// to perform bird base, divide the paper into 4 squares

const stateMachine = {
    state: 'state_0',
    transitions: {
        state_0: { increase: 'state_1', decrease: 'state_0' },
        state_1: { increase: 'state_2', decrease: 'state_0' },
        state_2: { increase: 'state_3', decrease: 'state_1' },
    },

    increase() {
        this.state = this.transitions[this.state].increase;
        return this.state;
    },

    decrease() {
        this.state = this.transitions[this.state].decrease;
        return this.state;
    },
}

let a = 0;
let b = 0;

// define coordinates we want
let x1 = 0;
let x2 = 500;
let y1 = 0;
let y2 = 0;

// define the angles we want
const angle1 = [22.5, 45];
amount = 500/(angle1.length * 2);  // amount of lines run with respect to angles



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

    if (stateMachine.state === 'state_0') {
        a += angle1[0]/amount; // 22.5 degrees for 250 times
        a = constrain(a, 0, angle1[0]);

        linecolor = lerpColor(topColor, bottomColor, a/angle1[0]);
        stroke(linecolor);
        b = y_coordinate(250, a);
        line(250, b, 500, 0);
        line(500-b, 250, 500, 0)
        line(0, 0, 250, b)
        line(0, 0, b, 250)
        line(0, 500, b, 250)
        line(0, 500, 250, 500-b)
        line(500, 500, 500-b, 250)
        line(500, 500, 250, 500-b)
        console.log(b)

        stroke('red')
        b = y_coordinate(250, a)
        line(0, 0, 250, 250-b)
        console.log(b)

        if (a == angle1[0]) { // slightly bigger than 45
            stateMachine.increase();
            a = 0;
        }
    }

    else if (stateMachine.state == 'state_1') {
        a += angle1[0]/amount;
        a = constrain(a, 0, angle1[0]);

        for (x=0; x<angle1[0]; x+=angle1[0]/250) {
            linecolor = lerpColor(topColor, bottomColor, (x-a)/angle1[0]);
            stroke(linecolor);
            b = y_coordinate(250, x);
            line(250, b, 500, 0);
            line(500-b, 250, 500, 0)
            line(0, 0, 250, b)
            line(0, 0, b, 250)
            line(0, 500, b, 250)
            line(0, 500, 250, 500-b)
            line(500, 500, 500-b, 250)
            line(500, 500, 250, 500-b)
        }
    }
}

function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
}

// define function to get height b (coordinate)
// on the edges of triangle will remain constant
function y_coordinate(cos_length, angle) {
    let diagonal_len = 0;
    let b_square = 0
    let b = 0;

    angle = angle * (PI/180);
    diagonal_len = Math.pow((cos_length / Math.cos(angle)), 2);
    b_square = diagonal_len - Math.pow(cos_length, 2);
    b = Math.sqrt(b_square);
    //b = Math.abs(b_square);

    return b;
}

function speed(a) {
    return a/250;
}
