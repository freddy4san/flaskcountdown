from flask import Flask, render_template, request, flash, redirect, url_for
from datetime import datetime 

app = Flask(__name__)

#secret for flash messaged to work
#app.config['SECRET_KEY'] = 'thisisasecretkey'

@app.route("/")
def home():
    
    countdowndate = datetime(2023,7,17)
    todaysdate = datetime.now()
    print(countdowndate)
    print(todaysdate)
    print(countdowndate > todaysdate)
    #if countdown has not get to zero then keep showing it
    if(countdowndate > todaysdate):
        return render_template("countdown.html")
    else:
        #when countdown get to zero then redirect to different page
        return redirect(url_for('generateflame'))

@app.route("/flame")
def generateflame():
    #output = "Hello Diablita, If you are reading this it means countdown has come to zero. Now you get +1 level at your wise and strenght"
    #bdmessage = "Happy birthday to the darkest star in the universe."
    #flash("Diablita message going through")
    return render_template("index.html")

@app.route('/message', methods=['GET', 'POST'])
def delivermessage():
    # GET request
    if request.method == 'GET':
        hellomessage = 'Hello Diablita, Looks like the countdown has come to zero. Now you get +1 level at your wise and strenght. Happy birthday, you are the coolest person in the universe!'        
        return hellomessage
    # POST request
    if request.method == 'POST':
        print(request.get_json())  # parse as JSON
        return 'Sucesss', 200


if __name__ == "__main__":
    app.run(debug=True)
