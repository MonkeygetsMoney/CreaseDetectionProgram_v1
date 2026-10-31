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