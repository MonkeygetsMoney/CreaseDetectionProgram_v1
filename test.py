from flask import Flask, render_template
#from livereload import Server
#the live reload is for running multiple thread

app = Flask(__name__)

@app.route('/')
def index():
    name = 'Toby Pie'
    pizza_toppings = ['pepperoni', 'cheese', 'ham', 'pineapple']

    return render_template('example.html', name = name, toppings = pizza_toppings)

if __name__ == '__main__':
    app.run(debug=True)