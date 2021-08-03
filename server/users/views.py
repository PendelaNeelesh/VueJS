from django.shortcuts import render
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import Ext_User

# Create your views here.
def verify(request):
    if(request.method == "POST"):
        print(request.POST)
        user = authenticate(username=request.POST.get('user'),password=request.POST.get('pass'))
        if user is not None:
            print(user.ext_user.ismanager)
            xyz = { "verified":"1" }
            return JsonResponse(xyz)
        else:
            res = {
                "message": "User does not exist please signUp"
            }
            return JsonResponse(res)
def createuser(request):
    if(request.method == "POST"):
        print(request.POST)
        username = request.POST['user']
        password = request.POST['pass']
        usertype = request.POST['type']
        email = request.POST['email']
        try:
            user = User.objects.create_user(username,email,password)
        except:
            xyz = { "message":"User already exist" }
            return JsonResponse(xyz)
        if(usertype == "user"):
            user.ext_user.ismanager = "False"
            user.save()
        else:
            user.ext_user.ismanager = "True"
            user.save()
        xyz = { "message":"User Created" }
        return JsonResponse(xyz)