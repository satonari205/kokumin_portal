from django.urls import path
from accounts.views import (
    UserAPIView,
    MyTokenObtainPairView,
    MyTokenRefreshView,
)
urlpatterns = [
    path('jwt/create', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/logout', MyTokenRefreshView.as_view(), name='token_refresh'),

    path('/', UserAPIView.as_view()),
]