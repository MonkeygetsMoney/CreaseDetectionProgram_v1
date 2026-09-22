from flask import Flask, render_template
#from livereload import Server
#the live reload is for running multiple thread

def angle():
    angle_num = {90: 1}
    return angle_num

app = Flask(__name__)

@app.route('/')
def index():
    name = 'Toby Pie'
    pizza_toppings = ['pepperoni', 'cheese', 'ham', 'pineapple']
    angle_num = angle()

    return render_template('example.html', name = name, toppings = pizza_toppings, angles = angle_num)

if __name__ == '__main__':
    app.run(debug=True)