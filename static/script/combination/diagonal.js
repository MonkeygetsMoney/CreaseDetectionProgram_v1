const stateMachine = {
    state: 'state_0',
    transitions: {
        state_0: { increase: 'state_1', decrease: 'state_0' },
        state_1: { increase: 'state_2', decrease: 'state_0' },
        state_2: { increase: 'state_3', decrease: 'state_1' },
        state_3: { increase: 'state_4', decrease: 'state_2' },
        state_4: { increase: 'state_5', decrease: 'state_3' },
        state_5: { increase: 'state_6', decrease: 'state_4' },
        state_6: { increase: 'state_7', decrease: 'state_5' },
        state_7: { increase: 'state_8', decrease: 'state_6' },
        state_8: { increase: 'state_9', decrease: 'state_7' },
        
    },

    increase() {
        this.state = this.transitions[this.state].increase;
        return this.state;
    },

    decrease() {
        this.state = thise.transitions[this.state].decrease;
        return this.state
    }
}

let a = 0

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

function draw(){

    const topColor = color(startR, startG, startB);
    const bottomColor = color(endR, endG, endB);

    if (stateMachine.state === 'state_0') {
        a += 1;
        speed = easeOut(a);
        speed = constrain(speed, 0, 250)
        for (x = 0; x < height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, speed/250);
            stroke(linecolor);
            line(250-speed, 0, 250-speed, 500);
        }

        for (x = 0; x<height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, speed/250);
            stroke(linecolor);
            line(250+speed, 0, 250+speed, 500);
        }

        if (a == 250) {
            stateMachine.increase();
            a = 0;
        }
    }

    else if (stateMachine.state === 'state_1') {
        a += 1;
        speed = easeOut(a);
        speed = constrain(speed, 0, 250)
        for (x = 0; x < height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, (x-speed)/250);
            stroke(linecolor);
            line(250-x, 0, 250-x, 500);
        }

        for (x = 0; x<height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, (x-speed)/250);
            stroke(linecolor);
            line(250+x, 0, 250+x, 500);
        }

        if (a == 250) {
            stateMachine.increase();
            a = 0;
        }
    }

    else if (stateMachine.state === 'state_2') {
        a += 1;
        speed = easeOut(a);
        speed = constrain(speed, 0, 250)
        for (x = 0; x < height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, speed/250);
            stroke(linecolor);
            line(0, 250-speed, 500, 250-speed);
        }

        for (x = 0; x<height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, speed/250);
            stroke(linecolor);
            line(0, 250+speed, 500, 250+speed);
        }

        if (a == 250) {
            stateMachine.increase();
            a = 0;
        }
    }

    else if (stateMachine.state === 'state_3') {
        a += 1;
        speed = easeOut(a);
        speed = constrain(speed, 0, 250)
        for (x = 0; x < height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, (x-speed)/250);
            stroke(linecolor);
            line(0, 250-x, 500, 250-x);
        }

        for (x = 0; x<height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, (x-speed)/250);
            stroke(linecolor);
            line(0, 250+x, 500, 250+x);
        }

        if (a == 250) {
            stateMachine.increase();
            a = 0;
        }
    }

    else if (stateMachine.state === 'state_4') {
        a += 1;
        speed = easeOut(a);
        speed = constrain(speed, 0, height);
        for (x=0; x<height; x++) {
            linecolor = lerpColor(topColor, bottomColor, speed/height);
            stroke(linecolor);
            line(0+speed, 500, 500, 0+speed);
        }

        for (x=0; x<height; x++) {
            linecolor = lerpColor(topColor, bottomColor, speed/height);
            stroke(linecolor);
            line(0, 500-speed, 500-speed, 0);
        }

        if (a == 500) {
            stateMachine.increase();
            a = 0;
        }
    }
    else if (stateMachine.state === 'state_5') {
        a += 1;
        speed = easeOut(a);
        speed = constrain(speed, 0, height);
        for (x=0; x<height; x++) {
            linecolor = lerpColor(topColor, bottomColor, (x - speed)/500);
            stroke(linecolor);
            line(0+x, 500, 500, 0+x);
        }

        for (x=0; x<height; x++) {
            linecolor = lerpColor(topColor, bottomColor, (x-speed)/500);
            stroke(linecolor);
            line(0, 500-x, 500-x, 0);
        }

        if (a == 500) {
            stateMachine.increase();
            a = 0;
        }
    }
    else if (stateMachine.state === 'state_6') {
        a += 1;
        speed = easeOut(a);
        speed = constrain(speed, 0, height);
        for (x=0; x<height; x++) {
            linecolor = lerpColor(topColor, bottomColor, speed/height);
            stroke(linecolor);
            line(0+speed, 0, 500, 500-speed);
        }

        for (x=0; x<height; x++) {
            linecolor = lerpColor(topColor, bottomColor, speed/height);
            stroke(linecolor);
            line(0, 0+speed, 500-speed, 500);
        }

        if (a == 500) {
            stateMachine.increase();
            a = 0;
        }
    }

    else if (stateMachine.state === 'state_7') {
        a += 1;
        speed = easeOut(a);
        speed = constrain(speed, 0, height);
        for (x=0; x<height; x++) {
            linecolor = lerpColor(topColor, bottomColor, (x-speed)/height);
            stroke(linecolor);
            line(0+x, 0, 500, 500-x);
        }

        for (x=0; x<height; x++) {
            linecolor = lerpColor(topColor, bottomColor, (x-speed)/height);
            stroke(linecolor);
            line(0, 0+x, 500-x, 500);
        }

        if (a == 500) {
            stateMachine.increase();
            a = 0;
        }
    }

    else if (stateMachine.state === 'state_8') {
        a += 1;
        speed = easeOut(a);
        speed = constrain(speed, 0, 250);
        for (x=0; x<height/2; x++) {
            linecolor = lerpColor(topColor, bottomColor, speed/250);
            stroke(linecolor);
            line(250, 250, 0+speed, 500);
            line(250, 250, 250+speed, 500);
            line(250, 250, 500, 500-speed);
            line(250, 250, 500, 250-speed);
            line(250, 250, 500-speed, 0);
            line(250, 250, 250-speed, 0);
            line(250, 250, 0, 0+speed);
            line(250, 250, 0, 250+speed);
        }
    }
}

function easeOut(x) {
    return Math.sqrt(abs(1 - Math.pow(x-1, 2)));
}