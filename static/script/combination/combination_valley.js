// describe the valley diagonal folds

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

    // do combination of folds together display all valley folds in action
    // divide the paper into 4 individual squares

    if (stateMachine.state === 'state_0') {
        // appearing state, don't need the for loop

        a += 1;
        speed = easeOut(a);
        speed = constrain(speed, 0, 251);
        linecolor = lerpColor(topColor, bottomColor, speed/250);
        stroke(linecolor);
        line(250-speed, 0, 250, 0+speed);
        line(0, 250-speed, 0+speed, 250);
        line(250+speed, 0, 250, 0+speed);
        line(500, 250-speed, 500-speed, 250);
        line(0, 250+speed, 0+speed, 250);
        line(250-speed, 500, 250, 500-speed);
        line(250, 500-speed, 250+speed, 500);
        line(500-speed, 250, 500, 250+speed);

        if (a == 251) {
            stateMachine.increase();
            a = 0;
        }
    }

    else if (stateMachine.state === 'state_1') {
        // disappearing state (use for loop)
        a += 1.5;
        speed = easeOut(a);
        speed = constrain(speed, 0, 250);

        for (x = 0; x<height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, (x-speed)/250);
            stroke(linecolor);
            line(250-x, 0, 250, 0+x);
            line(0, 250-x, 0+x, 250);
            line(250+x, 0, 250, 0+x);
            line(500, 250-x, 500-x, 250);
            line(0, 250+x, 0+x, 250);
            line(250-x, 500, 250, 500-x);
            line(250, 500-x, 250+x, 500);
            line(500-x, 250, 500, 250+x);

            // use x because it will first draw out all the line
            // then as speed increase, it would slowly erase all the line
            // or in this case, turn all the lines into white
        }
        if (a == 250) {
            stateMachine.increase();
            a = 0;
        }
    }
    
}


function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
}