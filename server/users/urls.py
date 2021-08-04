from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('verify',csrf_exempt(views.verify)),
    path('create',csrf_exempt(views.createuser)),
    path('interns',views.interns),
    path('addintern',csrf_exempt(views.addintern))
]
