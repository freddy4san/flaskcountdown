from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("countdown.html")

@app.route("/flame")
def generate():

    output = "Hello Diablita, If you are reading this it means countdown has come to zero. Now you get +1 level at your wise and strenght"
    bdmessage = "Happy birthday to the darkest star in the universe."

    return render_template("index.html", output=output, bdmessage=bdmessage)


if __name__ == "__main__":
    app.run(debug=True)
