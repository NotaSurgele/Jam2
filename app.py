from flask import *
from markupsafe import escape


app = Flask(__name__)


@app.route("/")
def welcome():
    return render_template('main.html')


@app.route("/html")
def hello_world():
    return render_template('index.html')


@app.route("/snake")
def snake():
    return render_template('snake.html')


@app.route("/runner")
def runner():
    return render_template('runner.html')


@app.route("/paint")
def paint():
    return render_template("paint.html")


@app.route('/file')
def render():
    if 'filename' in request.args:
        myfilename = request.args.get('filename')
        return render_template(myfilename)
    else:
        return "No input file specified"


@app.route("/<name>")
def escape_route(name):
    return f"Hello, {escape(name)}!"


if __name__ == '__main__':
    app.run(debug=True, port=8080)