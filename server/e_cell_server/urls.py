from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/',include('users.urls')), 
    path('accounts/',include('django.contrib.auth.urls'))
]
