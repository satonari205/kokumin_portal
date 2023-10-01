from accounts.models import User
from django.contrib.auth.hashers import make_password
from .serializers import (
    CurrentUserSerializer,
    UserSerializer,
    RegisterSerializer,
)
from rest_framework.views import APIView
from rest_framework.generics import (
    RetrieveAPIView,
    CreateAPIView,
)
from rest_framework import permissions,status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.status import HTTP_200_OK
from django.http import JsonResponse
from django.middleware.csrf import get_token
from dj_rest_auth.jwt_auth import get_refresh_view
from dj_rest_auth.views import LoginView as OrgLoginView
from django.middleware.csrf import get_token

def CsrfView(request):
    return JsonResponse({'token': get_token(request)})

def PingView(request):
    return JsonResponse({'result': True})

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def get_current_user(request):
    serializer = CurrentUserSerializer(request.user)
    return Response(serializer.data, status=HTTP_200_OK)

class CSRFView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        return Response({"csrfToken": get_token(request)})
    
# class LoginView(OrgLoginView):
#     authentication_classes = []

OrgRefreshViewCls = get_refresh_view()

class RefreshView(OrgRefreshViewCls): 
    authentication_classes = []

    def finalize_response(self, request, response, *args, **kwargs):
        res = super().finalize_response(request, response, *args, **kwargs)
        if res.status_code != 200:
            return res

        for key in ["access", "refresh"]:
            if key in res.data:
                del res.data[key]
        return res

class UserRetrieveAPIView(RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

    def get_queryset(self):
        user_id = self.kwargs.get('pk')
        user = User.objects.filter(id=user_id)
        return user

class RegisterAPIView(CreateAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        validated_data = serializer.validated_data
        password = validated_data.get('password')
        hashed_password = make_password(password)

        user = User.objects.create(
            username=validated_data.get('username'),
            nickname=validated_data.get('nickname'),
            password=hashed_password
        )
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
