from flask import Flask
from app import app
from user.models import User


@app.route('/user/signup/',methods=['GET','POST'])
def sign_up():
    return User().signup()
