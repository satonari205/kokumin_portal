from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .serializers import UserSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer(User)

    def retrieve(self,request):    
        user = get_object_or_404(queryset)
        return Response(serializer.data)
    
    def create(self,request):
        pass