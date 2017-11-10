from app import app
from flask import render_template, flash, redirect, session, url_for, request

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/om', methods=['GET'])
def about():
    return render_template('about-us.html')


@app.route('/kontakt', methods=['GET'])
def kontakt():
    return render_template('kontakt.html')

@app.route('/kunnskap', methods=['GET'])
def kunnskap():
    return render_template('knowledge-center.html')


@app.route('/article', methods=['GET'])
def article():
    return render_template('article.html')


@app.route('/nettbutikk', methods=['GET'])
def store():
    return render_template('store.html')


@app.route('/category', methods=['GET'])
@app.route('/category/<int:id>', methods=['GET'])
def category(id=1):
    return render_template('dog.html')


@app.route('/product', methods=['GET'])
def product():
    return render_template('product.html')


@app.route('/cart', methods=['GET'])
def cart():
    return render_template('cart.html')


@app.route('/bruker/registrer', methods=['GET'])
def registrer():
    return render_template('registrer.html')
