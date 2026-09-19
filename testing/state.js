const state_identifier = {
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
        this.state = this.transitions[this.state].decrease;
        return this.state;
    },
}

let a = 0;
console.log(state_identifier.state);

const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');

inc.onclick = function () {

    console.log(state_identifier.increase());

    if(state_identifier.state == 'state_5') {
        a = 0;
        console.log(`you reached max and the count is ${a}`);
    }

    else{
        a+=1;
        console.log(a)
    }
}

dec.onclick = function () {
    //console.log('clicked');
    console.log(state_identifier.decrease());
}