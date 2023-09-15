from django.shortcuts import render
from .models import User

from rest_framework import generics
from .serializers import UserSerializer,LoginSerializer,RegisterSerializer


class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserAPIView(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = User.objects.all()
        user_id = self.request.query_params.get('user')
        if user_id is not None:
            queryset = queryset.filter(user = user_id)
        return queryset

class LoginAPIView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = LoginSerializer

class RegisterAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class= RegisterSerializer
