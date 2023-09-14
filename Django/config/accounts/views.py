from django.shortcuts import render
from .models import User
from .serializers import UserSerializer,LoginSerializer,SignupSerializer
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import generics


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

class LoginViewSet():
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=["POST"])
    def login(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        employee_number = serializer.validated_data.get("employee_number")
        password = serializer.validated_data.get("password")
        user = authenticate(employee_number=employee_number, password=password)
        if not user:
            return JsonResponse(
                data={"msg": "either employee number or password is incorrect"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            login(request, user)
            return JsonResponse(data={"role": user.Role(user.role).name})

    @action(methods=["POST"], detail=False)
    def logout(self, request):
        logout(request)
        return HttpResponse()

class UserCreateAPIView(generics.CreateAPIView):
    serializer_class= SignupSerializer

    @staticmethod
    def post(request, *args, **kwargs):
        signup_user = SignupSerializer(data=request.data)
        if signup_user.is_valid(raise_exception=True):
            # パスワードと確認パスワードが一致しない場合
            if signup_user.validated_data['password'] != request.data['password_confirmation']:
                return Response({'error': 2}, status=HTTP_400_BAD_REQUEST)

            # UserIDがすでに使われていた場合
            if User.objects.filter(username=signup_user.validated_data['username']).exists():
                return Response({'error': 3}, status=HTTP_400_BAD_REQUEST)

            # エラーなし
            try:
                signup_user.save()
            except:
                # データベースエラー
                return Response({'error': 11}, status=HTTP_500_INTERNAL_SERVER_ERROR)

            return Response(signup_user.data, status=HTTP_201_CREATED)
        return Response(signup_user.errors, status=HTTP_400_BAD_REQUEST)