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
