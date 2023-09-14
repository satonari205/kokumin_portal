from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','nickname', 'username', 'password','image','bio')

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','nickname','password')

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','nickname','password')

        # def create(self, validated_data):
        #     user = User.objects.create_user(**validated_data)
        #     return user