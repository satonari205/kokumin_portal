from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('user/', views.UserListAPIView.as_view(), name="accounts"),
    path('login/', views.LoginAPIView.as_view(), name="accounts"),
    path('signup/', views.RegisterAPIView.as_view(), name="accounts"),
]