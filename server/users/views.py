from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import Ext_User
from .models import Intern
from django.shortcuts import render
from django.template import Context

from .serializers import InternSerializer
from .serializers import InternDetailSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
#View to verify the user and also return the manager status
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

#view to create the user
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

#view to get the interns based on filters
@api_view(['GET'])
def interns(request):
    num = int(request.GET.get('page'))
    print(request.GET.get('loc'))
    print(request)
    if(request.GET.get('user') is not None):
        username = request.GET.get('user')
        u = User.objects.get(username=username)
        interns = Intern.objects.all().filter(username=u)[num*10:(num+1)*10]
        serializer = InternSerializer(interns, many=True)
        return Response(serializer.data)
    if(request.GET.get('loc')!= "default" and request.GET.get('loc') is not None):
        interns = Intern.objects.all().filter(location=request.GET.get('loc'))[num*10:(num+1)*10]
        serializer = InternSerializer(interns, many=True)
        return Response(serializer.data)
    interns = Intern.objects.all()[num*10:(num+1)*10]
    serializer = InternSerializer(interns, many=True)
    return Response(serializer.data)

#preflight requst to get total number of interns present
@api_view(['GET'])
def internCount(request):
    interns = Intern.objects.all()
    count =0
    for intern in interns:
        count = count+1
    data = { "count":count}
    return Response(data)

#View to add interns
def addintern(request):
    if(request.method == "POST"):
        company = request.POST.get('comp')
        email = request.POST.get('email')
        title = request.POST.get('title')
        jobtype = request.POST.get('type')
        pay = request.POST.get('pay')
        description = request.POST.get('desc')
        username = request.POST.get('user')
        location = request.POST.get('loc')
        u = User.objects.get(username=username)
        obj = Intern.objects.create(company=company,email=email,title=title,jobtype=jobtype,location=location,pay=pay,description=description,username=u)
        if(obj is not None):
            xyz = { "message": "Created"}
            return JsonResponse(xyz)
        else:
            xyz = { "message": "not created" }
            return JsonResponse(xyz)

#view to delete request
@api_view(['GET'])
def deleteintern(request):
    id = request.GET.get('id')
    Intern.objects.filter(auto_id=id).delete()
    data = { "message": "deleted"}
    return Response(data)

#view to appli intrenship.
@api_view(['GET'])
def applyinternship(request):
    id = request.GET.get('id')
    user = request.GET.get('user')
    interns = Intern.objects.filter(auto_id=id)
    serializer = InternDetailSerializer(interns, many=True)
    admin_mail = User.objects.all().filter(id=serializer.data[0]['username']).values('email')
    return render(request, 'apply.html', {"data":serializer.data[0]})

