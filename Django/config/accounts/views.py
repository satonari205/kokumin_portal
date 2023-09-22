from accounts.models import User
from .serializers import (
    UserSerializer,
)
from rest_framework.views import APIView
from rest_framework import permissions

class UserAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer(User)