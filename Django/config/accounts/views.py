from django.contrib.auth import get_user_model

from .serializers import UserSerializer
from .authenticate import CookieHandlerJWTAuthentication

from django.middleware import csrf
from django.conf import settings

from rest_framework import status, permissions
from rest_framework.generics import (
    CreateAPIView,
    RetrieveUpdateAPIView,
)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.response import Response

User = get_user_model()

class RegisterView(CreateAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer

class TokenObtainView(TokenObtainPairView):
    # Token発行
    def post(self, request, *args, **kwargs):
        # 任意のSerializerを引っ張ってくる(今回はTokenObtainPairViewで使われているserializers.TokenObtainPairSerializer)
        serializer = self.get_serializer(data=request.data)
        # 検証
        try:
            serializer.is_valid(raise_exception=True)
        # エラーハンドリング
        except jwt_exp.TokenError as e:
            raise jwt_exp.InvalidToken(e.args[0])

        res = Response(serializer.validated_data, status=status.HTTP_200_OK)

        try:
            res.delete_cookie("access_token")
        except Exception as e:
            print(e)

        # CookieヘッダーにTokenをセットする
        res.set_cookie(
            "access_token",
            serializer.validated_data["access"],
            max_age=60 * 10,
            httponly=True,
        )
        res.set_cookie(
            "refresh_token",
            serializer.validated_data["refresh"],
            max_age=60 * 60 * 24,
            httponly=True,
        )
        # 最終的にはaccess_tokenとrefresh_tokenを返してもらう
        return res

def refresh_get(request):
    try:
        refresh_token = request.COOKIES["refresh_token"]
        return JsonResponse({"refresh": refresh_token}, safe=False)
    except Exception as e:
        print(e)
        return None

class TokenRefresh(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except jwt_exp.TokenError as e:
            raise jwt_exp.InvalidToken(e.args[0])
        # token更新
        res = Response(serializer.validated_data, status=status.HTTP_200_OK)
        # 既存のAccess_Tokenを削除
        res.delete_cookie("user_token")
        # 更新したTokenをセット
        res.set_cookie(
            "user_token",
            serializer.validated_data["access"],
            max_age=60 * 60 * 24,
            httponly=True,
        )
        return res

class LoginUserView(RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    authentication_classes = (CookieHandlerJWTAuthentication)

    # お手本ではAPIViewを使ってget_object()をオーバーロードしてTokenの検証をしていた
    # しかし、generics以下のViewでは無理なので、代わりにget()をオーバーライドしてこちらの処理過程にTokenの検証を挿入
    def get(self, request, *args, **kwargs):
        # Set-CookieにしているのでCookieからトークンを入手
        jwt_token = request.COOKIES.get("access_token")
        if not jwt_token:
            return Response(
                {"error": "No Token"}, status=status.HTTP_400_BAD_REQUEST
            )
        # Token検証
        try:
            payload = jwt.decode(
                jwt_token, settings.SECRET_KEY, algorithms=["HS256"]
            )
            # もしくはreturn payload["user_id"]でもありだそうな。
            loginuser = User.objects.get(id=payload["user_id"])
            # オブジェクトで返ってくるのでStringならエラーハンドリング
            if type(loginuser) == str:
                return Response(
                    {"error": " Expecting an Object type, but it returned a String type."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            # アクティブチェック
            if loginuser.is_active:
                # 通常、generics.CreateAPIView系統はこの処理をしなくてもいい
                # しかしtry-exceptの処理かつ、オーバーライドしているせいかResponse()で返せとエラーが出るので以下で処理
                response = UserSerializer(self.request.user)
                return Response(response.data, status=status.HTTP_200_OK)
            return Response(
                {"error": "user is not active"}, status=status.HTTP_400_BAD_REQUEST
            )
        # Token期限切れ
        except jwt.ExpiredSignatureError:
            return "Activations link expired"
        # 不正なToken
        except jwt.exceptions.DecodeError:
            return "Invalid Token"
        # ユーザーが存在しない
        except User.DoesNotExist:
            payload = jwt.decode(
                jwt_token, settings.SECRET_KEY, algorithms=["HS256"]
            )
            return payload["user_id"]

    # PUTメソッドを無効
    def update(self, request, *args, **kwargs):
        response = {"message": "PUT method is not allowed"}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(TokenObtainPairView):
    permission_classes = (permissions.IsAuthenticated,)

    # LogoutでCookieからToken削除
    # blacklist()を使って、RefreshTokenを無効にする処理を入れてもよい？
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except jwt_exp.TokenError as e:
            raise jwt_exp.InvalidToken(e.args[0])

        res = Response(serializer.validated_data, status=status.HTTP_200_OK)

        try:
            res.delete_cookie("access_token")
            res.delete_cookie("refresh_token")
        except Exception as e:
            print(e)
            return None

        return Response({"Message": "Logout"}, status=status.HTTP_200_OK)

def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})