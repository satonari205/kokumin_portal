from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

#トークンを発行するためのクラス
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','nickname', 'username', 'password','image','bio')

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'nickname', 'password')
