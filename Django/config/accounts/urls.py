from django.urls import path
from django.views.generic import 
from . import views

app_name = 'accounts'

urlpatterns = [
    path('user/<int:pk>', views.UserListAPIView.as_view(), name="accounts"),
    path('login/', views.UserListAPIView.as_view(), name="accounts"),
    path('signup/', views.CreateUserAPIView.as_view(), name="accounts"),
]