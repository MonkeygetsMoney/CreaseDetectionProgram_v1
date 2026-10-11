// draw lines at different angles
// think of it as triangle where a and b is the edges and c is the diagonal line

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
let angle1 = 45;


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
        a += angle1/250; // 45 degrees for 250 times
        a = constrain(a, 0, angle1);
        linecolor = lerpColor(topColor, bottomColor, a/angle1);
        stroke(linecolor);
        y1 = y_coordinate(500, a);
        line(x1, y1, x2, y2);
        //console.log(y_coordinate(500, a));
        //console.log(b);

        if (a >= 45) { // slightly bigger than 45
            stateMachine.increase();
            a = 0;
        }
    }

    else if (stateMachine.state === 'state_1') {
        a += (angle1/250);
        a = constrain(a, 0, angle1);

        for (x = 0; x < angle1; x += angle1/250) {
            linecolor = lerpColor(topColor, bottomColor, (x-a)/angle1);
            stroke(linecolor);
            y1 = y_coordinate(500, x);
            line(x1, y1, x2, y2);
        }

    }
}


function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
}

// define function to get height b (coordinate)
// on the edges of triangle will remain constant
function y_coordinate(length, angle) {
    let diagonal_len = 0;
    let b_square = 0
    let b = 0;

    angle = angle * (PI/180);
    diagonal_len = Math.pow((length / Math.cos(angle)), 2);
    b_square = diagonal_len - Math.pow(length, 2);
    b = Math.sqrt(b_square);
    //b = Math.abs(b_square);

    return b;
}

function speed(a) {
    return a/250;
}
