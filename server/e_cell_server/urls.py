from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/',include('users.urls')), 
    path('accounts/',include('django.contrib.auth.urls')),
    path('',TemplateView.as_view(template_name='index.html')),
    path('^static/(?P<path>.*)$',TemplateView.as_view(template_name='index.html'))
]
