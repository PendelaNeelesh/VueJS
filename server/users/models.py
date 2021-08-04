from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.

class Ext_User(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    ismanager = models.CharField(max_length=10, blank=True)
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Ext_User.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.ext_user.save()

class Intern(models.Model):

    auto_id = models.AutoField(primary_key=True)
    company = models.CharField(max_length=50,blank=False)
    email = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    jobtype = models.CharField(max_length=50)
    location = models.CharField(max_length=100,blank=False,default="India")
    pay = models.IntegerField()
    description = models.TextField()
    username = models.ForeignKey(User,default="unknown",on_delete=models.SET_DEFAULT) 
    class Meta:
        verbose_name_plural = "interns"
    def __str__(self):
        return self.title