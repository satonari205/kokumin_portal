from django.urls import path

from .views import (
    csrf,
    TokenObtainView,
    LoginUserView,
    RegisterView,
    refresh_get,
    TokenRefresh,
    LogoutView,
)
app_name = 'accounts'

urlpatterns = [
    path('csrf/create', csrf),
    path('cookie/create', TokenObtainView.as_view(), name='jwtcreate'),
    path('cookie/refresh', refresh_get),
    path('cookie/newtoken', TokenRefresh.as_view(), name='jwtrefresh'),
    path('register/', RegisterView.as_view(), name='create'),
    path('login/', LoginUserView.as_view(), name='loginuser'),
    path('logout/', LogoutView.as_view(), name='logout'),
]