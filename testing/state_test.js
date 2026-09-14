class StateMachine {
  constructor({ initial, states }) {
    this.current = initial;
    this.states = states; // { stateName: { on: { EVENT: 'nextState' }, onEnter, onExit } }
  }

  can(event) {
    return Boolean(this.states[this.current]?.on?.[event]);
  }

  send(event) {
    const stateDef = this.states[this.current];
    const nextState = stateDef?.on?.[event];

    if (!nextState) {
      console.warn(`No transition for "${event}" from "${this.current}"`);
      return this.current;
    }

    stateDef.onExit?.();
    this.current = nextState;
    this.states[this.current].onEnter?.();

    return this.current;
  }
}

const machine = new StateMachine({
  initial: 'idle',
  states: {
    idle: {
      on: { FETCH: 'loading' },
    },
    loading: {
      on: { SUCCESS: 'success', ERROR: 'error' },
      onEnter: () => console.log('Fetching data...'),
    },
    success: {
      on: { RESET: 'idle' },
      onEnter: () => console.log('Data loaded!'),
    },
    error: {
      on: { RETRY: 'loading', RESET: 'idle' },
      onEnter: () => console.log('Something went wrong'),
    },
  },
});

for(a = 0; a <= 250; a++) {
    if (a == 250) {
        console.log(machine.send('FETCH'));   // idle -> loading
        console.log(machine.send('SUCCESS')); // loading -> success
        console.log(machine.send('RESET'));   // idle -> loading
    }
    else{
        console.log(machine.send('FETCH')); // loading -> success
        console.log(machine.send('ERROR'));
        console.log(machine.send('RESET'));
    }
}
