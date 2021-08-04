from rest_framework import serializers
from .models import Intern

class InternSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intern
        fields = ("title","company","pay","jobtype","auto_id","location")

class InternDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intern
        fields = ("title","company","pay","jobtype","auto_id","location","description","username")