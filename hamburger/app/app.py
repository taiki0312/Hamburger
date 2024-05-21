from flask import Flask,render_template

#Flaskオブジェクトの生成
app = Flask(__name__)

#「/index」へアクセスがあった場合に、「index.html」を返す
@app.route("/")
def index():
    return render_template("selectLanguage.html")

@app.route("/indexJap.html")
def index1():
    return render_template("indexJap.html")

@app.route("/indexEng.html")
def index2():
    return render_template("indexEng.html")