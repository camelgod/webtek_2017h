from app import app
from flask import render_template, flash, redirect, session, url_for, request

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/about', methods=['GET'])
def about():
    return render_template('about.html')

@app.route('/order', methods=['GET'])
def order():
    return render_template('about.html')

@app.route('/products', methods=['GET'])
def products():
    return render_template('about.html')

@app.route('/kontakt', methods=['GET'])
def kontakt():
    return render_template('kontakt.html')

@app.route('/registrer', methods=['GET'])
def registrer():
    return render_template('registrer.html')
