from django.shortcuts import render
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import Ext_User
from .models import Intern
from django.core import serializers

# Create your views here.
def verify(request):
    if(request.method == "POST"):
        print(request.POST)
        user = authenticate(username=request.POST.get('user'),password=request.POST.get('pass'))
        if user is not None:
            xyz = { "ismanager":user.ext_user.ismanager }
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

def interns(request):
    if(request.method == "GET"):
        if(request.GET.get('all') == "True"):
            obj = Intern.objects.all()
            data = serializers.serialize('json',obj,fields=('title','pay','jobtype','company'))
            print(type(data))
            return JsonResponse(data,safe=False)
        return JsonResponse({"m":"m"})

def addintern(request):
    if(request.method == "POST"):
        company = request.POST.get('comp')
        email = request.POST.get('email')
        title = request.POST.get('title')
        jobtype = request.POST.get('type')
        pay = request.POST.get('pay')
        description = request.POST.get('desc')
        username = request.POST.get('user')
        u = User.objects.get(username=username)
        obj = Intern.objects.create(company=company,email=email,title=title,jobtype=jobtype,pay=pay,description=description,username=u)
        if(obj is not None):
            xyz = { "message": "Created"}
            return JsonResponse(xyz)
        else:
            xyz = { "message": "not created" }
            return JsonResponse(xyz)