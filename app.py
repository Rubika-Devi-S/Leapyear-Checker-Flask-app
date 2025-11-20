import webbrowser
import threading

def open_browser():
    webbrowser.open_new("http://127.0.0.1:5000/")

if __name__ == "__main__":
    threading.Timer(1, open_browser).start()
    app.run(debug=False)

from flask import Flask, render_template, request, jsonify
app = Flask(__name__)
def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
@app.route('/')
def home():
    return render_template('index.html')
@app.route("/check", methods=['POST'])
def check():
    year = int(request.json['year'])
    result ={
        "isLeap": is_leap_year(year),
        "message": f"{year} is {'a leap year' if is_leap_year(year) else 'not a leap year'}."
    }
    return jsonify(result)
if __name__ == '__main__':
    app.run(debug=True)
