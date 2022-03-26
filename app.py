from flask import *
from markupsafe import escape


app = Flask(__name__)


@app.route("/")
def welcome():
    return "<h1>Welcome to our website</h1>"


@app.route("/html")
def hello_world():
    return render_template('index.html')


@app.route('/file')
def render():
    if 'filename' in request.args:
        myfilename = request.args.get('filename')
        return render_template(myfilename)
    else:
        return "No input file specified"


# @app.route("/<name>")
# def escape_route(name):
#     return f"Hello, {escape(name)}!"


if __name__ == '__main__':
    app.run(debug=True, port=8080)