from accounts.models import User
from django.contrib.auth.hashers import make_password
from .serializers import (
    CurrentUserSerializer,
    UserSerializer,
)
from rest_framework.generics import (
    RetrieveAPIView,
)
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.status import HTTP_200_OK
from django.middleware.csrf import get_token

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_current_user(request):
    serializer = CurrentUserSerializer(request.user)
    return Response(serializer.data, status=HTTP_200_OK)

class UserRetrieveAPIView(RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

    def get_queryset(self):
        user_id = self.kwargs.get('pk')
        user = User.objects.filter(id=user_id)
        return user

# class RegisterAPIView(CreateAPIView):
#     permission_classes = [permissions.AllowAny]
#     queryset = User.objects.all()
#     serializer_class = RegisterSerializer

#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
        
#         validated_data = serializer.validated_data
#         password = validated_data.get('password')
#         hashed_password = make_password(password)

#         user = User.objects.create(
#             username=validated_data.get('username'),
#             nickname=validated_data.get('nickname'),
#             password=hashed_password
#         )
        
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
